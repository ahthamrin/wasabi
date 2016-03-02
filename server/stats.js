module.exports = function mountStats(server) {
  // console.log('mountSocketIO', server.models);

  var AccessToken = server.models.AccessToken
    , User = server.models.user
    , Course = server.models.Course
    , Class = server.models.Class
    , _ = require('lodash')
    , async = require('async')
    , fs = require('fs')
    , statCache = {}

  ;

  var stats = server.wasabi.classStats = server.wasabi.classStats || {};

  statCache.classTimeData = {};
  statCache.userLatestData = {};


  this.addData = function(classId, userId, type, data) {
    if (type !== 'faces')
      console.log('stats addData',classId, userId, type, data);

    var thisData = {cid: classId, uid: userId, type: type, data: data, timestamp: (new Date()).valueOf()};
    if (!statCache.classTimeData[classId])
      statCache.classTimeData[classId] = [];
    else
      statCache.classTimeData[classId].push(thisData);

    if (!statCache.userLatestData[userId])
      statCache.userLatestData[userId] = {};

    statCache.userLatestData[userId][type] = thisData;
  }

  this.getClassData = function(classId) {
    return statCache.classTimeData[classId];
  }

  var getLatestClassData = function(classId, ts) {
    var classData = statCache.classTimeData[classId];

    var tsmin = ts - 1*60000; // shift until 1 min before ts
    while (classData) {
      if (classData[0].timestamp < tsmin)
        classData.shift();
      else
        break;
      // console.log('shift classData', classData[0]);
    }

    var classDataLength = classData.length;
    var idx = 0;
    for (idx = 0; idx < classDataLength; ++idx) {
      if (classData[idx].timestamp > ts) {
        break;
      }
    }
    console.log('latest class data idx', idx);
    return classData.slice(idx);
  }

  this.getStats = function(classId, ts) {
    var stats = {};
    var clients = {};
    var messages = [];
    var slides = {};

    var slideData = function(idx) {
      return {
        idx: idx,
        latest: 0,
        views: 0,
        taps: []
      }
    }

    var curTime = (new Date()).valueOf();

    // console.log('class data', statCache.classTimeData, JSON.stringify(statCache.userLatestData));

    try {
      stats.runtime = curTime - statCache.classTimeData[classId][0].timestamp;
      stats.timestamp = statCache.classTimeData[classId][statCache.classTimeData[classId].length-1].timestamp;
    }
    catch(e) {
      console.log('empty classTimeData?', statCache.classTimeData[classId]);
      stats.runtime = 0;
      stats.timestamp = 0;
      return stats;
    }

    stats.clients = 0;
    stats.participants = 0;
    stats.slides = slides;
    stats.messages = messages;

    // clients, participants, latest slides
    for (user in statCache.userLatestData) {
      var userOnline = false;
      for (t in statCache.userLatestData[user]) {
        if (statCache.userLatestData[user][t].timestamp >= ts) {
          userOnline = true;
        }
      }
      if (userOnline) {
        stats.clients++;
        try {
          if (statCache.userLatestData[user]['faces'].timestamp > ts) {
            stats.participants += statCache.userLatestData[user]['faces'].data.faces.length;
          }
        }
        catch (e) {
          // console.log('userOnline face', e , user, statCache.userLatestData[user]);
        }

        try {
          latestSlide = statCache.userLatestData[user]['slide-change'].data.slideNo;
          if (!slides[latestSlide])
            slides[latestSlide] = slideData(latestSlide);
          slides[latestSlide].latest++;
        }
        catch (e) {
          console.log('userOnline slide-change', e , user, statCache.userLatestData[user]);
        }
      }
    }

    var classData = getLatestClassData(classId, ts);
    var classDataLength = classData.length;
    var idx = 0;
    for (idx = 0; idx < classDataLength-1; ++idx) {
      var thisData = classData[idx];
      switch (thisData.type) {
        case 'slide-change':
          if (!slides[thisData.data.slideNo])
            slides[thisData.data.slideNo] = slideData(thisData.data.slideNo);
          slides[thisData.data.slideNo].views++;
          break;

        case 'slide-tap':
          if (!slides[thisData.data.slideNo])
            slides[thisData.data.slideNo] = slideData(thisData.data.slideNo);
          slides[thisData.data.slideNo].taps.push(thisData.data);
          break;

        case 'chat-send':
          messages.push(thisData.data);
          break;

        default:
      }
    }

    console.log('getStats',JSON.stringify(stats));
    return stats;

  }

  return {
    addData: this.addData,
    getClassData: this.getClassData,
    getStats: this.getStats
  }

};

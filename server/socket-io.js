module.exports = function mountSocketIO(server) {
  // console.log('mountSocketIO', server.models);

  var AccessToken = server.models.AccessToken
    , User = server.models.user
    , Course = server.models.Course
    , Class = server.models.Class
    , _ = require('lodash')
    , liveIO = server.io.of('/live')
    , statIO = server.io.of('/stats')
    , sockapiIO = server.io.of('/sockapi')
    , fs = require('fs')
    , cv = require('opencv')
    , async = require('async')
    , clientStats = require('./stats')(server);

  ;

  console.log('clientStats', clientStats);

  server.wasabi = server.wasabi || {};
  server.wasabi.loggedIn = server.wasabi.loggedIn || {};

  function fwdToDest(socket, cmd, msg) {
    _.forEach(liveIO.adapter.rooms[socket.liveClass.classId], 
      function (v, k) {
        var s = liveIO.connected[k];
        if (s.liveClass.userId === msg.to) {
          s.emit(cmd, msg);
        }
      }
    );
  }

  liveIO.on('connection', function(socket) {
    console.log('liveIO connection', socket.id);

    setTimeout(function() {
      // check auth; disconnect if not
      if (socket && !socket.userToken) {
        console.log('socket disconnect', socket.id);
        socket.disconnect();
      }
    }, 3000);

    socket.on('join', function(msg) {
      console.log('liveIO:join',msg);

      // check auth
      var token = server.wasabi.loggedIn[msg.token];
      var validToken = new AccessToken({id:msg.token+'x'});

      validToken.validate(function(err, isValid) {
        console.log('validate', arguments);
      });

      if (token) {
        console.log('token',token.id);
        socket.userToken = token;
        socket.liveClass = msg;

        var res = _.find(liveIO.adapter.rooms[msg.classId], function(v, k) {
          try {
            console.log('sockfind', k);
            var sock = liveIO.connected[k];
            return (sock.liveClass.userId == msg.userId) && sock.liveClass.primary;
          }
          catch(e) { return null; }
        });
        if (!res) {
          liveIO.to(msg.classId).emit('joined',{userId: msg.userId, lecturer: msg.lecturer, classId: msg.classId});
          socket.emit('joined-primary',{userId: msg.userId, lecturer: msg.lecturer, classId: msg.classId});
          socket.liveClass.primary = true;
        }
        else {
          socket.liveClass.primary = false;
          socket.emit('joined-secondary',{userId: msg.userId, lecturer: msg.lecturer, classId: msg.classId});
        }
        socket.join(msg.classId, function(err) {
          console.log('socket cannot join room', msg.classId, socket);
        });


        // send current sockets to the newly joined socket
        // console.log('room members', Object.keys(liveIO.adapter.rooms[msg.classId]));
        var roomMembersUnfiltered = _.map(liveIO.adapter.rooms[msg.classId], function(v, k) {
          var s = liveIO.connected[k];
          console.log('members', s.userToken);
          if (s.liveClass.primary)
            return {userId:s.liveClass.userId, lecturer:s.liveClass.lecturer, username: s.userToken.user.username};
          else
            return null;
        });
        var roomMembers = _.filter(roomMembersUnfiltered, function(sock) {
          return sock;
        });
        console.log('joined-members', socket.liveClass.primary, roomMembers);
        socket.emit('joined-members', roomMembers);
      }
      else {
        try {
          console.log('bad token');
          delete socket.userToken;
          delete socket.liveClass;
        }
        catch(e) {}
      }
    });

    socket.on('disconnect', function(){
        try {
          if (socket.liveClass.primary) {
            liveIO.to(socket.liveClass.classId).emit('left',{userId:socket.liveClass.userId});
          }
        }
        catch(e) {}
        console.log('liveIO disconnected');
    });

    socket.on('slide-change', function(msg) {
      if (!socket.liveClass)
        return;

      clientStats.addData(socket.liveClass.classId, socket.liveClass.userId, 'slide-change', msg);

      if (socket.liveClass.lecturer && socket.liveClass.primary) {
        if (msg.slideNo > -1) {
          msg.userId = socket.liveClass.userId;
          liveIO.to(socket.liveClass.classId).emit('slide-change', msg);
        }
      }
      else {
        console.log('attendee slide-change',msg);
      }
    });

    socket.on('slide-tap', function(msg) {
      if (!socket.liveClass)
        return;

      clientStats.addData(socket.liveClass.classId, socket.liveClass.userId, 'slide-tap', msg);
    });

    socket.on('chat-send', function(msg) {
      clientStats.addData(socket.liveClass.classId, socket.liveClass.userId, 'chat-send', msg);
      msg.id = socket.liveClass.classId + (new Date()).getTime();
      liveIO.to(socket.liveClass.classId).emit('chat-send-fwd',msg);
    });

    socket.on('chat-key', function(msg) {
      clientStats.addData(socket.liveClass.classId, socket.liveClass.userId, 'chat-key', msg);
    });

    socket.on('chat-size-small', function(msg) {
      clientStats.addData(socket.liveClass.classId, socket.liveClass.userId, 'chat-size-small', msg);
    });

    socket.on('chat-size-large', function(msg) {
      clientStats.addData(socket.liveClass.classId, socket.liveClass.userId, 'chat-size-large', msg);
    });

    socket.on('rtc-init-offer', function(msg) {
      if (socket.liveClass.primary)
        fwdToDest(socket, 'rtc-init-offer', msg);
    });

    socket.on('rtc-request-offer', function(msg) {
      if (socket.liveClass.primary)
        fwdToDest(socket, 'rtc-request-offer', msg);
    });

    socket.on('rtc-offer', function(msg) {
      if (socket.liveClass.primary)
        fwdToDest(socket, 'rtc-offer', msg);
    });

    socket.on('rtc-answer', function(msg) {
      if (socket.liveClass.primary)
        fwdToDest(socket, 'rtc-answer', msg);
    });

    socket.on('rtc-bye', function(msg) {
      if (socket.liveClass.primary)
        fwdToDest(socket, 'rtc-bye', msg);
    });

    socket.on('rtc-candidate', function(msg) {
      if (socket.liveClass.primary)
        fwdToDest(socket, 'rtc-candidate', msg);
    });

    socket.on('rtc-vidcap', function(msg) {
      try {
        if (!socket.liveClass.primary) {
          socket.emit('joined-secondary',{userId: socket.liveClass.userId, classId: socket.liveClass.classId});
          return;
        }

        msg.userId = socket.liveClass.userId;
        liveIO.to(socket.liveClass.classId).emit('rtc-vidcap-fwd',msg);

        // XXX simulate multiple attendees sending video capture
        /*
        if (!socket.liveClass.attendeeDebug)
          socket.liveClass.attendeeDebug = 1;
        var debugReply = [];
        for (var i = 110; i < 115; i++) {
          debugReply.push({
            userId: msg.userId.replace(/10\d$/,i),
            rec: msg.rec,
            jpg: msg.jpg
          });
        }

        (function sendDebugReply() {
          socket.liveClass.attendeeDebug++;
          if (socket.liveClass.attendeeDebug > 500) {
            // socket.liveClass.attendeeDebug = 0;
            return;
          }

          var thisMsg = debugReply.pop();
          if (thisMsg) {
            console.log('send rtc-vidcap-fwd',thisMsg.userId, socket.liveClass.attendeeDebug);
            liveIO.to(socket.liveClass.classId).emit('rtc-vidcap-fwd',thisMsg);
          }
          if (debugReply.length) {
            setTimeout(sendDebugReply,100);
          }
        })()
        // end simulation
        */

        async.waterfall([
          function writeFile(callback) {
            if (msg.jpg.length) {
              var tmpFilename = '/tmp/'+msg.userId+msg.jpg.length+'.jpg';
              var jpgData = new Buffer(msg.jpg.replace(/.+base64,/,''), 'base64');
              fs.writeFile(tmpFilename, jpgData, function(err) {
                if (err)
                  tmpFilename = null;
                callback(err, tmpFilename);
              });
            }
            else
              callback('err', null);
          },
          function readImage(tmpFilename, callback) {
            cv.readImage(tmpFilename, function(err, im) {
              if (err)
                callback(err,tmpFilename);
              if (im.width() < 1 || im.height < 1)
                callback(im, tmpFilename);
              callback(null, tmpFilename, im);
            });
          },
          function detectObject(tmpFilename, im, callback) {
            im.detectObject(cv.FACE_CASCADE, {}, function(err, faces) {
              if (faces && faces.length) {
                clientStats.addData(socket.liveClass.classId, msg.userId, 'faces', {timestamp: msg.timestamp, faces: faces});
              }
              callback(err, tmpFilename);
            });
          }
        ], function(err, result) {
          if (result) {
            fs.unlink(result, function(err) {
              if (err)
                console.log('unlink err', err, result);
            });
          }
          msg.jpg = msg.jpg.length;
          // console.log('receive vid capture', msg);
          socket.emit('rtc-vidcap-reply',msg);
          delete msg.jpg;
        });
      }
      catch(e) { console.log('rtc-vidcap err',e);}
    });

    socket.on('act-log', function(msg) {
      clientStats.addData(socket.liveClass.classId, msg.userId, msg.type, {timestamp: msg.timestamp, action: msg.action});
    });

  }); // liveIO

  sockapiIO.on('connection', function(socket) {
    console.log('sockapiIO connection', socket.id);

    socket.on('user-names', function(msg) {
      socket.emit('result', msg);
    });

    socket.on('req-course-create', function(msg) {
      console.log('res-course-create', msg);
      socket.emit('res-course-create', msg);
    });
  }); // sockapiIO

  statIO.on('connection', function(socket) {
    
    var tokenData = {token: null, timestamp: null};

    setTimeout(function() {
      // check auth; disconnect if not
      var token = server.wasabi.loggedIn[tokenData.token];
      if (!token) {
        console.log('socket disconnect', socket.id);
        socket.disconnect();
      }
    }, 30000);

    socket.on('req-stats', function (msg) {
      if (msg.token) { // should receive token every 10 sec
        tokenData.token = msg.token;
        tokenData.timestamp = new Date();
      }

      // try {
        var latestStats = clientStats.getStats(msg.cid, msg.timestamp);
        socket.emit('stats',latestStats);
      // }
      // catch (e) {
      //   console.log('getStats err',e);        
      // }

    });

  }); // statIO

};

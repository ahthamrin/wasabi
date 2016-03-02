;
angular.module('wasabi').controller('DashboardLiveStatsController', [
'$scope', '$rootScope', '$q', '$location', '$state', '$stateParams', 'deviceDetector',  'LoopBackAuth', 'User', 'Course', 'Class', 'ObjectCache', 'SlideDeck', 'statsIO', '$interval',
function ($scope, $rootScope, $q, $location, $state, $stateParams, deviceDetector, LoopBackAuth, User, Course, Class, ObjectCache, SlideDeck, statsIO, $interval) {
	var thisTime = new Date();

	var stats = $scope.stats = {};
	$scope.chatMessages = [];
	var slideData = $scope.slideData = [];

	stats.slideChanges = 0;
	stats.chatMsgs = 0;
	stats.slideTaps = 0;

	var hasSlides = $q(function(resolve, reject) {
		if ($stateParams.did == 0) {
			(ObjectCache.$get([$stateParams.cid,'slideDecks']) ||
				Class.slideDecks({id:$stateParams.cid}))
			.$promise
			.then(function(dl) {
				ObjectCache.set([$stateParams.cid,'slideDecks'],dl);
				$state.go('dash-live-stats',{cid:$stateParams.cid,did:dl[0].id},{location:'replace'});
				reject({});
			});
		}
		else {
			(ObjectCache.$get([$stateParams.did,'slides']) ||
				SlideDeck.slides({id: $stateParams.did}))
			.$promise
			.then(function(sl) {
				$scope.slides = sl = _.sortBy(sl, function(n) {return n.order;});
				// debugLog(sl);

				_.forEach($scope.slides, function(val, idx) {
					console.log('slide',arguments);
					$scope.slides[idx].filepath = '/slide-decks/'+val.slideDeckId.replace(/^0+/,'')+'/'+val.filename;
					$scope.slides[idx].currentViews = 0;
					$scope.slides[idx].totalViews = 0;
					$scope.slides[idx].totalTaps = 0;
					$scope.slides[idx].tapData = [];
				});
				ObjectCache.set([$stateParams.did,'slides'], sl);
				resolve({});
			});
		}
	});

	var serverTimestamp = 0;
	var ivalStop = 0;

	hasSlides
	.then(function() {
		var reqData = {cid: $stateParams.cid, did: $stateParams.did, token: LoopBackAuth.accessTokenId};
		// get stats in  sec interval
		statsIO.emit('req-stats', reqData);
		ivalStop = $interval(function() {
			console.log('emit req-stats');
			reqData.timestamp = serverTimestamp;
			statsIO.emit('req-stats', reqData);
		}, 5000);

	});

	$scope.graph = {
		options: {
	    chart: {
	      type: 'lineChart',
	      height: 350,
	      margin : {
	          top: 20,
	          right: 20,
	          bottom: 40,
	          left: 55
	      },
	      x: function(d){ return d.x; },
	      y: function(d){ return d.y; },
		    clipEdge: true,
		    duration: 500,
		    stacked: false,
	      xDomain: [0,100],
	      useInteractiveGuideline: true,
	      dispatch: {
	        stateChange: function(e){ console.log("stateChange"); },
	        changeState: function(e){ console.log("changeState"); },
	        tooltipShow: function(e){ console.log("tooltipShow"); },
	        tooltipHide: function(e){ console.log("tooltipHide"); }
	      },
	      xAxis: {
	          axisLabel: 'Time',
	          tickFormat: function(d){
	          		var dd = new Date(d*1000);
	              return d3.format('02d')(dd.getMinutes())+":"+d3.format('02d')(dd.getSeconds());
	          },
	      },
	      yAxis: {
	          axisLabel: 'Count',
	          tickFormat: function(d){
	              return d3.format('d')(d);
	          },
	          axisLabelDistance: -20
	      },
	      callback: function(chart){
	          console.log("!!! lineChart callback !!!");
	      }
	    },
	    title: {
	        enable: true,
	        text: 'User Actions'
	    },
	    subtitle: {
        enable: false,
        text: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
        css: {
            'text-align': 'center',
            'margin': '10px 13px 0px 7px'
        }
	    },
	    caption: {
        enable: false,
        html: '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style="text-decoration: underline;">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style="color: darkred;">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href="https://github.com/krispo/angular-nvd3" target="_blank">2</a>, 3]</sup>.',
        css: {
            'text-align': 'justify',
            'margin': '10px 13px 0px 7px'
        }
      }
		},
		data: [
      {
          values: [],//[{x:0,y:0}],      //values - represents the array of {x,y} data points
          key: 'Clients', //key  - the name of the series.
          color: '#ff7f0e'  //color - optional: choose your own line color.
      },
      {
          values: [],//[{x:0,y:0}],
          key: 'Participants',
          color: '#2ca02c'
      },
      {
          values: [],//[{x:0,y:0}],
          key: 'Taps',
          color: '#c20ac2'
      },
      {
          values: [],//[{x:0,y:0}],
          key: 'Messages',
          color: '#7777ff',
          // area: true      //area - set to true if you want this line to turn into a filled area chart.
      }
		],
		datapoints: 30 // number of data points in graph
	}

	var graphKeyMap = _.zipObject(_.pluck($scope.graph.data, 'key'),_.range($scope.graph.data.length));

	var appendGraphData = function(key, x, y, op) {
		var idx = graphKeyMap[key];
		var valArray = $scope.graph.data[idx].values;
		// console.log('val',key, $scope.graph.data[idx].values)
		if (valArray.length && valArray[valArray.length-1].x === x) {
			switch(op) {
				case 'replace':
					valArray[valArray.length-1].y = y;
					break;
				case 'add':
					valArray[valArray.length-1].y += y;
					break;
			}
		}
		else {
			valArray.push({x: x, y: y});
		}
		while (valArray.length > $scope.graph.datapoints) {
			valArray.shift();
		}
	}

	$scope.$on('$destroy', function() {
		$interval.cancel(ivalStop);
	});

	$scope.$on('statsIO:connect', function(ev, msg) {
		console.log('statsIO:connect', ev, msg);
	});

	$scope.$on('statsIO:disconnect', function(ev, msg) {
		console.log('statsIO:disconnect', ev, msg);
	});

	$scope.$on('statsIO:stats', function(ev, msg) {
		// console.log('statsIO:stats', ev, msg);
		serverTimestamp = msg.timestamp;

		var graphXval = parseInt(msg.timestamp/1000);

    stats.runtime = parseInt(msg.runtime/1000);
    stats.clients = msg.clients;
    stats.participants = msg.participants;

    appendGraphData('Clients', graphXval, msg.clients, 'replace');
    appendGraphData('Participants', graphXval, msg.participants, 'replace');

    if (msg.messages && msg.messages.length) {
    	stats.chatMsgs += msg.messages.length;
    	$scope.chatMessages = $scope.chatMessages.concat(msg.messages);

    	appendGraphData('Messages', graphXval, msg.messages.length, 'add');

    }

    for (var i = 0; i < $scope.slides.length; ++i)
    	$scope.slides[i].currentViews = 0;

    for (var s in msg.slides) {
    	if (s < 0)
    		continue;

    	stats.slideChanges += msg.slides[s].views;

    	if (msg.slides[s].taps && msg.slides[s].taps.length) {
      	stats.slideTaps += msg.slides[s].taps.length;
      	$scope.slides[s].totalTaps += msg.slides[s].taps.length;
      	$scope.slides[s].tapData = $scope.slides[s].tapData.concat(msg.slides[s].taps);

      	appendGraphData('Taps', graphXval, msg.slides[s].taps.length, 'add');
    	}
    	$scope.slides[s].currentViews = msg.slides[s].latest;
    	$scope.slides[s].totalViews += msg.slides[s].views;
    }

    appendGraphData('Messages', graphXval, 0, 'add');
    appendGraphData('Taps', graphXval, 0, 'add');
		$scope.graph.options.chart.xDomain = [graphXval-120, graphXval+10];
    $scope.graph.api.update(); // update graph

    console.log('stats', $scope.stats, $scope.slides);
	});

}]);

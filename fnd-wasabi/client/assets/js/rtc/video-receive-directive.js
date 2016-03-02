;
angular.module('wasabi').directive('videoReceive',
	[ '$interval', 'LoopBackAuth', function($interval, LoopBackAuth) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: './templates/rtc/video-receive-template.html',
			link: function(scope, elem, attrs) {
				var video = elem.find('video')[0]
					, receivedVidcap = {}
					, receivedVidnum = 0
					;

				scope.attendeeVideos = [];

		    function onPlay() {
    			console.log('videoReceive play');
    			scope.receivedVideoPlaying = true;

	    		console.log('videoReceive size', video.videoWidth, video.videoHeight);

	    		scope.$apply();
		    }

		    function onPause() {
    			console.log('videoReceive pause');
    			scope.$apply(scope.receivedVideoPlaying = false);
		    }

		    function onEnded() {
    			console.log('videoReceive ended');
    			scope.$apply(scope.receivedVideoPlaying = false);
		    }

		    function startVideo() {
					video.src = window.URL.createObjectURL(scope.remoteStream.stream);
	    		video.addEventListener('play', onPlay);
	    		video.addEventListener('pause', onPause);
	    		video.addEventListener('ended', onEnded);
		    }

		    function stopVideo() {
		    	try {
		    		video.pause();
		    		video.removeEventListener('play', onPlay);
		    		video.removeEventListener('pause', onPause);
		    		video.removeEventListener('ended', onEnded);
		    	}
		    	catch (e) {}
		    }

		    var firedOnce = 0;
		    scope.$on('liveIO:rtc-vidcap-fwd', function(evt, msg) {
		    	// if (firedOnce > 100)
		    	// 	return;

		    	firedOnce++;
		    	var thisTime = new Date();

		    	// remove stale video capture
		    	var deleteAttendeeList = [];
		    	try {
			    	for (var i=0; i < scope.attendeeVideos.length; ++i) {
			    		if (scope.attendeeVideos[i].recvd - thisTime < -30000)
			    			deleteAttendeeList.push(i);
			    	}
			    	receivedVidnum -= deleteAttendeeList.length;
			    	var i = -1;
			    	while (i = deleteAttendeeList.pop()) {
			    		console.log('splice',i);
			    		scope.attendeeVideos.splice(i,1);
			    	}
		    	}
		    	catch(e) { console.log('delete stale video capture error',scope.attendeeVideos);}

		    	if (msg.userId === LoopBackAuth.currentUserId)
		    		return;
		    	msg.recvd = thisTime;
		    	if (!receivedVidcap[msg.userId]) {
		    		// recvd order no of this user id
		    		msg.recvdNo = receivedVidnum++;
		    		console.log('new attendee', receivedVidnum);
		    	}
		    	else {
		    		msg.recvdNo = receivedVidcap[msg.userId].recvdNo;
		    	}
	    		scope.attendeeVideos[msg.recvdNo] = msg;
		    	receivedVidcap[msg.userId] = msg;
		    	// console.log('rtc-vidcap-fwd', scope.attendeeVideos);
		    });

				scope.$watch('remoteStream.stream', function(newVal) {
					console.log('videoReceive stream changed', newVal);
					stopVideo();
					startVideo();
				});

	    	elem.on('$destroy', function() {
	    		stopVideo();
	    		console.log('videoReceive $destroy');
	    	});
			}
		};
	}
]);
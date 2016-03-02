;
angular.module('wasabi').directive('videoSend',
	[ 'liveIO', '$q', '$interval', function(liveIO, $q, $interval) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: './templates/rtc/video-send-template.html',
			link: function(scope, elem, attrs) {
				var video = elem.find('video')[0]
					, canvasAttendee = elem.find('canvas')[0]
					, ctxAttendee = canvasAttendee.getContext('2d')
					, videoAspectRatio
					, cameraPromise
					, unbindWindowWatcher
					, localMediaStream
					, remoteMediaStream
					, rtcPeerData = {}
					, rtcConfig = {
						iceServers: [ {urls: "stun:stun.l.google.com:19302"} ]
					}
					, sdpConstraintsReceive = {'mandatory': {
                        'OfferToReceiveAudio':true, 
                        'OfferToReceiveVideo':true }
						}
					, sdpConstraintsSend = {'mandatory': {
                        'OfferToReceiveAudio':false, 
                        'OfferToReceiveVideo':false }
						}
					, userMediaAudio = {video: false, audio: true}
					, userMediaVideo = {video: true, audio: true}
					, userMediaVideoOnly = {video: true, audio: false}
					, userMediaScreen = {video: {mandatory: {chromeMediaSource: 'desktop'}}}
					, userMedia = userMediaVideoOnly
					, resizeTimeout
					, nextUserMediaCapture
					, captureBacklog = []
					;

				console.log('videoSend id',scope.myId, scope.lecturer);
				console.log('vidsrc',video.src);
				scope.canvasOn = true;
				scope.videoPlaying = false

				function resizeCanvas() {
	    		canvasAttendee.clientWidth = canvasAttendee.width = video.videoWidth/2;
	    		canvasAttendee.clientHeight = canvasAttendee.height = video.videoHeight/2;
				}

		    var sendCaptureStep = 0
		    	, sendCaptureIval = 20
		    	;
		    function canvasStep(timestamp) {
		    	resizeCanvas();
		    	if (sendCaptureStep === 0) {
			    	ctxAttendee.drawImage(video,0,0, canvasAttendee.width, canvasAttendee.height);

			    	var canvasJPG = canvasAttendee.toDataURL('image/jpeg', 0.8);
			    	// put into jpg backlog or send if backlog is empty
		    		var thisTime = new Date();
		    		if (canvasJPG.length > 10) {
				    	if (captureBacklog.length) {
				    		captureBacklog.push({rec: thisTime, jpg: canvasJPG});
				    	}
				    	else {
				    		liveIO.emit('rtc-vidcap', {rec: thisTime, jpg: canvasJPG});
				    	}		    		
		    		}
		    	}
		    	sendCaptureStep = ++sendCaptureStep % sendCaptureIval;

		    	if (scope.videoPlaying)
		    		window.requestAnimationFrame(canvasStep);
		    }

				scope.$on('liveIO:rtc-vidcap-reply', function() {
					// send backlog if any
					if (captureBacklog.length) {
						var thisSend = captureBacklog.pop();
						thisSend.send = new Date();
						liveIO.emit('rtc-vidcap', thisSend);
						console.log('sent rtc-vidcap but backlog is ', captureBacklog.length);
					}
					if (captureBacklog.length) {
						// still got backlog, what to do?
					}
				})

		    function onPlay() {
    			// console.log('videoSend play');
    			scope.$apply(scope.videoPlaying = true);
  				window.requestAnimationFrame(canvasStep);
		    }

		    function onPause() {
    			// console.log('videoSend pause');
    			scope.$apply(scope.videoPlaying = false);
		    }

		    function onEnded() {
    			// console.log('videoSend ended');
    			scope.$apply(scope.videoPlaying = false);
		    }

		    // get video
		    function startUserMedia() {
		    	return $q(function(resolve, reject ) {

			    navigator.getUserMedia(userMedia,
			    	function getStream(stream) {
			    		video.src = window.URL.createObjectURL(stream);
			    		video.muted = true;
			    		localMediaStream = stream;

			    		video.addEventListener('play', onPlay);
			    		video.addEventListener('pause', onPause);
			    		video.addEventListener('ended', onEnded);

						  resolve(localMediaStream);
			    	},
			    	function error(e) {
			    		console.log('getUserMedia error',e);
			    		reject(e);
			    });	// navigator.getUserMedia    	
		    	}); // $q
		    }

		    function stopUserMedia() {
		    	try {
		    		scope.videoPlaying = false;
	    			localMediaStream.stop();
	    			video.pause();
		    		video.removeEventListener('play', onPlay);
		    		video.removeEventListener('pause', onPause);
		    		video.removeEventListener('ended', onEnded);
		    	}
		    	catch(e) {console.log('cannot stop camera');}
		    }

	    	// scope.$on('window-resize', function(evt, w) {
	    	// 	console.log('videoSend window-resize',w);
	    	// 	resizeCanvas();
	    	// });

		    scope.$watch('remoteIdChanged', function(newVal) {
		    	if (newVal && !cameraPromise)
	    			cameraPromise = startUserMedia();

		    	console.log('watch remoteId', scope.remoteId, newVal);
		    	if (!scope.remoteId)
		    		return;

		    	if (scope.lecturer) {
		    		console.log('lecturer remoteId', scope.lecturer, newVal);
		    		_.forEach(scope.remoteId, function(v, k) {
		    			if (v.lecturer === true)
		    				return;

			    		console.log('lecturer connect to', v, k);
		    			switch(v.status) {
		    				case 'new':
		    					$interval(function() { // random delay before starting RTC
			    					v.status = 'init-call';

			    					cameraPromise
			    					.then(function() {
				    					rtcPeerData[k] = new rtcPeer(v.userId, null, null, sdpConstraintsSend);
			    					});
		    					}, 1000+Math.random(3000), 1);
		    					break;

		    				case 'disconnecting':
		    					rtcPeerData[k].bye();
		    					delete scope.remoteId[k];
		    					delete rtcPeerData[k];
		    					break;
		    			}
		    		});
		    	}
		    	// console.log('after connect', JSON.stringify(scope.remoteId), scope.videoPlaying);
		    }); // $watch

				if (!window.RTCPeerConnection) {
			        window.RTCPeerConnection = window.webkitRTCPeerConnection ||
			        window.mozRTCPeerConnection || window.msRTCPeerConnection;
			  }
				if (!window.RTCSessionDescription) {
			        window.RTCSessionDescription = window.webkitRTCSessionDescription ||
			        window.mozRTCSessionDescription || window.msRTCSessionDescription;
			  }
				if (!window.RTCIceCandidate) {
			        window.RTCIceCandidate = window.webkitRTCIceCandidate ||
			        window.mozRTCIceCandidate || window.msRTCIceCandidate;
			  }

		    if (!navigator.getUserMedia) {
		        navigator.getUserMedia = navigator.webkitGetUserMedia || 
		        navigator.mozGetUserMedia || navigator.msGetUserMedia;
		    }

				// RTC Peer setup
				var rtcPeer = function(remoteId, remoteStreamElem, remoteSdp, constraints) {

					var self = this;

					this.remoteId = remoteId;
					this.localStream = localMediaStream;
					this.remoteStreamElem = remoteStreamElem;
					this.constraints = constraints;

					this.remoteStream = null;

					this.gotRemoteStreamCb = function gotRemoteStreamCb(evt) {
						self.remoteStream = evt.stream;
						self.remoteStream.remoteId = self.remoteId;

						if (scope.attendee) {
							scope.remoteStream.stream = evt.stream;
							scope.remoteStream.remoteId = self.remoteId;
						}

						if (self.lecturer && self.remoteStreamElem) {
							self.remoteStreamElem.src = window.URL.createObjectURL(evt.stream);
						}
						console.log('gotRemoteStreamCb', self.remoteId, evt);
					}

					this.localIceCb = function localIceCb(evt) {
						if (evt.candidate) {
							console.log('localIceCb', evt.candidate);
							liveIO.emit('rtc-candidate', {from: scope.myId, to: self.remoteId, candidate: evt.candidate});
						}
					}

					this.sendOffer = function sendOffer(desc) {
						console.log('send offer', self.remoteId, desc);
						self.pc.setLocalDescription(desc);
						liveIO.emit('rtc-offer', {from: scope.myId, to: self.remoteId, sdp:desc});
					}

					this.createOffer = function createOffer() {
						console.log('create offer', self.remoteId);
						self.pc.createOffer(self.sendOffer, function sdpError(err) {
							console.log('SDP offer error',err);
						});

					}

					this.sendAnswer = function sendAnswer(desc) {
						console.log('send answer', self.remoteId, desc);
						self.pc.setLocalDescription(desc);
						liveIO.emit('rtc-answer', {from: scope.myId, to: self.remoteId, sdp:desc});
					}

					this.createAnswer = function createAnswer(desc) {
						console.log('create answer', self.remoteId);
						this.pc.setRemoteDescription(new RTCSessionDescription(desc))
						this.pc.createAnswer(this.sendAnswer, function sdpError(err) {
							console.log('SDP answer error',err);
						});
					}

					this.bye = function bye() {
						console.log('send bye', self.remoteId);
						liveIO.emit('rtc-bye', {from: scope.myId, to: self.remoteId});
						self.closePeer();
					}

					this.closePeer = function closePeer() {
						self.pc.close();
						delete self.pc;
						if (self.remoteStream) {
							self.remoteStream.stop();
							delete self.remoteStream;
						}

						if (self.remoteStreamElem) {
							self.remoteStreamElem.pause();
							self.remoteStreamElem.src = null;
						}
					}

					this.addICE = function addICE(ice) {
		    		var iceCandidate = new RTCIceCandidate({
              sdpMLineIndex: ice.sdpMLineIndex,
              candidate: ice.candidate
  					});
    				self.pc.addIceCandidate(iceCandidate,
    					function iceCandidateSuccess() {
    						console.log('liveIO:rtc-candidate success', iceCandidate);
    					},
    					function iceCandidateError(err) {
    						console.log('liveIO:rtc-candidate error',err, iceCandidate);
    				});
					}

					this.remoteDesc = function remoteDesc(desc) {
    				self.pc.setRemoteDescription(new RTCSessionDescription(desc));
					}

					this.pc = new RTCPeerConnection(null);
					this.pc.onaddstream = this.gotRemoteStreamCb;
					this.pc.onicecandidate = this.localIceCb;
					this.pc.onnegotiationneeded = this.createOffer;

					if (remoteSdp) {
						console.log('remoteSdp', remoteSdp);
						this.createAnswer(remoteSdp);
					}
					/*
					else {
						this.pc.createOffer(this.sendOffer, function sdpError(err) {
							console.log('SDP offer error',err);
						});
					}
					*/

					if (scope.lecturer)
						this.pc.addStream(this.localStream);

				} // RTC Peer Setup

	    	// handle signaling
	    	scope.$on('liveIO:rtc-offer', function(evt, msg) {
	    		try {
	    			if (msg.to === scope.myId) {
    					cameraPromise
    					.then(function() {
				    		console.log('liveIO:rtc-offer',msg);
				    		if (!rtcPeerData[msg.from])
	    						rtcPeerData[msg.from] = new rtcPeer(msg.from, null, msg.sdp, sdpConstraintsReceive);
	    					else
	    						rtcPeerData[msg.from].createAnswer(msg.sdp);
    					});
	    			}
	    		}
	    		catch(e) {console.log('error rtc-offer',e);}
	    	});

	    	scope.$on('liveIO:rtc-answer', function(evt, msg) {
	    		try {
	    			if (msg.to === scope.myId) {
			    		console.log('liveIO:rtc-answer',msg, rtcPeerData);
	    				rtcPeerData[msg.from].remoteDesc(msg.sdp);
	    			}
	    		}
	    		catch(e) {console.log('error rtc-answer',e);}
	    	});

	    	scope.$on('liveIO:rtc-candidate', function(evt, msg) {
	    		try {
	    			if (msg.to === scope.myId) {
	    				rtcPeerData[msg.from].addICE(msg.candidate);
	    			}
	    		}
	    		catch(e) {console.log('error rtc-candidate',e);}
	    	});

	    	scope.$on('liveIO:rtc-bye', function(evt, msg) {
	    		console.log('liveIO:rtc-bye',msg);
	    		try {
	    			if (msg.to === scope.myId) {
	    				rtcPeerData[msg.from].closePeer();
	    				delete rtcPeerData[msg.to];
	    			}
	    		}
	    		catch(e) {console.log('error rtc-bye',e);}
	    	});

	    	var sendingVideoStream = false;
	    	scope.toggleAttachVideo = function(evt) {
	    		console.log('click toggleAttachVideo', scope.attendee, rtcPeerData[scope.remoteStream.remoteId]);
	    		if (scope.attendee && rtcPeerData[scope.remoteStream.remoteId]) {
	    			if (sendingVideoStream) {
	    				rtcPeerData[scope.remoteStream.remoteId].pc.removeStream(localMediaStream);
	    				sendingVideoStream = false;
	    			}
	    			else {
	    				rtcPeerData[scope.remoteStream.remoteId].pc.addStream(localMediaStream);
	    				sendingVideoStream = true;
	    			}
	    		}
	    	}

	    	elem.on('$destroy', function() {
	    		_.forEach(rtcPeerData, function(v,k) {
	    			v.bye();
	    		});
	    		rtcPeerData = null;
    			if (nextUserMediaCapture) {
    				$interval.cancel(nextUserMediaCapture);
    				nextUserMediaCapture = null;
    			}
	    		stopUserMedia();
	    		console.log('video-send $destroy');

	    	});
			}
		};
	}
]);
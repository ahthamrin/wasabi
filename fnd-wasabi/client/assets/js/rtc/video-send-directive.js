;
angular.module('wasabi').directive('oldVideoSend',
	[ 'liveIO', '$q', '$interval', function(liveIO, $q, $interval) {
		return {
			scope: {
				io: '=',
				lecturer: '=',
				myId: '=',
				camera: '=',
				remoteId: '=',
				remoteIdChanged: '=',
				windowWidth: '=w',
				windowHeight: '=h',
				remoteStream: '='
			},
			restrict: 'E',
			replace: true,
			templateUrl: './templates/rtc/video-send-template.html',
			link: function(scope, elem, attrs) {
				var video = elem.find('video')[0]
					, canvas = elem.find('canvas')[0]
					, remoteVideo = $('#remote-id')[0]
					, ctx = canvas.getContext('2d')
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
					, userMediaScreen = {video: {mandatory: {chromeMediaSource: 'desktop'}}}
					;

				console.log('videoSend id',scope.myId, scope.lecturer);
				console.log('vidsrc',video.src);
				scope.canvasOn = true;
				scope.videoPlaying = false

				scope.toggleCanvas = function() {
					if (scope.canvasOn) {
						$(canvas).hide();
						scope.canvasOn = false;
					}
					else {
						$(canvas).show();
						scope.canvasOn = true;
					}
				}

				function resizeCanvas(cvs, aspect) {
					var cw = scope.windowWidth/2.5;
					var ch = scope.windowHeight/2.5;
					if (cw/ch > aspect) {
						cw = aspect*ch;
					}
					else {
						ch = cw/aspect;
					}
					cvs.clientWidth = cw;
					cvs.clientHeight = ch;
					$(elem).css({margin:'0 auto', width: cw+'px', height:ch+'px'});
					// console.log('resize canvas', cw, ch, cvs);
				}

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

		    scope.showVideo = false;

		    function canvasStep(timestamp) {
		    	ctx.drawImage(video,0,0);
		    	if (scope.videoPlaying)
		    		window.requestAnimationFrame(canvasStep);
		    }

		    function onPlay() {
    			console.log('videoSend play');
			    scope.showVideo = false;
    			scope.videoPlaying = true;

	    		console.log('wx', video.videoWidth, video.videoHeight);
	    		videoAspectRatio = video.videoWidth / video.videoHeight;
	    		canvas.width = video.videoWidth;
	    		canvas.height = video.videoHeight;
	    		resizeCanvas(canvas, videoAspectRatio);

	    		scope.$apply();
    			window.requestAnimationFrame(canvasStep);
		    }

		    function onPause() {
    			console.log('videoSend pause');
    			scope.$apply(scope.videoPlaying = false);
		    }

		    function onEnded() {
    			console.log('videoSend ended');
    			scope.$apply(scope.videoPlaying = false);
		    }

		    // get video
		    function startUserMedia(media) {
		    	return $q(function(resolve, reject ) {

		    	console.log('startUserMedia');

			    navigator.getUserMedia(media,
			    	function getStream(stream) {
			    		video.src = window.URL.createObjectURL(stream);
			    		video.muted = true;
			    		localMediaStream = stream;

			    		video.addEventListener('play', onPlay);
			    		video.addEventListener('pause', onPause);
			    		video.addEventListener('ended', onEnded);

			    		scope.showVideo = false;
			    		resizeCanvas(canvas, videoAspectRatio);

			    		if (!unbindWindowWatcher)
						    unbindWindowWatcher = scope.$watch('windowHeight*windowWidth', function() {
						    	resizeCanvas(canvas, videoAspectRatio);
						    	// console.log('r', scope.windowHeight, scope.windowWidth, canvas.clientHeight, canvas.clientWidth);
						    });

			    		video.setAttribute('my-video-ready','ready');
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
	    			localMediaStream.stop();
	    			video.pause();
		    		video.removeEventListener('play', onPlay);
		    		video.removeEventListener('pause', onPause);
		    		video.removeEventListener('ended', onEnded);
		    	}
		    	catch(e) {console.log('cannot stop camera');}
    			if (unbindWindowWatcher) {
	    			unbindWindowWatcher();
	    			unbindWindowWatcher = null;
    			}
		    }

		    scope.$watch('remoteIdChanged', function(newVal) {
		    	if (newVal)
	    			cameraPromise = startUserMedia(userMediaVideo);

		    	console.log('watch remoteId', scope.remoteId, newVal);
		    	if (!scope.remoteId)
		    		return;

		    	if (scope.lecturer) {
		    		console.log('lecturer remoteId', scope.lecturer, newVal);
		    		// lecturer should wait for attendee to offer RTC
		    		_.forEach(scope.remoteId, function(v, k) {
		    			if (v.lecturer === true)
		    				return;

			    		console.log('lecturer connect to', v, k);
		    			switch(v.status) {
		    				case 'new':
		    					v.status = 'init-call';

		    					cameraPromise
		    					.then(function() {
			    					rtcPeerData[k] = new rtcPeer(v.userId, remoteVideo, null, sdpConstraintsSend, true);
		    					});
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

				// RTC Peer setup
				var rtcPeer = function(remoteId, remoteStreamElem, remoteSdp, constraints, outbound) {
					var self = this;

					this.remoteId = remoteId;
					this.localStream = localMediaStream;
					this.remoteStreamElem = remoteStreamElem;
					this.constraints = constraints;
					this.outbound = outbound ? true : false;

					this.remoteStream = null;

					this.gotRemoteStreamCb = function gotRemoteStreamCb(evt) {
						self.remoteStream = evt.stream;

						if (!scope.lecturer) {
							scope.remoteStream.stream = evt.stream;
							scope.remoteStream.lecturerId = self.remoteId;
						}

						if (self.remoteStreamElem) {
							self.remoteStreamElem.src = window.URL.createObjectURL(evt.stream);
						}
						console.log('gotRemoteStreamCb', self.remoteId, evt, self.remoteStreamElem);
					}

					this.localIceCb = function localIceCb(evt) {
						if (evt.candidate) {
							console.log('localIceCb', evt.candidate);
							liveIO.emit('rtc-candidate', {outbound: self.outbound, from: scope.myId, to: self.remoteId, candidate: evt.candidate});
						}
					}

					this.sendOffer = function sendOffer(desc) {
						console.log('send offer', self.remoteId, desc);
						self.pc.setLocalDescription(desc);
						liveIO.emit('rtc-offer', {outbound: self.outbound, from: scope.myId, to: self.remoteId, sdp:desc});
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
						liveIO.emit('rtc-answer', {outbound: self.outbound, from: scope.myId, to: self.remoteId, sdp:desc});
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
						liveIO.emit('rtc-bye', {outbound: self.outbound, from: scope.myId, to: self.remoteId});
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
	    						rtcPeerData[msg.from] = new rtcPeer(msg.from, remoteVideo, msg.sdp, sdpConstraintsReceive);
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

	    	// scope.$on('slide-container-size', function(evt, w) { console.log('slide-container-size',w)});

	    	elem.on('$destroy', function() {
	    		_.forEach(rtcPeerData, function(v,k) {
	    			v.bye();
	    		});
	    		rtcPeerData = null;
	    		stopUserMedia();
	    		console.log('video-send $destroy');

	    	});
			}
		};
	}
]);
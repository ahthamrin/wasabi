;
angular.module('wasabi').directive('videoLecturer',
	['$compile', 'LoopBackAuth', 'liveIO', '$q', '$interval', function($compile, LoopBackAuth, liveIO, $q, $interval) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: './templates/rtc/video-lecturer-template.html',
			link: function(scope, elem, attrs) {
				var localVideoElem = elem.find('#local-video')[0]
					, remoteVideoElems = elem.find('.remote-video')
					, canvasAttendeeElem = elem.find('canvas')[0]
					, ctxAttendee = canvasAttendeeElem.getContext('2d')
					, cameraPromise
					, unbindWindowWatcher
					, localMediaStream
					, remoteMediaStream
					, inboundPeerData = {}
					, outboundPeerData = {}
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
					, userMedia = userMediaVideo
					, resizeTimeout
					, nextUserMediaCapture
					, captureBacklog = []
					, clearAttendeeTimeout = 0
					, audioCtx = new (window.AudioContext || window.webkitAudioContext)()
					, audioDest = audioCtx.createMediaStreamDestination()
					, oscillator1 = audioCtx.createOscillator()
					, oscillator2 = audioCtx.createOscillator()
					;

/*				oscillator1.type = 'square';
				oscillator1.frequency.value = 500;
				oscillator1.start();
				oscillator1.connect(audioDest);
				console.log('audiodest', audioDest.stream.getTracks());
				oscillator2.type = 'square';
				oscillator2.frequency.value = 100;
				oscillator2.start();
				oscillator2.connect(audioDest);
*/
				console.log('videoLecturer id',scope.myId, scope.lecturer);

				scope.localVideo = {elem: localVideoElem};
				scope.remoteVideos = {};

				function resizeCanvas() {
	    		canvasAttendeeElem.clientWidth = canvasAttendeeElem.width = localVideoElem.videoWidth/2;
	    		canvasAttendeeElem.clientHeight = canvasAttendeeElem.height = localVideoElem.videoHeight/2;
				}

		    var sendCaptureStep = 0
		    	, sendCaptureIval = 20
		    	;
		    function canvasStep(timestamp) {
		    	resizeCanvas();

		    	if (sendCaptureStep === 0) {
			    	ctxAttendee.drawImage(localVideoElem,0,0, canvasAttendeeElem.width, canvasAttendeeElem.height);
			    	var canvasJPG = canvasAttendeeElem.toDataURL('image/jpeg', 0.8);
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

		    	if (scope.localVideoPlaying)
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

		    function onLocalPlay() {
    			console.log('localVideo play', arguments);
    			scope.$apply(scope.localVideoPlaying = true);
  				// window.requestAnimationFrame(canvasStep);
		    }

		    function onLocalPause() {
    			// console.log('localVideo pause');
    			scope.$apply(scope.localVideoPlaying = false);
		    }

		    function onLocalEnded() {
    			// console.log('localVideo ended');
    			scope.$apply(scope.localVideoPlaying = false);
		    }

		    // get video
		    function startUserMedia() {
		    	return $q(function(resolve, reject ) {

			    navigator.getUserMedia(userMedia,
			    	function getStream(stream) {
			    		// stream.addTrack(audioDest.stream.getAudioTracks()[0]);
			    		console.log('stream', stream.getTracks());

			    		scope.localVideo.src = window.URL.createObjectURL(stream);
			    		localVideoElem.muted = true;
			    		localMediaStream = stream;

			    		localVideoElem.addEventListener('play', onLocalPlay);
			    		localVideoElem.addEventListener('pause', onLocalPause);
			    		localVideoElem.addEventListener('ended', onLocalEnded);

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
		    		scope.localVideoPlaying = false;
	    			localMediaStream.stop();
	    			localVideoElem.pause();
		    		localVideoElem.removeEventListener('play', onLocalPlay);
		    		localVideoElem.removeEventListener('pause', onLocalPause);
		    		localVideoElem.removeEventListener('ended', onLocalEnded);
		    	}
		    	catch(e) {console.log('cannot stop camera');}
		    }

		    scope.$watch('remoteIdChanged', function(newVal) {
		    	if (newVal && !cameraPromise)
	    			cameraPromise = startUserMedia();

		    	console.log('watch remoteId', scope.remoteId, newVal);
		    	if (!scope.remoteId)
		    		return;

		    	if (scope.lecturer && scope.primary) {
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
			    					outboundPeerData[k] = new rtcPeer(v.userId, null, null, sdpConstraintsSend, true);
		    					});
		    					break;

		    				case 'disconnecting':
		    					outboundPeerData[k].bye();
		    					delete scope.remoteId[k];
		    					delete outboundPeerData[k];
		    					break;
		    			}
		    		});
		    	}
		    }); // $watch

				/*
		    function onRemoteRemotePlay() {
    			console.log('remoteVideo play');
    			scope.receivedVideoPlaying = true;

	    		console.log('videoReceive size', remoteVideo.videoWidth, remoteVideo.videoHeight);

	    		scope.$apply();
		    }

		    function onRemoteRemotePause() {
    			console.log('remoteVideo pause');
    			scope.$apply(scope.remoteVideoPlaying = false);
		    }

		    function onRemoteRemoteEnded() {
    			console.log('remoteVideo ended');
    			scope.$apply(scope.remoteVideoPlaying = false);
		    }

		    function startRemoteVideo() {
					remoteVideo.src = window.URL.createObjectURL(scope.remoteStream.stream);
	    		remoteVideo.addEventListener('play', onRemotePlay);
	    		remoteVideo.addEventListener('pause', onRemotePause);
	    		remoteVideo.addEventListener('ended', onRemoteEnded);
		    }

		    function stopRemoteVideo() {
		    	try {
		    		remoteVideo.pause();
		    		remoteVideo.removeEventListener('play', onRemotePlay);
		    		remoteVideo.removeEventListener('pause', onRemotePause);
		    		remoteVideo.removeEventListener('ended', onRemoteEnded);
		    	}
		    	catch (e) {}
		    }
		    */

				scope.attendeeVideoCaptures = {};

				scope.$on('liveIO:rtc-vidcap-fwd', function(evt, msg) {
		    	if (msg.userId === LoopBackAuth.currentUserId)
		    		return;

		    	var thisTime = new Date();
		    	if (!scope.attendeeVideoCaptures[msg.userId]) {
		    		// new attendee, append element
		    		var thisVidcap = scope.attendeeVideoCaptures[msg.userId] = {};
		    		thisVidcap.elem = $compile(
		    			'<div class="grid-block">'+
		    			'<div class="card"><img ng-click="showAttendeeVidcapDialog(\''+msg.userId+'\')" title="'+msg.userId+'" class="rtc"></div>'+
		    			'<div class="align-center bounded modal-overlay">'+
		    			'<button ng-click="rtcRequestOffer(\''+msg.userId+'\')" class="primary button small"><span class="fa fa-phone"></span></button>'+
		    			'<button ng-click="rtcRejectOffer(\''+msg.userId+'\')" class="secondary button small"><span class="fa fa-phone fa-rotate-135"></span></button>'+
		    			'</div></div>'
		    			)(scope);
		    		elem.find('#attendee-vidcap-section').append(thisVidcap.elem);
		    		console.log('new attendee');
		    	}
		    	var thisVidcap = scope.attendeeVideoCaptures[msg.userId];
		    	thisVidcap.recvd = thisTime;
		    	thisVidcap.data = msg;
		    	thisVidcap.elem.find('img')[0].src = thisVidcap.data.jpg;
	    		// existing attendee, update image source
	    		if (thisVidcap.rtcInitOfferRcvd && !thisVidcap.elem.find('.modal-overlay').hasClass('is-active')) {
	    			thisVidcap.elem.find('.modal-overlay').addClass('is-active');
	    		}
	    		if (thisVidcap.rtcInitOfferRcvd === 0 && thisVidcap.elem.find('.modal-overlay').hasClass('is-active')) {
	    			thisVidcap.elem.find('.modal-overlay').removeClass('is-active');
	    		}

				});

				clearAttendeeTimeout = $interval(function() {
		    	var thisTime = new Date();
		    	// console.log('clearAttendeeTimeout', thisTime);
	    		_.forEach(scope.attendeeVideoCaptures, function(v,k) {
	    			try {
	    				if (thisTime - v.recvd > 30000) {// no update > 30 sec is stale
				    		// console.log('attendee remove', v);
	    					v.elem.remove();
	    					delete scope.attendeeVideoCaptures[k];
	    				}
	    			}
	    			catch(e) {console.log('clearAttendeeTimeout error', e);}
	    		});
				}, 10000);

	    	scope.showAttendeeVidcapDialog = function(remoteId) {
	    		if (inboundPeerData[remoteId])
	    			return;
    			scope.attendeeVideoCaptures[remoteId].elem.find('.modal-overlay').addClass('is-active');
    			if (scope.attendeeVideoCaptures[remoteId])
	    			scope.attendeeVideoCaptures[remoteId].rtcInitOfferRcvd = (new Date());
	    	}

	    	scope.rtcRequestOffer = function(remoteId) {
	    		if (!inboundPeerData[remoteId]) {
	    			console.log('rtcRequestOffer', remoteId);
	    			liveIO.emit('rtc-request-offer', {from: scope.myId, to: remoteId, outbound: false});
						inboundPeerData[remoteId] = 1; // retries
	    		}
	    		else {
	    			if (typeof(inboundPeerData[remoteId]) === "number") {
		    			console.log('rtcRequestOffer', remoteId);
	    				liveIO.emit('rtc-request-offer', {from: scope.myId, to: remoteId, outbound: false});
	    				inboundPeerData[remoteId]++;
	    			}
	    		}
	    		// scope.attendeeVideoCaptures[remoteId].elem.find('.modal-overlay').removeClass('.is-active');
	    		scope.attendeeVideoCaptures[remoteId].rtcInitOfferRcvd = 0;
	    		scope.attendeeVideoCaptures[remoteId].rtcInitOfferState = 'pickup';
	    	}

	    	scope.rtcRejectOffer = function(remoteId) {
	    		if (scope.attendeeVideoCaptures[remoteId].rtcInitOfferStat === 'ringing') {
	  				liveIO.emit('rtc-reject-offer', {from: scope.myId, to: remoteId, outbound: false});
		    		// scope.attendeeVideoCaptures[remoteId].elem.find('.modal-overlay').removeClass('.is-active');
		    		scope.attendeeVideoCaptures[remoteId].rtcInitOfferState = 'reject';
	    		}
	    		else {
	    			scope.attendeeVideoCaptures[remoteId].elem.find('.modal-overlay').removeClass('is-active');
	    		}
	    		scope.attendeeVideoCaptures[remoteId].rtcInitOfferRcvd = 0;
	    	}

	    	scope.showRemoteVideoDialog = function(remoteId) {
    			scope.remoteVideos[remoteId].elem.find('.modal-overlay').addClass('is-active');
	    	}

	    	scope.hideRemoteVideoDialog = function(remoteId) {
    			scope.remoteVideos[remoteId].elem.find('.modal-overlay').removeClass('is-active');
	    	}

	    	scope.closeRemoteVideo = function(remoteId) {
	    		var rtcPeerData = inboundPeerData[remoteId] || outboundPeerData[remoteId];
	    		rtcPeerData.bye();
	    		// scope.attendeeVideoCaptures[remoteId].elem.find('.modal-overlay').removeClass('.is-active');
	    		scope.attendeeVideoCaptures[remoteId].rtcInitOfferRcvd = 0;
	    		scope.attendeeVideoCaptures[remoteId].rtcInitOfferState = 'hangup';
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

				// RTC Peer setup
				var rtcPeer = function(remoteId, remoteStream, remoteSdp, constraints, outbound) {

					var self = this;

					this.remoteId = remoteId;
					this.localStream = localMediaStream;
					this.remoteStream = remoteStream;
					this.constraints = constraints;
					this.outbound = outbound;
					this.audioStream = audioDest.stream;

					this.gotRemoteStreamCb = function gotRemoteStreamCb(evt) {
						if (self.remoteStream) {
							console.log('remote stream', evt.stream, evt.stream.getAudioTracks());
							self.remoteStream.stream = evt.stream;
							self.remoteStream.remoteId = self.remoteId;
							self.remoteStream.videoElem = self.remoteStream.elem.find('video')[0]
							self.remoteStream.videoElem.src = window.URL.createObjectURL(evt.stream);
							angular.element(self.remoteStream.videoElem).data('remoteId', self.remoteId);

							// self.audioSource = audioCtx.createOscillator();
							// self.audioSource.type = 'square';
							// self.audioSource.frequency = 100;
							// self.audioSource.start();

							self.audioSource = audioCtx.createMediaStreamSource(evt.stream);
							// self.audioSource = audioCtx.createMediaElementSource(self.remoteStream.videoElem);
/*							self.delay = audioCtx.createDelay(1.0);
							self.audioSource.connect(self.delay);
							self.delay.connect(audioDest);
*/
/*							self.analyser = audioCtx.createAnalyser();
							self.analyser.fftSize = 256;
							var bufferLength = self.analyser.frequencyBinCount;
							var dataArray = new Uint8Array(bufferLength);

							function analyse() {
								requestAnimationFrame(analyse);
								self.analyser.getByteFrequencyData(dataArray);
								var avgData = 0;
								for (var i=0; i < bufferLength; i++) {
									avgData += dataArray[i];
								}
								console.log('instream',1.0*avgData/bufferLength);
							}
							analyse();
*/							// self.audioSource.connect(audioDest);
						}
						console.log('gotRemoteStreamCb', self.remoteId, self.remoteStream, evt);
					}

					this.localIceCb = function localIceCb(evt) {
						if (evt.candidate) {
							console.log('localIceCb', evt.candidate);
							liveIO.emit('rtc-candidate', {from: scope.myId, to: self.remoteId, outbound: self.outbound, candidate: evt.candidate});
						}
					}

					this.sendOffer = function sendOffer(desc) {
						console.log('send offer', self.remoteId, desc);
						self.pc.setLocalDescription(desc);
						liveIO.emit('rtc-offer', {from: scope.myId, to: self.remoteId, outbound: self.outbound, sdp:desc});
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
						liveIO.emit('rtc-answer', {from: scope.myId, to: self.remoteId, outbound: self.outbound, sdp:desc});
					}

					this.createAnswer = function createAnswer(desc) {
						console.log('create answer', self.remoteId);
						this.pc.setRemoteDescription(new RTCSessionDescription(desc));
						this.pc.createAnswer(this.sendAnswer, function sdpError(err) {
							console.log('SDP answer error',err);
						});
					}

					this.bye = function bye() {
						console.log('send bye', self.remoteId);
						liveIO.emit('rtc-bye', {from: scope.myId, to: self.remoteId, outbound: self.outbound});
						self.closePeer();
					}

					this.closePeer = function closePeer() {
						self.pc.close();
						delete self.pc;
						if (self.remoteStream) {
							self.remoteStream.videoElem.pause();
							self.remoteStream.elem.src = null;
							self.remoteStream.elem.remove();
							delete self.remoteStream.elem;
							delete self.remoteStream;
						}
		    		var rtcPeerData = self.outbound ? outboundPeerData : inboundPeerData;
		    		var remoteId = self.remoteId;
	    			console.log('delete rtcPeerData[remoteId]',remoteId, rtcPeerData);
	    			delete rtcPeerData[remoteId];
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

					if (this.outbound) {
						console.log('send stream', this.localStream);
						this.pc.addStream(this.localStream);
					}

				} // RTC Peer Setup

	    	// handle signaling

	    	scope.$on('liveIO:rtc-init-offer', function(evt, msg) {
	    		try {
	    			if (msg.to !== scope.myId || inboundPeerData[msg.from])
	    				return;
	    			// indicate on the video capture element
	    			scope.attendeeVideoCaptures[msg.from].rtcInitOfferRcvd = (new Date()).getTime();
	    			scope.attendeeVideoCaptures[msg.from].rtcInitOfferState = 'ringing';
	    			console.log('received rtc-init-offer', scope.attendeeVideoCaptures[msg.from]);
	    		}
	    		catch(e) {console.log('error rtc-init-offer',e);}
	    	});

	    	scope.$on('liveIO:rtc-request-offer', function(evt, msg) {
	    		try {
	    			if (msg.to !== scope.myId)
	    				return;
		    		if (typeof(outboundPeerData[msg.from]) === "number") {
		    			outboundPeerData[msg.from] = new rtcPeer(msg.from, null, null, sdpConstraintsSend, true);
		    		}
	    		}
	    		catch(e) {console.log('error rtc-request-offer',e);}
	    	});

	    	scope.$on('liveIO:rtc-reject-offer', function(evt, msg) {
	    		try {

	    		}
	    		catch(e) {console.log('error rtc-reject-offer',e);}
	    	});

	    	scope.$on('liveIO:rtc-offer', function(evt, msg) {
	    		try {
	    			if (msg.to !== scope.myId)
	    				return;
		    		var rtcPeerData = msg.outbound ? inboundPeerData : outboundPeerData;
		    		console.log('liveIO:rtc-offer',msg);
		    		if (!rtcPeerData[msg.from] || typeof(rtcPeerData[msg.from]) === "number") {
		    			// new RTC connection
			    		var thisRemoteVideo = scope.remoteVideos[msg.from] = {};
			    		thisRemoteVideo.elem = $compile(
			    			'<div class="grid-block">'+
			    			'<div class="card"><video ng-click="showRemoteVideoDialog(\''+msg.from+'\')" class="remote-video rtc" autoplay title="'+msg.from+'"></video>'+
			    			'<div class="align-center bounded modal-overlay">'+
			    			'<button ng-click="hideRemoteVideoDialog(\''+msg.from+'\')" class="primary button bg-transparent"><span class="fa fa-check-circle"></span></button>'+
			    			'<button ng-click="closeRemoteVideo(\''+msg.from+'\')" class="secondary button bg-transparent"><span class="fa fa-phone fa-rotate-135"></span></button>'+
			    			// '<span ng-click="hideRemoteVideoDialog(\''+msg.from+'\')" class="grid-content fa fa-check-circle"></span>'+
			    			// '<span ng-click="closeRemoteVideo(\''+msg.from+'\')" class="grid-content fa fa-phone fa-rotate-135"></span>'+
			    			'</div></div>'
			    			)(scope);
			    		elem.find('#video-section').append(thisRemoteVideo.elem);
			    		console.log('new remote video');
		    			if (thisRemoteVideo)
  							rtcPeerData[msg.from] = new rtcPeer(msg.from, thisRemoteVideo, msg.sdp, sdpConstraintsReceive, !msg.outbound);
		    		}
  					else {
  						rtcPeerData[msg.from].createAnswer(msg.sdp);
  					}
	    		}
	    		catch(e) {console.log('error rtc-offer',e);}
	    	});

	    	scope.$on('liveIO:rtc-answer', function(evt, msg) {
	    		try {
	    			if (msg.to !== scope.myId)
	    				return;
		    		var rtcPeerData = msg.outbound ? inboundPeerData : outboundPeerData;
		    		console.log('liveIO:rtc-answer',msg, rtcPeerData);
    				rtcPeerData[msg.from].remoteDesc(msg.sdp);
	    		}
	    		catch(e) {console.log('error rtc-answer',e);}
	    	});

	    	scope.$on('liveIO:rtc-candidate', function(evt, msg) {
	    		try {
	    			if (msg.to !== scope.myId)
	    				return;
		    		var rtcPeerData = msg.outbound ? inboundPeerData : outboundPeerData;
		    		console.log('liveIO:rtc-candidate',msg);
    				rtcPeerData[msg.from].addICE(msg.candidate);
	    		}
	    		catch(e) {console.log('error rtc-candidate',e);}
	    	});

	    	scope.$on('liveIO:rtc-bye', function(evt, msg) {
	    		try {
		    		console.log('liveIO:rtc-bye',msg, scope.myId);
	    			if (msg.to !== scope.myId)
	    				return;
		    		var rtcPeerData = msg.outbound ? inboundPeerData : outboundPeerData;
		    		console.log('liveIO:rtc-bye',msg);
    				rtcPeerData[msg.from].closePeer();
    				// delete rtcPeerData[msg.from];
	    		}
	    		catch(e) {console.log('error rtc-bye',e);}
	    	});

	    	elem.on('$destroy', function() {
	    		_.forEach(inboundPeerData, function(v,k) {
	    			try {
	    				v.bye();
	    			}
	    			catch(e) {}
	    		});
	    		inboundPeerData = null;
	    		_.forEach(outboundPeerData, function(v,k) {
	    			try {
	    				v.bye();
	    			}
	    			catch(e) {}
	    		});
	    		outboundPeerData = null;

	    		stopUserMedia();
	    		$interval.cancel(clearAttendeeTimeout);
	    		console.log('video-attendee $destroy');

	    	});
			}
		};
	}
]);
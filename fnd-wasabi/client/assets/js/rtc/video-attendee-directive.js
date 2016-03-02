;
angular.module('wasabi').directive('videoAttendee',
	['$compile', 'LoopBackAuth', 'liveIO', '$q', '$interval', function($compile, LoopBackAuth, liveIO, $q, $interval) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: './templates/rtc/video-attendee-template.html',
			link: function(scope, elem, attrs) {
				var localVideoElem = elem.find('#local-video')[0]
					, localVideoCardElem = elem.find('#local-video').parent()
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
					;

					scope.remoteVideo = { elem: angular.element(elem.find('#remote-video')[0]) };


				console.log('videoAttendee id',scope.myId, scope.lecturer, localVideoCardElem);

				function resizeCanvas() {
	    		canvasAttendeeElem.clientWidth = canvasAttendeeElem.width = localVideoElem.videoWidth/2;
	    		canvasAttendeeElem.clientHeight = canvasAttendeeElem.height = localVideoElem.videoHeight/2;
				}

		    var sendCaptureStep = 0
		    	, sendCaptureIval = 20
		    	;
		    	
		    function canvasStep(timestamp) {

		    	if (sendCaptureStep === 0 && scope.primary) {
			    	resizeCanvas();
			    	ctxAttendee.drawImage(localVideoElem,0,0, canvasAttendeeElem.width, canvasAttendeeElem.height);
			    	var canvasJPG = canvasAttendeeElem.toDataURL('image/jpeg', 0.8);
			    	// put into jpg backlog or send if backlog is empty
		    		var thisTime = new Date();
		    		if (canvasJPG.length > 10) {
				    	if (captureBacklog.length) {
				    		captureBacklog.push({timestamp: thisTime, jpg: canvasJPG});
				    	}
				    	else {
				    		liveIO.emit('rtc-vidcap', {timestamp: thisTime, jpg: canvasJPG});
				    	}		    		
		    		}
		    	}
		    	sendCaptureStep = ++sendCaptureStep % sendCaptureIval;

		    	if (scope.localVideoElemPlaying)
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
    			// console.log('localVideoElem play');
    			scope.$apply(scope.localVideoElemPlaying = true);
  				window.requestAnimationFrame(canvasStep);
		    }

		    function onLocalPause() {
    			// console.log('localVideoElem pause');
    			scope.$apply(scope.localVideoElemPlaying = false);
		    }

		    function onLocalEnded() {
    			// console.log('localVideoElem ended');
    			scope.$apply(scope.localVideoElemPlaying = false);
		    }

		    // get video
		    function startUserMedia() {
		    	return $q(function(resolve, reject ) {

			    navigator.getUserMedia(userMedia,
			    	function getStream(stream) {
			    		localVideoElem.src = window.URL.createObjectURL(stream);
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
		    		scope.localVideoElemPlaying = false;
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
		    	_.forEach(scope.remoteId, function(v, k) {
		    		if (k === LoopBackAuth.currentUserId)
		    			return;

		    		switch (v.status) {
		    			case 'new':
		    				break;
		    			case 'disconnecting':
		    				if (v.lecturer) {
		    					if (outboundPeerData[k]) {
		    						try {
			    						outboundPeerData[k].bye();
		    						}
		    						catch(e) {};
		    					}
		    					if (inboundPeerData[k]) {
		    						try {
			    						inboundPeerData[k].bye();
		    						}
		    						catch(e) {};
		    					}
		    				}
		    				else {
		    					try {
		    						scope.attendeeVideoCaptures[k].elem.remove();
		    						delete scope.attendeeVideoCaptures[k];
		    					} catch(e) {};
		    				}
		    		}
		    	});
		    }); // $watch

				scope.attendeeVideoCaptures = {};

				scope.$on('liveIO:rtc-vidcap-fwd', function(evt, msg) {
		    	if (msg.userId === LoopBackAuth.currentUserId)
		    		return;

		    	var thisTime = new Date();
		    	if (!scope.attendeeVideoCaptures[msg.userId]) {
		    		// new attendee, append element
		    		var thisVidcap = scope.attendeeVideoCaptures[msg.userId] = {};
		    		thisVidcap.elem = $compile(
		    			'<div class="grid-content"><div class="card">'+
		    			'<img title="'+msg.userId+'" class="rtc"></div>'+
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


	    	scope.showRemoteVideoDialog = function() {
	    		if (scope.remoteVideo.stream)
    				scope.remoteVideo.elem.find('.modal-overlay').addClass('is-active');
	    	}

	    	scope.okBtnRemoteVideoDialog = function() {
	    		if (!outboundPeerData[scope.remoteVideo.remoteId]) {
	    			// initiate outbound RTC
	    			rtcInitOffer(scope.remoteVideo.remoteId)
	    		}
    			scope.remoteVideo.elem.find('.modal-overlay').removeClass('is-active');
	    	}

	    	scope.cancelBtnRemoteVideoDialog = function() {
	    		if (outboundPeerData[scope.remoteVideo.remoteId] && outboundPeerData[scope.remoteVideo.remoteId].pc) {
	    			// close outbound RTC
	    			outboundPeerData[scope.remoteVideo.remoteId].bye();
	    		}
    			scope.remoteVideo.elem.find('.modal-overlay').removeClass('is-active');
	    	}


	    	var rtcInitOffer = function(remoteId) {
	    		if (!outboundPeerData[remoteId]) {
	    			console.log('rtcInitOffer', remoteId);
	    			liveIO.emit('rtc-init-offer', {from: scope.myId, to: remoteId});
						outboundPeerData[remoteId] = 1; // retries
	    		}
	    		else {
	    			if (typeof(outboundPeerData[remoteId]) === "number") {
		    			console.log('rtcInitOffer', remoteId);
		    			liveIO.emit('rtc-init-offer', {from: scope.myId, to: remoteId});
	    				outboundPeerData[remoteId]++;
	    			}
	    		}
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

					this.gotRemoteStreamCb = function gotRemoteStreamCb(evt) {
						if (self.remoteStream) {
							self.remoteStream.stream = evt.stream;
							self.remoteStream.remoteId = self.remoteId;
							self.remoteStream.videoElem = self.remoteStream.elem.find('video')[0]
							self.remoteStream.videoElem.src = window.URL.createObjectURL(evt.stream);
							angular.element(self.remoteStream.videoElem).data('remoteId', self.remoteId);
						}
						console.log('gotRemoteStreamCb', self.remoteId, evt);
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

					if (this.outbound)
						this.pc.addStream(this.localStream);

				} // RTC Peer Setup

	    	// handle signaling

	    	scope.$on('liveIO:rtc-request-offer', function(evt, msg) {
	    		try {
	    			if (msg.to !== scope.myId)
	    				return;
		    		if (!outboundPeerData[msg.from] || typeof(outboundPeerData[msg.from]) === "number") {
		    			outboundPeerData[msg.from] = new rtcPeer(msg.from, null, null, sdpConstraintsSend, true);
		    		}
	    		}
	    		catch(e) {console.log('error rtc-request-offer',e);}
	    	});

	    	scope.$on('liveIO:rtc-reject-offer', function(evt, msg) {
	    		try {
	    			if (msg.to !== scope.myId)
	    				return;
		    		if (typeof(outboundPeerData[msg.from]) === "number") {
		    			delete outboundPeerData[msg.from];
		    		}
	    		}
	    		catch(e) {console.log('error rtc-reject-offer',e);}
	    	});

	    	scope.$on('liveIO:rtc-offer', function(evt, msg) {
	    		try {
	    			if (msg.to !== scope.myId)
	    				return;
		    		var rtcPeerData = msg.outbound ? inboundPeerData : outboundPeerData;
		    		console.log('liveIO:rtc-offer',msg, rtcPeerData[msg.from]);
		    		if (!rtcPeerData[msg.from])
  						rtcPeerData[msg.from] = new rtcPeer(msg.from, scope.remoteVideo, msg.sdp, sdpConstraintsReceive, !msg.outbound);
  					else
  						rtcPeerData[msg.from].createAnswer(msg.sdp);
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

    				if (!msg.outbound) {
    					localVideoCardElem.addClass('black');
    				}
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
	    			if (msg.to !== scope.myId)
	    				return;
		    		var rtcPeerData = msg.outbound ? inboundPeerData : outboundPeerData;
		    		console.log('liveIO:rtc-bye',msg);
    				rtcPeerData[msg.from].closePeer();
    				// delete rtcPeerData[msg.from];
    				if (!msg.outbound && Object.keys(outboundPeerData).length === 0) {
    					localVideoCardElem.removeClass('red');
    				}
    				console.log('rtcPeerData[msg.from]',rtcPeerData[msg.from]);
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
	    		console.log('video-attendee $destroy');

	    	});
			}
		};
	}
]);
;
angular.module('wasabi').controller('ClassLiveAttendeeController', [
'$scope', '$rootScope', '$q', '$location', '$state', '$stateParams', 'LoopBackAuth', 'User', 'Course', 'Class', 'ObjectCache', 'SlideDeck', 'liveIO', '$interval',
function ($scope, $rootScope, $q, $location, $state, $stateParams, LoopBackAuth, User, Course, Class, ObjectCache, SlideDeck, liveIO, $interval) {
	var thisTime = new Date();

	$scope.currentSlideNo = -1;

	var setSlideFile = function(order) {
		try {
			return $stateParams.did.replace(/^0+/,'')+'/'+$scope.slides[order].filename;		
		}
		catch(e) {
			return '';
		}
	}

	console.log('stateparams', JSON.stringify($stateParams));

	$scope.myId = LoopBackAuth.currentUserId;
	$scope.remoteId = {};
	$scope.remoteIdChanged = 0;
	$scope.startCamera = false;

	$scope.remoteStream = { stream: null, lecturerId: null };

	$scope.lecturer = false;
	$scope.attendee = false;

	var userInClass = $q(function(resolve, reject) {

		(ObjectCache.$get([$stateParams.cid]) || Class.findById({id:$stateParams.cid}))
		// $scope.thisClass
		.$promise
		.then(function(c) {
			console.log('x thisClass', c);
			ObjectCache.set(c.id,c);

			// attend class?
			(ObjectCache.$get([LoopBackAuth.currentUserId, 'attendClass', $stateParams.cid])
			|| User.attendClasses.findById({id:LoopBackAuth.currentUserId, fk: $stateParams.cid}))
			.$promise
			.then(
			function(c) {
				ObjectCache.set([LoopBackAuth.currentUserId, 'attendClass', $stateParams.cid]);
				$scope.attendee = true;
				resolve([$scope.attendee, $scope.lecturer]);
			}
			,function() {
				// attend course?
				(ObjectCache.$get([LoopBackAuth.currentUserId, 'attendCourse', c.courseId])
				|| User.attendCourses.findById({id:LoopBackAuth.currentUserId, fk: c.courseId}))
				.$promise
				.then(function(c) {
					ObjectCache.set([LoopBackAuth.currentUserId, 'attendCourse', c.courseId]);
					$scope.attendee = true;
					resolve([$scope.attendee, $scope.lecturer]);
				}
				, function(err) {
					// not attending class/course. delay 5 sec to allow lecture REST calls.
					$interval(function() {
						reject(err);
					}, 5000,1);
				});
			}
			);

			// lecturer class?
			(ObjectCache.$get([LoopBackAuth.currentUserId, 'lectureClass', $stateParams.cid])
			|| User.lectureClasses.findById({id:LoopBackAuth.currentUserId, fk: $stateParams.cid}))
			.$promise
			.then(function(c) {
				ObjectCache.set([LoopBackAuth.currentUserId, 'lectureClass', $stateParams.cid]);
				$scope.lecturer = true;
				resolve([$scope.attendee, $scope.lecturer]);
			}
			, function() {
				// lecturer course?
				(ObjectCache.$get([LoopBackAuth.currentUserId, 'lectureCourse', c.courseId])
				|| User.lectureCourses.findById({id:LoopBackAuth.currentUserId, fk: c.courseId}))
				.$promise
				.then(function(c) {
					ObjectCache.set([LoopBackAuth.currentUserId, 'lectureCourse', c.courseId]);
					$scope.lecturer = true;
					resolve([$scope.attendee, $scope.lecturer]);
				}
				, function(err) {
					// not lecturing class/course
					$interval(function() {
						reject(err);
					}, 5000,1);
				});
			}
			);
		},
		function(err) { // cannot find this class
			console.log('no class',err);
			reject(err);
		});
	}); // userInClass


	// check the slide deck
	userInClass
	.then(function(c) {
		if ($stateParams.did == 0) {
			(ObjectCache.$get([$stateParams.cid,'slideDecks']) ||
				Class.slideDecks({id:$stateParams.cid}))
			.$promise
			.then(function(dl) {
				ObjectCache.set([$stateParams.cid,'slideDecks'],dl);
				if ($scope.lecturer)
					$state.go('class-live-lecture',{cid:$stateParams.cid,did:dl[0].id},{location:'replace'});
				else
					$state.go('class-live',{cid:$stateParams.cid,did:dl[0].id},{location:'replace'});
			});
		}
		else {
			(ObjectCache.$get([$stateParams.did,'slides']) ||
				SlideDeck.slides({id: $stateParams.did}))
			.$promise
			.then(function(sl) {
				$scope.startCamera = true;
				if (liveIO.disconnected) {
					liveIO.connect();
				}
				else {
					liveIO.emit('join',{userId:LoopBackAuth.currentUserId, token: LoopBackAuth.accessTokenId, classId: $stateParams.cid, lecturer: $scope.lecturer});		
				}	

				// if ($scope.attendee)
				// 	$scope.intervalVideoSend = 500;

				$scope.slides = sl = _.sortBy(sl, function(n) {return n.order;});
				console.log(sl);

				$scope.slideFile = setSlideFile(0);
				ObjectCache.set([$stateParams.did,'slides'], sl);
				$scope.currentSlideNo = 0;

			});
		}
	},
	function(err) {
		$state.go('class-list');
	});

	// $scope.slideFile = 'd01011/1-1-x.jpg';

	// slide related
	$scope.slideImage = null;

	$scope.$watch('currentSlideNo', function() {
		$scope.slideFile = setSlideFile($scope.currentSlideNo);
		liveIO.emit('slide-change',{slideNo: $scope.currentSlideNo});
	});

	var windowSize = {width:0,height:0};

	$scope.$on('window-resize', function(evt, w) { 
		console.log('live window-resize',w);
		if (w.width !== windowSize.width) {
			$scope.showChatInput = false;
			$scope.showCtrlButton = false;			
		}
		windowSize = w;
	});

	$scope.first = function() {
		if ($scope.currentSlideNo !== 0) {
			$scope.currentSlideNo = 0;
		}
		return false;
	}

	$scope.prev = function() {
		if ($scope.currentSlideNo > 0) {
			--$scope.currentSlideNo;
		}
		return false;
	}

	$scope.next = function() {
		if ($scope.currentSlideNo < $scope.slides.length-1) {
			++$scope.currentSlideNo;
		}
		return false;
	}

	$scope.last = function() {
		if ($scope.currentSlideNo !== $scope.slides.length-1) {
			$scope.currentSlideNo = $scope.slides.length-1;
		}
		return false;
	}

	$scope.showCtrlButton = false;
	$scope.toggleCtrlButton = function() {
		$scope.showCtrlButton = !$scope.showCtrlButton;
		return false;
	}

	$scope.showChatInput = false;
	$scope.toggleChatInput = function () {
		$scope.showChatInput = !$scope.showChatInput;
	}

	$scope.tap = function() {
		console.log('tap', arguments);
	}

	$scope.$on('liveIO:disconnect', function() {
		console.log('liveIO:closed');
		if ($scope.lecturer || $scope.attendee) {
			liveIO.connect();
		}
	});

	$scope.$on('liveIO:connect', function() {
		if ($scope.lecturer || $scope.attendee) {
			liveIO.emit('join',{userId:LoopBackAuth.currentUserId, token: LoopBackAuth.accessTokenId, classId: $stateParams.cid, lecturer: $scope.lecturer});			
		}
	});

	$scope.$on('liveIO:joined', function(ev, msg) {
		console.log('liveIO:joined', ev, msg);
		if (msg.userId === LoopBackAuth.currentUserId) {

			return;
		}

		if (!$scope.remoteId[msg.userId]) {
			msg.status = 'new';
			$scope.remoteId[msg.userId] = msg;
			console.log('new id',msg.userId, $scope.remoteId);
			$scope.remoteIdChanged++;
		}
	});

	$scope.$on('liveIO:joined-members', function(ev, msg) {
		$scope.remoteId = {};
		_.forEach(msg, function(v) {
			if (v.userId === LoopBackAuth.currentUserId)
				return;
			$scope.remoteId[v.userId] = v;
			v.status = 'new';
		});
		console.log('liveIO:joined-members', msg, $scope.remoteId);
		$scope.remoteIdChanged++;
	});

	$scope.$on('liveIO:left', function(ev, msg) {
			var remote = $scope.remoteId[msg.userId];
			if (remote) {
				remote.status = 'disconnecting';
				$scope.remoteIdChanged++;
				// delete $scope.remoteId[msg.userId];
			}
	});

	$scope.$on('liveIO:slide-change', function(ev, msg) {
		console.log('liveIO:slide-change', ev, msg);
		if ($scope.attendee) {
			$scope.currentSlideNo = msg.slideNo;
		}
	});


	$scope.$on('$destroy', function() {
		// cleanup
		$scope.currentSlideNo = -1;
		console.log('destroy liveClass');
	});

	// debug play
	// $interval(function() {
	// 	console.log('sample');
	// 	if ($scope.slides)
	// 		$scope.slideFile = $stateParams.did.replace(/^0+/,'')+'/'+_.sample($scope.slides).filename;
	// }, 2000, 10)
}]);

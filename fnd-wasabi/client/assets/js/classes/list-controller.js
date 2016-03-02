;
angular.module('wasabi').controller('ClassListController', [
'$scope', '$rootScope', '$location', '$state', 'LoopBackAuth', 'User', 'Course', 'ObjectCache', '$interval',
function ($scope, $rootScope, $location, $state, LoopBackAuth, User, Course, ObjectCache, $interval) {
	var thisTime = new Date();
/*
	ObjectCache.set('ax',['ini','ibu']);
	var testCache = ObjectCache.$get('ax');
	ObjectCache.$get('ax')
		.$promise
		.then(function(s) {
			console.log('cache resolved',s)
		}, function(r) {
			console.log('cache rejected', r)
		});
	*/


	$scope.classLive = [];
	$scope.courses = [];
	$scope.show = 'list';


	User.attendCourses({id:LoopBackAuth.currentUserId},
		function(courses) {
			console.log('attendcourses',courses);
			$scope.courses = $scope.courses.concat(courses);
			ObjectCache.set([LoopBackAuth.currentUserId,'attendCourses'],courses);
			courses.forEach(function(course) {
				ObjectCache.set([course.id],course);
				ObjectCache.set([LoopBackAuth.currentUserId,'attendCourse',course.id],course);

				if (thisTime >= new Date(course.start) && thisTime <= new Date(course.finish) ) {
					Course.classes({id:course.id, filter:{where:{start:{lt:thisTime}, finish:{gt:thisTime}}}},
					function(cl) {
						cl.forEach(function(c) {
							ObjectCache.set([LoopBackAuth.currentUserId, 'attendClass', c.id], c);
							ObjectCache.set([c.id], c);
						});
						$scope.classLive = $scope.classLive.concat(cl);
					});
				}
			});
		},
		function() {
			// unauthorized
			LoopBackAuth.clearUser();
			LoopBackAuth.clearStorage();
			// $location.path('/');
			$state.go('home');
			ObjectCache.clear();
		}
	);

	User.lectureCourses({id:LoopBackAuth.currentUserId},
		function(courses) {
			$scope.courses = $scope.courses.concat(courses);
			ObjectCache.set([LoopBackAuth.currentUserId,'lectureCourses'],courses);
			courses.forEach(function(course) {
				ObjectCache.set([course.id],course);

				if (thisTime >= new Date(course.start) && thisTime <= new Date(course.finish) ) {
					Course.classes({id:course.id, filter:{where:{start:{lt:thisTime}, finish:{gt:thisTime}}}},
					function(cl) {
						ObjectCache.set([LoopBackAuth.currentUserId, 'lectureClasses'], cl);
						cl.forEach(function(c) {
							ObjectCache.set([c.id], c);
							c.lecturer = true;
						});
						$scope.classLive = $scope.classLive.concat(cl);
					});
				}
			});
		},
		function() {
			// unauthorized
			LoopBackAuth.clearUser();
			LoopBackAuth.clearStorage();
			// $location.path('/');
			$state.go('home');
			ObjectCache.clear();
		}
	);

	$scope.dash = function(cl) {
		console.log('live click dash',cl);
		if (cl.lecturer) 
			// $location.path('/live-lecture/'+cl.id+'/0');
			$state.go('dash-live-stats', {cid: cl.id, did: 0});
			// $location.path('/live-attendee/'+cl.id+'/0');
	}

	$scope.live = function(cl) {
		console.log('live click',cl);
		if (cl.lecturer) 
			// $location.path('/live-lecture/'+cl.id+'/0');
			$state.go('class-live-lecture', {cid: cl.id, did: 0});
		else
			$state.go('class-live-attendee', {cid: cl.id, did: 0});
			// $location.path('/live-attendee/'+cl.id+'/0');
	}

	$scope.create = function() {
		// if (cl.lecturer)
			$state.go('course-create');
	}

	$scope.logout = function() {
		User.logout({},
			function() {
				LoopBackAuth.clearUser();
				LoopBackAuth.clearStorage();
				$state.go('home');
				// $location.path('/');
			});
	}

	// debug

}]);

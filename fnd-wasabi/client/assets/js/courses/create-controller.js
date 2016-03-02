;
angular.module('wasabi').controller('CourseCreateController', [
'$scope', '$rootScope', '$location', '$state', 'LoopBackAuth', 'User', 'Course', 'ObjectCache', '$interval', 'sockapiIO',
function ($scope, $rootScope, $location, $state, LoopBackAuth, User, Course, ObjectCache, $interval, sockapiIO) {
	var thisTime = new Date();

	$scope.classes = [];

	$scope.addClass = function() {
		var thisClass = {title: null, description: null, lecturers: null, start: null, end: null};
		$scope.classes.push(thisClass);
	}

	$scope.delete = function(cl,idx) {
		console.log(arguments);
		delete cl;
		$scope.classes.splice(idx,1);
	}

	$scope.logout = function() {
		User.logout({},
			function() {
				LoopBackAuth.clearUser();
				LoopBackAuth.clearStorage();
				$state.go('home');
			});
	}

	$scope.create = function() {
		console.log($scope.classes);
		var thisCourse = {
			title: $scope.title,
			description: $scope.description,
			lecturers: $scope.lecturers,
			classes: $scope.classes
		};
		sockapiIO.emit('req-course-create', thisCourse);
	}

	$scope.$on('sockapi:res-course-create', function(msg) {
		console.log('sockapi:res-course-create', arguments);
	});

	// debug

}]);

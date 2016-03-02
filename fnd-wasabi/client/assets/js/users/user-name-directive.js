;
angular.module('wasabi').directive('userNames', ['$window', '$interval', 'sockapiIO', function ($window, $interval, sockapiIO) {
return {
	restrict: 'AE',
	// transclude: true,
	scope: {
		'placeHolder':'&',
		'userNames': '=ngModel'
	},
	template: '<div class="user-name"><input type="text" ng-model="lecturers" placeholder="{{placeHolder}}"><div class="matched-names"></div></div>',
	link: function (scope, elem, attr) {

		console.log(scope);
		scope.$watch('lecturers', function(newVal, oldVal) {
			console.log(scope.lecturers);
			scope.userNames = scope.lecturers;
		});
	}
}
}]);

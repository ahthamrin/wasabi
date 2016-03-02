;
angular.module('wasabi').controller('TopMenuController', [
'$scope', '$rootScope', '$location', 'User', 'LoopBackAuth', '$location',
function ($scope, $rootScope, $location, User, LoopBackAuth, $location) {
	$scope.authenticated = false;
	$scope.la = LoopBackAuth;
	$scope.$watch('la.currentUserId', function(oldVal,newVal) {
		console.log('changed',LoopBackAuth);
		if (LoopBackAuth.currentUserId)
			$scope.authenticated = true;
		else
			$scope.authenticated = false;
	});

	$scope.logout = function() {
		User.logout({},
			function() {
				LoopBackAuth.clearUser();
				LoopBackAuth.clearStorage();
				$location.path('/');
			});
	}
}
]);

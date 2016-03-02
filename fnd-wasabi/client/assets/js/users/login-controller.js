;
angular.module('wasabi').controller('UserLoginController', [
'$scope', '$rootScope', '$location', '$http','User', 'LoopBackAuth', 'ObjectCache',
function ($scope, $rootScope, $location, $http, User, LoopBackAuth, ObjectCache) {

	try {
		if (LoopBackAuth.currentUserId)
			$location.path('/home');
	}
	catch(e) {}


	$scope.login = function() {

		$http.post('/login',{
			email: $scope.username,
			password: $scope.password
		})
		.success(function(data, status, headers, config) {
      LoopBackAuth.setUser(data.id, data.userId, data.user);
      LoopBackAuth.rememberMe = true;//response.config.params.rememberMe !== false;
      LoopBackAuth.save();
			console.log('login success', arguments);
			$rootScope.wasabiUser = data.user;
			$location.path('/home');
		})
		.error(function(data, status, headers, config) {
			delete $rootScope.wasabiUser;
			LoopBackAuth.clearUser();
			LoopBackAuth.clearStorage();
			ObjectCache.clear();
			console.log('login error', arguments);
		});
	}

/*
	$scope.login = function() {
		$scope.loginResult = User.login({
			username: $scope.username,
			password: $scope.password
		},
		function(res) {
			$location.path('/home');
		},
		function(res) {
			LoopBackAuth.clearUser();
			LoopBackAuth.clearStorage();
			ObjectCache.clear();
			console.log('error',res, LoopBackAuth);

		});
	}
*/
}
]);

;
angular.module('wasabi').factory('ObjectCache', ['$q',function($q) {
	var objCache = new Object();
	objCache.cache = {};

	console.log('ObjectCache');

	objCache.get = function(key) {
		if (key instanceof Array) {
			key = key.join(' ');
		}
		return objCache.cache[key];
	}

	objCache.$get = function(key) {
		if (key instanceof Array) {
			key = key.join(' ');
		}
		var val = objCache.cache[key];
		// console.log('ObjectCache $get', key, val);
		if (!val) {
			return null;
			/*
			return x = {$resolved: false,
				$promise: $q(function(resolve, reject) {
					setTimeout(function() {
						reject('');
						delete x.$resolved;
						delete x.$promise;
					},1);
				})
			};
			*/
		}
		if (val) {
			val.$resolved = false;
			val.$promise = $q(function(resolve, reject) {
					setTimeout(function() {
						resolve(val);
						delete val.$resolved;
						delete val.$promise;
					},1);
				});
			console.log('Object.$get',key, val);
			return val;
		}
	}

	objCache.set = function(key, val) {
		if (key instanceof Array) {
			key = key.join(' ');
		}
		// console.log('set', key, val);
		objCache.cache[key] = val;
	}

	objCache.clear = function() {
		objCache.cache = {};
	}

	return objCache;
}]);

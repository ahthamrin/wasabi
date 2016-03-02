;
angular.module('wasabi').directive('chatInput', ['$window', '$interval', 'liveIO', function ($window, $interval, liveIO) {
return function (scope, elem) {
	var browserWindow = angular.element($window)
		, inputText = elem.find('input')
		, sendBtn = elem.find('.button')
		, chatMessages = elem.find('.grid-content')
		, isMobile = scope.deviceDetector.isMobile() || scope.deviceDetector.isTablet()
		;

		var largeChatSize = function() {
			scope.windowSize = scope.getWindowDimension();
			if (isMobile) {
				$interval(function() {
					var windowSize = scope.getWindowDimension();
					elem.addClass('stack-50').addClass('window-top');
					if (windowSize.h*windowSize.w === scope.windowSize.h*scope.windowSize.w) {
						elem.addClass('top-space');
						scope.debugLog('top-space');
					}
					scope.debugLog('input focus',JSON.stringify(windowSize));
					liveIO.emit('chat-size-large', {timestamp: new Date(), height: windowSize.h, width: windowSize.w});
				}, 200, 1);
			}
		};

		if (isMobile) {
			scope.showChatInput = false;
		}
		else {
			scope.showChatInput = true;
		}
		console.log('chat input', scope.showChatInput);

		var origChatSize = function () {
			if (isMobile) {
				elem.removeClass('stack-50').removeClass('window-top').removeClass('top-space');
				var windowSize = scope.getWindowDimension();
				liveIO.emit('chat-size-small', {timestamp: new Date(), height: windowSize.h, width: windowSize.w});
			}
		};

		inputText.on('click', function(evt) {
			largeChatSize();
		});

		inputText.on('keyup', function(evt) {
			liveIO.emit('chat-key', {timestamp: new Date(), keyCode: evt.keyCode});
			if (evt.keyCode === 13) {
				scope.sendChatMessage();
				// origChatSize();
			}
		});

		/*
		elem.on('focusout', function(evt) {
			console.log('focusout',evt,this);
			origChatSize();
		});
		*/

		sendBtn.on('click', function() {
			scope.sendChatMessage();
		});

		chatMessages.on('click', function() {
			origChatSize();
		});

	scope.$on('$destroy', function() {
		console.log('chat-input $destroy');
	});
}
}]);
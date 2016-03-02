;
angular.module('wasabi').directive('resize', function ($window) {
    return function (scope, element) {
        
        var w = angular.element($window)
            ,tiltLR = 0;

        scope.getWindowDimension = function () {
            return {
                h: w.height(),
                w: w.width(),
                sh: $window.screen.height,
                sw: $window.screen.width
            };
        };
        var newSize = scope.getWindowDimension();

        var resizeListener = function() {
                newSize = scope.getWindowDimension();
                scope.$emit('window-resize', newSize);
        }

        resizeListener();

        var deviceOrientationListener = function(evt) {
            tiltLR = evt.gamma;

            if (Math.abs(tiltLR) < 10 || Math.abs(tiltLR) > 60) {
                scope.$emit('device-reorient', tiltLR);
            }
        }

        var fullScreenChangeListener = function(evt) {
            var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
            var fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
            if (fullscreenEnabled) {
                scope.$emit('fullscreen-change', fullscreenElement);
            }
        }
        
        w.on('resize', resizeListener);
        w.on('deviceorientation', deviceOrientationListener);
        w.on('fullscreenchange', fullScreenChangeListener);

        // Find the right method, call on correct element
        scope.launchIntoFullscreen = function(element) {
          if (!element) {
            element = document.documentElement;
          }
          if(element.requestFullscreen) {
            element.requestFullscreen();
          } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
          } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
          }
        }

        // Whack fullscreen
        scope.exitFullscreen = function() {
          if(document.exitFullscreen) {
            document.exitFullscreen();
          } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          }
        }

        scope.$on('$destroy', function() {
            w.off('resize', resizeListener);
            w.off('deviceorientation', deviceOrientationListener);
            console.log('resize $destroy');
        });
    }
})
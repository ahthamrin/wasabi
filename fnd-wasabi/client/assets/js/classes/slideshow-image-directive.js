;
angular.module('wasabi').directive('slideshowContainer', ['$window', function ($window) {
return function (scope, elem) {
	var browserWindow = angular.element($window)
		, slideImg = elem.find('img')
		, slideImageAspect = 0
		, width , height
		;

	var getImageAspect = function(evt) {
		slideImageAspect = 1.0*this.naturalWidth/this.naturalHeight;
		console.log('natural size', this.naturalWidth, this.naturalHeight);
		setSlideImageStyle(elem.width(),elem.height());
	};

	var setSlideImageStyle = function(w, h) {
		if (!slideImg)
			return;

		if (w/h > slideImageAspect && w < 0.8*browserWindow.width()) {
			// make slide.width === window.width for portrait and adjust slide.height
			height = h;
			width = parseInt(h*slideImageAspect);
		}
		else {
			width = w;
			height = parseInt(1.0*w/slideImageAspect);
		}
		slideImg.css({'margin':'0 auto', 'height':height+'px', 'width':width+'px'});
		elem.css({'min-height': height+'px'});      
		scope.$emit('slide-container-resize', {width:width, height:height});
	};

	// document.body.webkitRequestFullscreen();


	scope.$on('window-resize', function(evt, w) {
		setSlideImageStyle(elem.width(),elem.height());
	});

	slideImg.on('load', getImageAspect);

	scope.$on('$destroy', function() {
		// document.exitFullscreen();
		slideImg.off('load', getImageAspect);
		console.log('slideshow-container $destroy');
	});
}
}]);
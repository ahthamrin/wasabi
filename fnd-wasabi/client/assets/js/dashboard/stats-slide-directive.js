;
angular.module('wasabi').directive('statsSlide', ['$window', function ($window) {
return function (scope, elem, attrs) {
	var thisCanvas = elem.find('canvas')
		, thisImage = elem.find('img')
		, slideImageAspect = 0
		, width , height
		;

	var getImageAspect = function(evt) {
		slideImageAspect = 1.0*this.naturalWidth/this.naturalHeight;
		console.log('natural size', this.naturalWidth, this.naturalHeight);
		console.log('image size', thisImage.width(), thisImage.height());
		repaintCanvas();
	};

	var repaintCanvas = function() {
		var w = thisImage.width()
			, h = thisImage.height()
			;

		thisCanvas.width(w);
		thisCanvas.height(h);
		thisCanvas[0].width = w;
		thisCanvas[0].height = h;
		var ctx = thisCanvas[0].getContext('2d');

		ctx.clearRect(0,0,w,h);

		var radius = w*h/10000;

		console.log('tapData', scope.sd.tapData);
		if (scope.sd.tapData)
			for (var idx=0; idx < scope.sd.tapData.length; ++idx) {
				var tap = scope.sd.tapData[idx]
					, centerX = w*tap.x/tap.width
					, centerY = h*tap.y/tap.height
					;
				ctx.beginPath();
				ctx.arc(centerX, centerY, radius, 0, 2*Math.PI, false);
				ctx.fillStyle = 'green';
				ctx.fill();
				// console.log('taps ', centerX, centerY, radius);
			}

		// ctx.beginPath();
		// ctx.fillStyle = 'blue';
		// ctx.fillRect(0,0,w,h);
		// ctx.fill();
	}

	scope.$watch('sd.tapData', function() {
		repaintCanvas();
	});

	scope.$on('window-resize', function(evt, w) {
		console.log('stats-slide-resize', thisImage.width(), thisImage.height());
		repaintCanvas();
	});

	thisImage.on('load', getImageAspect);

	console.log('statsSlide', scope.sd);

}
}]);
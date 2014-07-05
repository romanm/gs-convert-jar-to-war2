exaApp.directive('onWorkplaceCollapseClick', function ($rootScope) {
	return function (scope, element, attrs) {
		scope.isWorkplaceCollaped = false;
		var xPosition = null,
		$element = $(element),
		$sliderControl = $(attrs.sliderControl),
		$rightControl = $(attrs.rightControl),
		$leftControl = $(attrs.leftControl);

		$element.mousedown(function(event) {
			event.stopPropagation();
			event.preventDefault()
		});

		$element.on('click', function (event) {
			if(!scope.isWorkplaceCollaped){
				$element.css('transform', 'rotateY(180deg)');
				xPosition = $rightControl.css("left");
				$sliderControl.stop().animate({left: "0px"}, 200);
				$rightControl.stop().animate({left: $sliderControl.width()}, 200);
				$leftControl.stop().animate({width: "0px"}, 200);
			}
			else{
				$element.css('transform', 'rotateY(0deg)');
				$sliderControl.stop().animate({left: xPosition}, 200);
				$rightControl.stop().animate({left: parseInt(xPosition) + $sliderControl.width()}, 200);                	
				$leftControl.stop().animate({width: xPosition}, 200);
			}
			scope.isWorkplaceCollaped = !scope.isWorkplaceCollaped;
		});
	}
});
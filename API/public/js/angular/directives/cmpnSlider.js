/**
* cmpnApp Module
*
* Description
*/
angular.module('cmpnApp').directive('cmpnSlider', [function () {
	return {
		restrict: 'A',
		templateUrl:'views/directives/slider.html',
		
		link: function ($scope, iElement, iAttrs) {
			
		}
	};
}])
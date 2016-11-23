(function(){
	function date($filter){
		return{
			link: function( $scope, $element, $attrs) {
				$element.text($filter('date')(new Date(), $attrs.date));
			}
		}
	}

	angular.module('date',[]).directive('date',date);
})();
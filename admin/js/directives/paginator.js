/**
* adminApp 
*
* Description
*/
angular.module('adminApp')
.directive('paginator', function factory() {
	return {
		restrict:'E',
		controller: function ($scope, Paginator) {
			$scope.paginator = Paginator;
		},
		templateUrl: 'paginationControl.html'
	};
});
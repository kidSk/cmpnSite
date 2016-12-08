angular.module('paginator',[])
.directive('paginator', function factory() {
	return {
		restrict:'E',
		controller: function ($scope, Paginator) {
			$scope.paginator = Paginator;
		},
		templateUrl: 'views/directives/paginator.html'
	};
});


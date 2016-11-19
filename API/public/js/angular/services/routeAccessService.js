(function(){

	function routeAccessService($location) {
		this.checkRoles = function(access) {
			if (!access) {
				$location.path('/');
			}
		}
	}


	angular.module('cmpnAuthService').service('routeAccessService',routeAccessService)
})();
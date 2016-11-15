/**
* cmpnApp Module
*
* Description
*/
angular.module('cmpnApp').service('routeFilter', function routeFilter ($location) {
	var filters=[];
	var getFilter = function(route){
		for (var i = filters.length - 1; i >= 0; i--) {
			for (var j= filters[i].routes.length - 1; j >= 0; j--) {
				if( matchRoute(filters[i].routes[j],route)){
					return filters[i];
				}
			}
		}
	}

	var matchRoute = function(filterRoute, route){
		if(route instanceof RegExp){
			return route.test(filterRoute);
		}
		else{
			return route === filterRoute;
		}
	}
	return{
		register:function(name,routes,callback, redirectUrl){
			redirectUrl = typeof redirectUrl !== "undefined" ? redirectUrl : null;
			filters.push({
				name:name,
				routes:routes,
				callback:callback,
				redirectUrl:redirectUrl
			});
		},

		run: function(route){
			var filter = getFilter(route);
			if(filter != null && filter.redirectUrl != null){
				//sem acesso a pagina
				if(! filter.callback()){
					$location.path(filter.redirectUrl);
				}
			}

		}
	}
	
});
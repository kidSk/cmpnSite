(function(){

	'use strict'
	var  cmpnUserSidenav = function(){
		return{
			templateUrl:'views/directives/cmpnUser.html'
		}
	}

	angular.module('cmpnUser',[]).directive("cmpnUserSidenav",cmpnUserSidenav);
})();
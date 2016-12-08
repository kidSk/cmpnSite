(function(){

	var leftMenu=function(){
		return{
			templateUrl:'views/directives/leftMenu.html'
		}
	}
	angular.module('leftMenu',[]).directive('leftMenu',leftMenu);
})();
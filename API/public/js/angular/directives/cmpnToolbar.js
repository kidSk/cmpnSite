(function(){

	var cmpnToolbar=function(){
		return{
			templateUrl:'views/directives/cmpnToolbar.html'
		}
	}
	angular.module('cmpnToolbar',[]).directive('cmpnToolbar',cmpnToolbar);
})();
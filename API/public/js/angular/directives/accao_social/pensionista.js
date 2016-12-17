(function(){
	'use strict'
	function pensionista(){

		return{
			templateUrl:'views/directives/accao_social/pensionista.html',
			link: function($scope,$element,$attrs){
				


			}
		}


	}
	angular.module('socialApp').directive('pensionista',pensionista);
})();

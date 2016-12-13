(function(){
	'use strict'
	function dadosPessoais(){

		return{
			templateUrl:'views/directives/accao_social/dados_pessoais.html',
			link: function($scope,$element,$attrs){
				$scope.formName = "dadosPessoaisForm";

			}
		}


	}
	angular.module('socialApp').directive('dadosPessoais',dadosPessoais);
})();

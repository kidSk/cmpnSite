(function(){
	'use strict'
	function situacaoHabitacional(){

		return{
			templateUrl:'views/directives/accao_social/situacao_habitacional.html',
			link: function($scope,$element,$attrs){
				$scope.formName = "situacaoHabitacionalForm"

				$scope.field = [
				{categoria:'Tipo de Habitacao' ,tipo :[
				{name:'Casa Individual '},
				{name:'Apartamento de um Predio '},
				{name:'Parte de uma casa'},
				{name:'Barraca'},
				]},

				{categoria:'Vive em casa',tipo :[
				{name:'Propria '},
				{name:'Apartamento de um Predio '},
				{name:'Parte de uma casa'},
				{name:'Barraca'},
				]}


				]

				$scope.guardar = function(situacao_habitacional){
					console.log(situacao_habitacional)

				}
			}
		}


	}
	angular.module('socialApp').directive('situacaoHabitacional',situacaoHabitacional);
})();

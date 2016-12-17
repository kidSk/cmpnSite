(function(){
	'use strict'
	function situacaoHabitacional(){

		return{
			templateUrl:'views/directives/accao_social/situacao_habitacional.html',
			link: function($scope,$element,$attrs){


				$scope.tipoDeHabitacao= [
				{name:'Casa Individual '},
				{name:'Apartamento de um Predio '},
				{name:'Parte de uma casa'},
				{name:'Barraca'},
				];
				$scope.casa =[	
				{name:'Propria '},
				{name:'Arrendada '},
				{name:'Cedida por Familias'},
				{name:'Cedida por outra pessoa'},
				{name:'Herdada'},
				{name:'Invadida'},
				];
				$scope.paredes=[	
				{name:'Blocos '},
				{name:'Pedras '},
				{name:'Reboco'}
				];

				$scope.chao=[
				{name:'Terra Batida '},
				{name:'Pedra '},
				{name:'Cimento'},
				{name:'Mosaico'},

				];
				$scope.estado=[
				{name:'Ma '},
				{name:'Razoavel '},
				{name:'Boa'},
				];

				$scope.iluminacao=[
				{name:'Eletrecidade '},
				{name:'Petroleo '},
				{name:'Gas'},
				{name:'Vela'},
				];
				$scope.cozinha=[
				{name:'Exclusivo '},
				{name:'Partilhado '},
				];
				$scope.cozinhar = [
				{name:'Gas '},
				{name:'Lenha '},
				{name:'Carvao'},
				{name:'Eletricidade'},
				{name:'Nao Cozinha'},
				];
				$scope.abastecimento = [
				{name:'Rede Publica '},
				{name:'Poco '},
				{name:'Nascente'},
				{name:'Cisterna'},
				{name:'Auto-Tanque'}

				]

			}
		}


	}
	angular.module('socialApp').directive('situacaoHabitacional',situacaoHabitacional);
})();

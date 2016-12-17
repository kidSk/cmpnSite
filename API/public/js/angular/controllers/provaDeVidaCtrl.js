(function(){
	function provaDeVidaCtrl($scope,$location,$http,$resource){
		var self =this;
		self.color ="orange"
		$scope.card=[
		{name:'Criar Ficha', linkAdd:'#/criar ficha de prova de vida', icon:'library_add', path:'criar ficha de prova de vida', color:'purple'},
		{name:'Lista de Fichas',linkAdd:'#/lista de prova de vida', icon:'playlist_add_check',path:'lista de prova de vida',color:'green'},
		{name:'Proposta ',linkAdd:'',icon:'delete_forever',path:'',color:'yellow'},
		{name:'Atualizar Ficha',linkAdd:'',icon:'language',path:'',color:'red'},
		
		];
		$scope.link = function(ev){
			$location.path(ev)

		}
		self.string =/^[a-z A-Z]{1,225}$/;
		self.number = /^[0-9]{1,225}$/;

		$scope.step = 1;
		$scope.nextStep = function() {
			$scope.step++;
		}

		$scope.prevStep = function() {
			$scope.step--;
		}
		/*$scope.prova_de_vida=[];*/
		

		self.save = function(data){
			console.log(data);
			console.log(data.pensionista);
			

		}


	}

	angular.module('socialApp').controller("provaDeVidaCtrl",provaDeVidaCtrl)
})();
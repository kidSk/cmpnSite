(function(){
	function inqueritoCtrl($scope,$location){
		var self =this;
		self.color ="purple"
		$scope.card=[
		{name:'Criar Ficha', linkAdd:'#/criar ficha de inquerito de casos', icon:'library_add', path:'criar ficha de pedido de pensao', color:'purple'},
		{name:'Lista de Fichas',linkAdd:'#/lista de pedidos de pensao', icon:'playlist_add_check',path:'lista de pedidos de pensao',color:'green'},
		{name:'Proposta ',linkAdd:'',icon:'delete_forever',path:'',color:'yellow'},
		{name:'Atualizar Ficha',linkAdd:'',icon:'language',path:'',color:'red'},
		
		];
		$scope.link = function(ev){
			$location.path(ev)

		}

	}

	angular.module('socialApp').controller("inqueritoCtrl",inqueritoCtrl)
})();
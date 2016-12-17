(function(){
	function pensaoCtrl($scope,$location,DTOptionsBuilder, DTColumnDefBuilder,$mdDialog){
		var self = this;
		
		self.color = "red";
		$scope.card=[
		{name:'Criar Ficha', linkAdd:'#/criar ficha de pedido de pensao', icon:'library_add', path:'criar ficha de pedido de pensao', color:'purple'},
		{name:'Lista de Fichas',linkAdd:'#/lista de pedidos de pensao', icon:'playlist_add_check',path:'lista de pedidos de pensao',color:'green'},
		{name:'Remover Ficha ',linkAdd:'',icon:'delete_forever',path:'',color:'yellow'},
		{name:'Atualizar Ficha',linkAdd:'',icon:'language',path:'',color:'red'},
		
		];
		$scope.link = function(ev){
			$location.path(ev)

		}	


		$scope.button="button"
		self.string =/^[a-z A-Z]{1,225}$/;
		self.number = /^[0-9]{1,225}$/;

		$scope.step = 1;
		$scope.nextStep = function() {
			$scope.step++;
		}

		$scope.prevStep = function() {
			$scope.step--;
		}

		
		
		
		
		self.dtOptions = DTOptionsBuilder.newOptions()
		.withDOM('')
		.withOption('responsive', true);
		self.dtColumnsDefs = [
		DTColumnDefBuilder.newColumnDef(0),
		DTColumnDefBuilder.newColumnDef(1),
		DTColumnDefBuilder.newColumnDef(2).withClass('none'),
		DTColumnDefBuilder.newColumnDef(3).withClass('none'),
		DTColumnDefBuilder.newColumnDef(4).withClass('none'),
		DTColumnDefBuilder.newColumnDef(5).withClass('none'),
		DTColumnDefBuilder.newColumnDef(6).withClass('none'),
		DTColumnDefBuilder.newColumnDef(7).withClass('none'),
		DTColumnDefBuilder.newColumnDef(8).withClass('none'),
		];

		self.save = function(pensao){
			console.log(pensao)
		}
		
		
		
		


	}



	angular.module('socialApp').controller('pensaoCtrl',pensaoCtrl);
})();
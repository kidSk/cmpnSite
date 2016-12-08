(function(){
	function credencialCtrl ($scope, pattern, $mdDialog){
		var self =this;
		self.color="teal";
		
		var date = new Date();
		self.cmpn="Camâra Municipal do Porto Novo";
		$scope.social="Serviços de Desenvovimento e Integração Social";
		self.icon="local_atm";
		self.title="Criar Ficha  de Credêncial";
		self.string =/^[a-z A-Z]{1,225}$/;
		self.number = /^[0-9]{1,225}$/;
		self.button="Guardar";

		self.atendimento = {};

		self.guardar = function(){
			console.log($scope.atendimento)
		}
		self.showPrerenderedDialog = function(ev) {
			$mdDialog.show({
				//controller: DialogController,
				contentElement: '#myDialog',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true
			});
		};
		self.cancel=function(){
			$mdDialog.hide();
		}



		$scope.FromDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
		$scope.card=[
		{name:'Criar Ficha', linkAdd:'#/criar ficha de atendimento', icon:'library_add', path:'criar ficha de atendimento', color:'purple'},
		{name:'Lista de Fichas',linkAdd:'#/lista de atendimentos', icon:'playlist_add_check',path:'lista de atendimentos',color:'green'},
		{name:'Remover Ficha ',linkAdd:'',icon:'delete_forever',path:'',color:'yellow'},
		{name:'Atualizar Ficha',linkAdd:'',icon:'language',path:'',color:'red'},
		
		];
		$scope.link = function(ev){
			$location.path(ev)

		}

		
	}

	angular.module('socialApp').controller('credencialCtrl',credencialCtrl);
})();
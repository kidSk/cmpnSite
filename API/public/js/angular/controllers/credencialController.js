(function(){
	function credencialCtrl ($scope, pattern, $mdDialog){
		$scope.color="green";
		var self =this;
		var date = new Date();
		self.cmpn="Camâra Municipal do Porto Novo";
		$scope.social="Serviços de Desenvovimento e Integração Social";
		self.icon="local_atm";
		self.title="Criar Ficha  de Credêncial";
		self.color="green";
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
	}

	angular.module('funcionarioApp').controller('credencialCtrl',credencialCtrl);
})();
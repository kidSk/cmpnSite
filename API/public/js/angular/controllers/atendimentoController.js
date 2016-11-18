(function(){
	function atendimentoCtrl ($scope, pattern){
		var vm =this;
		$scope.title="Ficha de Atendimento";
		$scope.color="green";
		$scope.string =/^[a-z A-Z]{1,225}$/;
		$scope.number = /^[0-9]{1,225}$/;
		$scope.button="Guardar";
	}

	angular.module('funcionarioApp').controller('atendimentoCtrl',atendimentoCtrl);
})();
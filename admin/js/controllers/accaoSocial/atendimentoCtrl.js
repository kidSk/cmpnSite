/**
* adminApp Module
*
* Description
*/
angular.module('adminApp').controller('atendimentoCtrl', ['$scope', function ($scope) {
	$scope.button="Guardar";
	$scope.title=" Ficha de atendimento";
	
	$scope.options=[
	{name:'masculino'},
	{name:'feminino'}
	];

	$scope.step = 1;

	$scope.nextStep = function() {
		$scope.step++;
	}

	$scope.prevStep = function() {
		$scope.step--;
	}
	$scope.conta={};
	$scope.criarConta = function() {
		console.log($scope.conta);
	}
	$scope.string =/^[a-z A-Z]{1,225}$/;
	$scope.number = /^[0-9]{1,225}$/;
	
	$scope.exportar = function(){
		$scope.$broadcast('export-pdf',{});
	}


}]);
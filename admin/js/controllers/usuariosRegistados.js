angular.module('adminApp').controller('listUsers', function($scope,usariosRegistadosService){
	
	$scope.qtd=usariosRegistadosService.query();
	
});

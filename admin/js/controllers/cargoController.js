/**
* adminApp Module
*
* Description
*/
angular.module('adminApp')
.controller('createCargoCtrl',function ($scope,cargoService) {

	$scope.title="Criar Cargo ";
	$scope.button="Guardar";
	$scope.cargo ={}
	$scope.guardar = function(name){

		cargoService.save($scope.cargo);
	/*	ngToast.create({
			className: 'warning',
			content: 'cargo'+name+' Guardado com sucesso',
		});*/
	}
	
})
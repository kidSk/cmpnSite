/**
* cmpnApp Module
*
* Description
* @autor
* Kidiatoliny Delgado Gonçalves -
* Engenharia de Sistemas e Computacional 
* @copyright 
* ghostechnology
* 2016
*/
angular.module('cmpnApp').controller('departamentoCtrl', ['$scope','departamentoService', function ($scope ,departamentoService) {
	var vm=this;
	$scope.title="Departamentos";

	$scope.dep=departamentoService.query();//listar departamentos

	
	
}]);
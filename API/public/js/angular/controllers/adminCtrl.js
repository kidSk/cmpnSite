/**
* cmpnApp Module
*
* Description
* Admin Controller responsavel por controlar a view Admin
* * @autor
* Kidiatoliny Delgado Gonçalves -
* Engenharia de Sistemas e Computacional 
* @copyright 
* ghostechnology
* 2016
*/
angular.module('cmpnApp').controller('adminCtrl', ['$scope', function ($scope) {
	$scope.title="Admin";
	$scope.admin="Admin";
	$scope.kid=function(){
		$scope.kid=!$scope.kid;
	};
	
}]);
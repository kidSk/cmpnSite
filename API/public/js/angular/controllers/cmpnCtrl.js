
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
angular.module('cmpnApp').controller('cmpnCtrl', ['$scope','$location', function ($scope,$location) {
	var vm=this;
	$scope.title="Camara Municipal do Porto Novo";
	
	vm.activeTab = function(viewLocation){
		return viewLocation = $location.path();
	}

	$scope.social=[
	{ name:'Facebook', icon:'fa fa-facebook-official', link:''},
	{ name:'Instagram', icon:'fa fa-instagram', link:''},
	{ name:'Twitter', icon:'fa fa-twitter', link:''},
	{ name:'Google Plus',icon:'fa fa-google-plus', link:''},
	{ name:'Github', icon:'fa fa-github', link:''},
	{ name:'Email', icon:'fa fa-envelope', link:''},
	];

	
}]);
 /**
* cmpnApp Module
*
* Description
* Login Controller responsavel por controlar a view Admin
* * @autor
* Kidiatoliny Delgado Gonçalves -
* Engenharia de Sistemas e Computacional 
* @copyright 
* ghostechnology
* 2016
*/
angular.module('cmpnApp').controller('loginCtrl', ['$scope','authUser', function ($scope,authUser) {
	var vm =this;
	vm.title="Login";
	vm.loginForm = {
		email: 'kid@kid.com',
		password:'123456789'
	};
	vm.login = function(){
		
		authUser.loginUser(vm.loginForm);
		
	}

	
}]);
/**
* adminApp 
*
* Description
*/

angular.module('adminApp').controller('loginCtrl',function ($scope,kidAuthUser) {
	var vm=this;
	vm.title="login"
	vm.loginForm = {
		email: 'kid@kid.com',
		password:'123456789'
	};
	vm.login = function(){
		
		kidAuthUser.loginUser(vm.loginForm);
		
	}
});
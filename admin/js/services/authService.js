/**
* adminApp Module
*
* Description
*/

angular.module('kidAuthService',[])
.factory('kidAuthUser',function($auth,$mdDialog,$location,ngToast) {
	var login = function(loginForm,ev){
		$auth.login(loginForm).then(function(){
			
			
			window.location.assign("http://localhost/cmpnSite/admin");



		}, function(){

			$mdDialog.show(
				$mdDialog.alert()
				.title('ERRO AO FAZER LOGIN')
				.clickOutsideToClose(true)
				.content('Email e/ou Password Incorretos !!! Por favor tente outra vez')
				.ariaLabel('Login Repport')
				.ok('ok')
				.targetEvent(ev)
				);
		});

	};

	return {
		loginUser: function(loginForm){
			login(loginForm);
		}
	}
});
/**
* adminApp Module
*
* Description
*/

angular.module('kidAuthService',[])
.factory('kidAuthUser',function($auth) {
	var login = function(loginForm){
		$auth.login(loginForm).then(function(response){
			console.log(response);
		}, function(response){
			console.log(response)
		});

	};

	return {
		loginUser: function(loginForm){
			login(loginForm);
		}
	}
});
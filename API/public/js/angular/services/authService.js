
angular.module('cmpnAuthService',[])
.factory('sessionControl',function () {
	return {
		get:function(key){
			return sessionStorage.getItem(key);
		},
		set:function(key,val){
			return sessionStorage.setItem(key,val);
		},
		unset:function(key){
			return sessionStorage.removeItem(key);
		}
	};
})
.factory('authUser',function($auth,sessionControl,$mdDialog,$location,$route) {
	var cacheSession = function(email,password,name){
		sessionControl.set('userIsLogin',true);
		sessionControl.set('email',email);
		sessionControl.set('name',name);
		/*		sessionControl.set('avatar',avatar);*/
	}
	var unCacheSession = function(){
		sessionControl.unset('userIsLogin');
		sessionControl.unset('email');
		sessionControl.unset('name');
		/*sessionControl.unset('avatar');*/
	}

	var login = function(loginForm,ev){
		$auth.login(loginForm).then(function(response){
			
			cacheSession(response.data.user.email, response.data.user.password, response.data.user.name)
			if(response.data.user.name==='kid'){

				window.location.assign("http://kingoroot/admin/");
			}
			else{
				window.location.assign("http://kingoroot");

			}
			
/*
console.log(response.data.user);*/



}, function(){
	unCacheSession();
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
		},
		logout:function(){
			$auth.logout();
			unCacheSession();
		},
		isLoggedIn:function(){
			return sessionControl.get('userIsLogin')!==null;
		},
		isAdmin:function(){
			return this.isLoggedIn() && sessionControl.get('name')=='kid';
		}
	}
});

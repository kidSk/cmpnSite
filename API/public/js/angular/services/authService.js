
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
.factory('authUser',function($auth,sessionControl,$mdDialog,$location,$route){
	var cacheSession = function(email,password,name,type,avatar,subNivel){
		sessionControl.set('userIsLogin',true);
		sessionControl.set('email',email);
		sessionControl.set('name',name);
		sessionControl.set('avatar',avatar);
		sessionControl.set('type',type);
		sessionControl.set('subNivel',subNivel);
	}
	var unCacheSession = function(){
		sessionControl.unset('userIsLogin');
		sessionControl.unset('email');
		sessionControl.unset('name');
		sessionControl.unset('avatar');
		sessionControl.set('type');
		sessionControl.set('subNivel');
	}

	var login = function(loginForm,ev){
		$auth.login(loginForm).then(function(response){
			
			cacheSession(response.data.user.email, response.data.user.password, response.data.user.name,response.data.user.type,response.data.user.avatar,response.data.user.subNivel)
			
			if(response.data.user.type==='admin'){

				window.location.assign("http://kingoroot/admin/");
			}

			else if(response.data.user.type==='funcionario'){

				if(response.data.user.subNivel==='social'){
					window.location.assign("http://kingoroot/departamentos#/Accao Social");
					
				}
				if(response.data.user.subNivel==='assembleia')
					window.location.assign("http://kingoroot/departamentos#/assembleia");
			}


			else{
				window.location.assign("http://kingoroot");

			}
			
			

			



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
		isSocial:function(){
			return sessionControl.get('subNivel')==='social';
		},
		isAssembleia:function(){
			return sessionControl.get('subNivel')==='assembleia';
		}
		
	}
});

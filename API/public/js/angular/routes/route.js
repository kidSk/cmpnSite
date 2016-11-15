/**
* cmpnApp 
*
*configuraçao das rotas da aplicação
* @autor
* Kidiatoliny Delgado Gonçalves -
* Engenharia de Sistemas e Computacional 
* @copyright 
* ghostechnology
* 2016
*/
angular.module('cmpnApp').config(function ($routeProvider,$authProvider) {
	$authProvider.loginUrl='http://kingoroot/login';
	$routeProvider
	.when('/home', {
		templateUrl: 'views/index.html',
		controller: 'homeCtrl',
		//controllerAs: 'home'
	}).when('/departamentos', {
		templateUrl: 'views/departamentos/lista.html',
		controller: 'departamentoCtrl',
		controllerAs: 'departamento'
	}).when('/Criar Departamentos', {
		templateUrl: 'views/departamentos/lista.html',
		controller: 'departamentoCtrl',
		controllerAs: 'departamento'
	}).when('/login', {
		templateUrl: 'views/login/login.html',
		controller: 'loginCtrl',
		controllerAs: 'login'
	}).when('/Criar Conta', {
		templateUrl: 'views/login/criarConta.html',
		controller: 'criarContaCtrl',
		controllerAs:'criarConta'
	}).when('/perfil', {
		templateUrl: 'views/profile/userProfile.html',
		controller: 'perfilCtrl',
		controllerAs:'perfil'
	})
	.when('/userList', {
		templateUrl: 'views/profile/userList.html',
		controller: 'perfilCtrl',
		controllerAs:'perfil'
	})
	.when('/sobre', {
		templateUrl: 'views/sobre/sobre.html',
		controller: 'sobreCtrl',
		controllerAs:'sobre'
	})
	.when('/error', {
		templateUrl: 'views/error/403.html',
		/*controller: 'perfilCtrl',
		controllerAs:'perfil'*/
	})
	.otherwise({
		redirectTo: '/home'
	});
	
	
})
.run(function ($rootScope,$location,authUser,$mdDialog,sessionControl,routeFilter,$route) {
	/*var routesOpenToPublic = ['/','/home','departamentos','/login'];
	angular.forEach($route.routes, function(route, path) {
        // push route onto routesOpenToPublic if it has a truthy publicAccess value
        route.publicAccess && (routesOpenToPublic.push(path));
    });

	$rootScope.$on('$routeChangeStart', function(event, nextLoc, currentLoc) {
		var closedToPublic = (-1 === routesOpenToPublic.indexOf($location.path()));
		if(closedToPublic && !authUser.isLoggedIn()) {
			$location.path('/error');
		}
	});*/


	var rotasPrivadas = ['/perfil',];
	
	$rootScope.$on('$routeChangeStart',function(){
		if(($.inArray($location.path(), rotasPrivadas)!==-1) && !authUser.isLoggedIn() ){


			Materialize.toast('ACESSO NEGADO por favor efectue login ou crie uma conta', 5000) ;
			$location.path('#/login');


		}


	});

	/*$rootScope.$on('$routeChangeStart', function(event) {
		if (!sessionControl.get('name')=='kid') {
			$location.path( "/login" );
		}
	});*/
	
	
});



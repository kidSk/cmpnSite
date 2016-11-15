angular.module('adminApp').config(function ($routeProvider,$authProvider) {
	$authProvider.loginUrl='http://kingoroot/login';
	$routeProvider
	.when('/admin', {
		templateUrl: 'views/admin/index.html',
		controller: 'adminCtrl',
		controllerAs: 'admin'
	}).when('/departamentos', {
		templateUrl: 'views/admin/departamentos/index.html',
		controller: 'departamentoCtrl',
		controllerAs: 'departamento'
	})
	.when('/departamentos/adicionar', {
		templateUrl: 'views/admin/departamentos/adicionar.html',
		controller: 'adiconarDepartamentoCtrl',
		controllerAs: 'addDep'
	})	.when('/departamentos/listar', {
		templateUrl: 'views/admin/departamentos/listar.html',
		controller: 'listarDepartamentoCtrl',
		controllerAs: 'listarDep'
	})

	.otherwise({
		redirectTo: '/'
	});
	
	
})
.run(function ($rootScope,$location,authUser,$mdDialog,sessionControl,$route,$window) {
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


	var rotasPrivada = ['/', '/admin',];
	
	$rootScope.$on('$routeChangeStart',function(){
		if(($.inArray($location.path(), rotasPrivada)!==-1) && !authUser.isLoggedIn()  || sessionControl.get('name')!=='kid'){


			//Materialize.toast('Error 401 - Acesso nao Autorizado por favor efectue login', 4000) ;
			$window.location.assign('http://kingoroot/error403');


		}
		if(($.inArray($location.path(), rotasPrivada)!==-1) && !authUser.isLoggedIn() ){


			//Materialize.toast('Error 401 - Acesso nao Autorizado por favor efectue login', 4000) ;
			$window.location.assign('http://kingoroot');


		}


	});

	/*$rootScope.$on('$routeChangeStart', function(event) {
		if (!sessionControl.get('name')=='kid') {
			$location.path( "/login" );
		}
	});*/
	
	
});

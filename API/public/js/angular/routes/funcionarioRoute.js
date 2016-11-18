(function(){
	'use strict'
	angular.module('funcionarioApp').config(function ($routeProvider) {
		$routeProvider
		.when('/Accao Social', {
			templateUrl: 'views/funcionarios/index.html',
			controller: 'accaoSocialCtrl',
			controllerAs:'social'
			
			resolve: {
				checkRoles: function(RouteAccessService, Profile) {
					return RouteAccessService.checkRoles(Profile.isAdmin());
				}
			}
		})
		.when('/assembleia', {
			templateUrl: 'views/funcionarios/index.html',
			controller: 'assembleiaCtrl',
			controllerAs:'assembleia'
		}).when('/accao social/atendimento', {
			templateUrl: 'views/funcionarios/accaoSocial/atendimento.html',
			controller: 'atendimentoCtrl',
			controllerAs:'atendimento'
		})
		.otherwise({ redirectTo: '/' })

	}).run(function ($rootScope,$location,authUser,$mdDialog,sessionControl,$route,$window) {
		var routesOpenToPublic = [];

		if(sessionControl.get('type')=='funcionario' && sessionControl.get('subNivel')!=='social'  )
			routesOpenToPublic = ['/Accao Social']

		angular.forEach($route.routes, function(route, path) {
        // push route onto routesOpenToPublic if it has a truthy publicAccess value
        route.publicAccess && (routesOpenToPublic.push(path));
    });

		$rootScope.$on('$routeChangeStart', function(event, nextLoc, currentLoc) {
			var closedToPublic = (-1 === routesOpenToPublic.indexOf($location.path()));

			
			if(closedToPublic && !authUser.isLoggedIn() || sessionControl.get('type')!=='funcionario' ) {

				$window.location.assign('http://kingoroot');
			}


		});


	/*	var rotasPrivada = ['/assembleia'];

		$rootScope.$on('$routeChangeStart',function(){
			if(($.inArray($location.path(), rotasPrivada)!==-1) && authUser.isLoggedIn()  || sessionControl.get('subNivel')!=='social'){


			//Materialize.toast('Error 401 - Acesso nao Autorizado por favor efectue login', 4000) ;
			$window.location.assign('http://kingoroot/error403');


		}
		/*if(($.inArray($location.path(), rotasPrivada)!==-1) && !authUser.isLoggedIn() ){


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

})();
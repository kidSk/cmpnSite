(function(){
	'use strict'
	angular.module('socialApp').config(function ($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'views/funcionarios/index.html',
			controller: 'accaoSocialCtrl',
			controllerAs:'vm',

			resolve: {
				checkRoles: function(routeAccessService, authUser) {
					return routeAccessService.checkRoles(authUser.isSocial());
				}
			}
		}).when('/atendimento', {
			templateUrl: 'views/funcionarios/menu.html',
			controller: 'atendimentoCtrl',
			controllerAs:'vm',
			resolve: {
				checkRoles: function(routeAccessService, authUser) {
					return routeAccessService.checkRoles(authUser.isSocial());
				}
			}
		})
		/*.when('/assembleia', {
			templateUrl: 'views/funcionarios/index.html',
			controller: 'assembleiaCtrl',
			controllerAs:'vm',
			resolve: {
				checkRoles: function(routeAccessService, authUser) {
					return routeAccessService.checkRoles(authUser.isAssembleia());
				}
			}
		})*/.when('/criar ficha de atendimento', {
			templateUrl: 'views/funcionarios/accaoSocial/atendimento.html',
			controller: 'atendimentoCtrl',
			controllerAs:'vm',
			resolve: {
				checkRoles: function(routeAccessService, authUser) {
					return routeAccessService.checkRoles(authUser.isSocial());
				}
			}
		}).
		when('/lista de atendimentos', {
			templateUrl: 'views/funcionarios/accaoSocial/listar.html',
			controller: 'listarAtendimentoCtrl',
			controllerAs:'vm',
			resolve: {
				checkRoles: function(routeAccessService, authUser) {
					return routeAccessService.checkRoles(authUser.isSocial());
				},

				list : function(atendimentoService){
					return atendimentoService.listar();
				}
			}
		})	.when('/credencial', {
			templateUrl: 'views/funcionarios/menu.html',
			controller: 'credencialCtrl',
			controllerAs:'vm',
			resolve: {
				checkRoles: function(routeAccessService, authUser) {
					return routeAccessService.checkRoles(authUser.isSocial());
				}
			}
		})
		.when('/criar ficha de credencial', {
			templateUrl: 'views/funcionarios/accaoSocial/credencial.html',
			controller: 'credencialCtrl',
			controllerAs:'vm',
			resolve: {
				checkRoles: function(routeAccessService, authUser) {
					return routeAccessService.checkRoles(authUser.isSocial());
				}
			}
		})	.when('/pedido de pensao', {
			templateUrl: 'views/funcionarios/menu.html',
			controller: 'pensaoCtrl',
			controllerAs:'vm',
			resolve: {
				checkRoles: function(routeAccessService, authUser) {
					return routeAccessService.checkRoles(authUser.isSocial());
				}
			}
		}).when('/criar ficha de pedido de pensao', {
			templateUrl: 'views/funcionarios/accaoSocial/pensao.html',
			controller: 'pensaoCtrl',
			controllerAs:'vm',
			resolve: {
				checkRoles: function(routeAccessService, authUser) {
					return routeAccessService.checkRoles(authUser.isSocial());
				}
			}
		})

		.when('/inquerito para casos', {
			templateUrl: 'views/funcionarios/menu.html',
			controller: 'inqueritoCtrl',
			controllerAs:'vm',
			resolve: {
				checkRoles: function(routeAccessService, authUser) {
					return routeAccessService.checkRoles(authUser.isSocial());
				}
			}
		}).when('/criar ficha de inquerito de casos', {
			templateUrl: 'views/funcionarios/inqueritos_de_casos.html',
			controller: 'inqueritoCtrl',
			controllerAs:'vm',
			resolve: {
				checkRoles: function(routeAccessService, authUser) {
					return routeAccessService.checkRoles(authUser.isSocial());
				}
			}
		})

		.when('/prova de vida', {
			templateUrl: 'views/funcionarios/menu.html',
			controller: 'provaDeVidaCtrl',
			controllerAs:'vm',
			resolve: {
				checkRoles: function(routeAccessService, authUser) {
					return routeAccessService.checkRoles(authUser.isSocial());
				}
			}
		}).when('/criar ficha de prova de vida', {
			templateUrl: 'views/funcionarios/accaoSocial/prova_de_vida.html',
			controller: 'provaDeVidaCtrl',
			controllerAs:'vm',
			resolve: {
				checkRoles: function(routeAccessService, authUser) {
					return routeAccessService.checkRoles(authUser.isSocial());
				}
			}
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
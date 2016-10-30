angular.module('adminApp')
.config(function($routeProvider,$authProvider){
	$authProvider.loginUrl='http://localhost:8000/login';
	$routeProvider
	.when('/evento',{
		templateUrl: 'views/evento/index.php',
		controller: 'IndexEventoCtrl'
	})
	.when('/evento/create',{
		templateUrl: 'views/evento/create.html',
		controller: 'CreateEventoCtrl'
	})
	.when('/wid',{
		templateUrl: 'views/wid.php',

	})
	.when('/createDep',{
		templateUrl: 'views/departamento/create.php',
		controller: 'createDepCtrl'
	})
	.when('/',{
		templateUrl: 'views/wid.php',
		controller: 'createDepCtrl'
	})
	.when('/departamento/list',{
		templateUrl: 'views/departamento/listar.php',
		controller: 'listDepCtrl'
	})
	.when('/editDep/:id',{
		templateUrl: 'views/departamento/create.php',
		controller: 'editDepCtrl'
	})
	.when('/criarCargo',{
		templateUrl: 'views/cargos/create.php',
		controller: 'createCargoCtrl'
	})
	.when('/criarMensagem',{
		templateUrl: 'views/presidente/criarMensagem.html',
		controller: 'criarMensagemCtrl'
	})
	.when('/criarMensagem',{
		templateUrl: 'views/presidente/criarMensagem.html',
		controller: 'criarMensagemCtrl'
	})
	.when('/atendimento',{
		templateUrl: 'views/departamento/accaoSocial/atendimento.html',
		controller: 'atendimentoCtrl'
	})
	.when('/accaoSocial',{
		templateUrl: 'views/departamento/accaoSocial/index.html',
		controller: 'accaoSocialCtrl'
	})

	.otherwise({
		redirectTo: '/'
	});
})
.run(function ($rootScope,$location,kidAuthUser) {
	var rotasPrivadas = ['/','/evento','/evento/create','/wid','/createDep','/departamento/list',
	'/editDep/:id','/criarCargo','/criarMensagem',];
	$rootScope.$on('$routeChangeStart',function(){
		if(($.inArray($location.path(), rotasPrivadas)!==-1) && !kidAuthUser.isLoggedIn()){
			/*$location.path('/error');*/


			window.location.assign("http://localhost/cmpnSite/admin/views/errors/403.html");
			
		}
	});
	
});

/**
* cmpnApp Module
*
* Description
*/
angular.module('cmpnApp')
.config(function ($routeProvider) {
	$routeProvider
	.when('/home',{
		templateUrl: 'views/home.html',
		controller : 'homeCtrl'
	})
	.when('/departamentos',{
		templateUrl: 'views/departamentos/list.html',
		controller : 'listDepCtrl'
	})

	.when('/login',{
		templateUrl: 'views/login.html',
		controller : 'loginCtrl',
		controllerAs:'login'
	})
	.when('/criarConta',{
		templateUrl: 'views/criarConta.html',
		controller : 'criarContaCtrl',
		controllerAs:'conta'
		
	})
	;

	

});

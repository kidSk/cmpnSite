angular.module('adminApp')
.config(function($routeProvider){
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

/*	.otherwise({
		redirectTo: 'views/wid'
	});*/
});

/**
* cmpnApp Module
*
* Description
*/
angular.module('cmpnApp')
.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'views/home.html',
		controller : 'homeCtrl'
	})
	.when('/departamentos',{
		templateUrl: 'views/departamentos/list.html',
		controller : 'listDepCtrl'
	});

	;

});
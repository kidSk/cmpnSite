

angular.module('depApp')
.config(function ($routeProvider) {
	$routeProvider
	.when('/accao',{
		templateUrl: 'views/accaoSocial/index.html',
		controller : 'accaoSocialCtrl'
	})
	.when('/criarFicha',{
		templateUrl: 'views/accaoSocial/criarFicha.html',
		controller : 'criarFichaCtrl'
	})

	;

	

});
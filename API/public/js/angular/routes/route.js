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
angular.module('cmpnApp').config(function ($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: 'views/index.html',
		controller: 'homeCtrl',
		//controllerAs: 'home'
	}).when('/admin', {
		templateUrl: 'views/index.html',
		controller: 'adminCtrl',
		controllerAs: 'admin'
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
	.otherwise({
		redirectTo: '/home'
	});
	
	
});
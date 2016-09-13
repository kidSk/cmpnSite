/**
* adminApp Module
*
* Modulo de suporte ao administrador,onde serao injetadas todas as dependencias necessarias para o funcionamento da dashboard administrador
* 
*/
angular.module('adminApp', ['ngMaterial','ngRoute','ngResource','ngAnimate','ngToast','upLoadPreview']);
/**
 * localização do modulo e criacao de serviços
 */
 angular.module('adminApp')
 /**
 * [description]
 * serviço de configuração do tema das paginas
 */
 .config(function($mdThemingProvider) {
 	var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
 		'contrastDefaultColor': 'light',
 		'contrastDarkColors': ['50'],
 		'50': 'ffffff'
 	});
 	$mdThemingProvider.definePalette('customBlue', customBlueMap);
 	$mdThemingProvider.theme('default')
 	.primaryPalette('customBlue', {
 		'default': '500',
 		'hue-1': '50'
 	})
 	.accentPalette('blue')
 	.warnPalette('red');
 	$mdThemingProvider.theme('input', 'default')
 	.primaryPalette('grey')

 })
 /**
 * [description]
 *configuração do provider que será responsavel por mostrar as notificações ao utilizador
 */
 .config(['ngToastProvider',
 	function(ngToastProvider) {
 		ngToastProvider.configure({
 			additionalClasses: 'my-animation'
 		});
 	}
 	])
 /**
 * [description]
 * filtro responsavel pelo num de elementos que serao exibidos em uma pagina
 */
 .filter('paginate', function(Paginator) {
 	return function(input, rowsPerPage) {
 		if (!input) {
 			return input;
 		}
 		if (rowsPerPage) {
 			Paginator.rowsPerPage = rowsPerPage;
 		}
 		Paginator.itemCount = input.length;
 		return input.slice(parseInt(Paginator.page * Paginator.rowsPerPage), parseInt((Paginator.page + 1) * Paginator.rowsPerPage + 1) - 1);
 	}
 })
 /**
 * [description]
 * filtro responsavel pelo controle de num de paginas,
 * permitindo navegar entre as paginas
 */
 .filter('forLoop', function() {
 	return function(input, start, end) {
 		input = new Array(end - start);
 		for (var i = 0; start < end; start++, i++) {
 			input[i] = start;
 		}
 		return input;
 	}
 })
 /**
 * [description]
 * mostra os elementos em ordem inversa
 */
 .filter('reverse', function(){
 	return function(items){
 		return items.slice().reverse();
 	};
 });

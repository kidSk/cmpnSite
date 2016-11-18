/**
* cmpnApp le
*
* Configuração dos filtros
*@autor
* Kidiatoliny Delgado Gonçalves -
* Engenharia de Sistemas e Computacional 
* @copyright 
* ghostechnology
* 2016
*/
angular.module('filterApp',['paginations'])	
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
 });/*.run(function(routeFilter,authUser){
 	routeFilter.register('kid', ['/admin'], function(){
 		return isAdmin();
 	},'/');
 });
 
*/
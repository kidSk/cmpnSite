/**
* adminApp Module
*
* Description
*/
angular.module('adminApp')
.factory('eventoService',function ($resource) {
	

	return $resource("http://localhost:8000/evento/:id");


});
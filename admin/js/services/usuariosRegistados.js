

angular.module('adminApp').factory('usariosRegistadosService',function ($resource) {
	

	return $resource('http://localhost:8000/usuariosRegistados');
});

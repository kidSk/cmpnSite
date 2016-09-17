/**
* adminApp Module
*
* Description
*/
angular.module('adminApp').factory('departamentoService',function ($resource) {
	

	return $resource('http://kidSk:8000/departamento/:id',{id:"@id"},
		{update:{method:"PUT"
	}
});
});
/**
* adminApp Module
*
* Description
*/
angular.module('adminApp').factory('departamentoService',function ($resource) {
	

	return $resource('http://localhost:8000/departamento/:id',{id:"@id"},
		{update:{method:"PUT"
	}
});
});

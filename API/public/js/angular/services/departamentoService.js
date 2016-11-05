/**
* adminApp Module
*
* Description
*/
angular.module('cmpnApp').factory('departamentoService',function ($resource) {
	

	return $resource('http://kingoroot/departamento/:id',{id:"@id"},
		{update:{method:"PUT"
	}
});
});

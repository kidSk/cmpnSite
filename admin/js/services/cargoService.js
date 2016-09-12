/**
* adminApp Module
*
* Description
*/
angular.module('adminApp').factory('cargoService',function ($resource) {
	

	return $resource('http://localhost:8000/cargo/:id',{id:"@id"},
		{update:{method:"PUT"
	}
});
});
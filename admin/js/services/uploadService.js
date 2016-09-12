/**
* adminApp Module
*
* Description
*/
angular.module('adminApp').service('upload',["$http","$q",function ($http,$q){
	
	this.guardar = function(file){
		var deferred = $q.defer();
		var formData = new FormData();
		formData.append('file',file);
		return $http.post("file.php", formData,{
			headers:{
				"Content-type":undefined
			},
			transformRequest:angular.identity

		}).success(function(res){
			deferred.resolve(res);
		}).error(function(msg,code) {
			deferred.reject(msg);
		})
		return deferred.promise;
	}

}]);
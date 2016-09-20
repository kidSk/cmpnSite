/**
* adminApp Module
*
* Description
*/
angular.module('adminApp').service('kidMultipartForm', ['$http',function ($http) {
	this.post=function(uploadUrl,data){
		var fd= new FormData();
		for(var key in data)
			fd.append(key,data[key]);
		$http.post(uploadUrl,fd,{
			transformRequest:angular.identity,
			headers:{'Content-Type':undefined}
		})

	}
}]);
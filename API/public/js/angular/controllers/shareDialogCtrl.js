/**
* adminApp Module
*
* Description
*/
angular.module('cmpnApp').controller('DialogController',function($scope){

	var vm =this;

	$scope.share=[];

	$scope.share = function(share){
		alert(share);
	}
	
});
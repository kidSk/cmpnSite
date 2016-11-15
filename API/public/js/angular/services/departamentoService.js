/**
* adminApp Module
*
* Description
*/
angular.module('departamento',[]).service('departamentoService',function ($resource) {
	
	
	var q = $resource('http://kingoroot/departamento/:id',{id:"@id"},{update:{method:"PUT"}})

	return{
		listar:function(){
			return q.query();

		},
		guardar:function(a, name){
			q.save(a, function(){
				Materialize.toast('Departamento ' +name+ ' Guardado com sucesso',3000)
			});
		}
	}

/*
		$scope.guardar = function(name){


 		departamentoService.save($scope.dep,function(){
 			$timeout(function() {
 				$location.path('/');
 			},400);
 			ngToast.create({
 				className: 'warning',
 				content: 'Departamento ' +name+ ' Guardado com sucesso',


 			});

 		}, function(error){

 			$timeout(function() {
 				$location.path('/');
 			},1600);
 			ngToast.create({
 				className: 'danger',
 				content: 'Erro ao Criar Departamento '+name,


 			});

 		});



 	};*/




 });

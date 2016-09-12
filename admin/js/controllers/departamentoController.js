/**
* adminApp Module
*
* Description
*/
angular.module('adminApp')


/**
 * Controlador para registar departamentos
 * @param  {[type]} $scope                                [description]
 * @param  {[type]} departamentoService                   [servico responsavel pelo envio do registo]
 * @param  {[type]} $location                             [description]
 * @param  {[type]} $timeout                              [description]
 * @param  {[type]} $mdToast                              [description]
 * @param  {String} ngToast){	$scope.title               [description]
 * @param  {[type]} 300);		ngToast.create({			className: 'warning',			content: 'Departamento '+d+' Guardado com sucesso',		});			};	} [description]
 * @return {[type]}                                       [description]
 */
 .controller('createDepCtrl',function ($scope,departamentoService,$location, $timeout,$mdToast,ngToast){
 	$scope.title="Criar Departamentos";
 	$scope.dep={};
 	$scope.button="adicionar";
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



 	};


 })

 .controller('listDepCtrl',function ($scope, $route,departamentoService, $location, $timeout,$mdToast,ngToast,$mdDialog) {
 	$scope.list="Lista de Departamentos";
 	$scope.dep=departamentoService.query();



 	$scope.rowsPerPage = 3;

 	$scope.removeDep = function(ev,id,name){
 		/*departamentoService.delete({id:id});
 		$timeout(function() {
 			$location.path('/');
 		},300);
 		ngToast.create({
 			className: 'info',
 			content: 'Departamento '+d+' atualizado com sucesso',


 		});*/

 		var confirm = $mdDialog.confirm()

 		.title(name)
 		.content('Tens a certeza que queres eliminar este departamento ,todos os dados serão Perdidos !!!!!')
 		.ariaLabel('delete')
 		.ok('sim')
 		.cancel('não')
 		.targetEvent(ev);
 		$mdDialog.show(confirm).then(function() {
 			departamentoService.delete({id:id},function(){

 				ngToast.create({
 					className: 'danger',
 					content: 'Departamento '+name+' Removido com sucesso',


 				});

 				$location.path('/departamento/list');
 				$route.reload();
 				console.log($scope.dep);

 			});



 			

 		});


 	};

 	/*$scope.$apply();*/



 })
 .controller('editDepCtrl',function ($scope,departamentoService,$location, $timeout,$mdToast,ngToast,$routeParams) {
 	$scope.title="Editar Departamentos";
 	$scope.button="atualizar";
 	$scope.dep=departamentoService.get({
 		id:$routeParams.id
 	});

 	$scope.guardar = function(name){
 		departamentoService.update($scope.dep);

 		$timeout(function() {
 			$location.path('/');
 		},300);
 		ngToast.create({
 			className: 'info',
 			content: 'Departamento '+name+' atualizado com sucesso',


 		});

 	};

 })


 ;

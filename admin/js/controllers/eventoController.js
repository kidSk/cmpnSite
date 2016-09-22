/**
* adminApp 
*
* Description
*/
angular.module('adminApp')
/**
 * Controller Responsavel para criacao de Eventos
 * @param  {[type]} 'CreateEventoCtrl' [description]
 * @param  {[type]} ['$scope'          [description]
 * @param  {[type]} functfion          ($scope       [description]
 * @return {[type]}                    [description]
 */
 .controller('CreateEventoCtrl',function (
  $scope,
  eventoService,
  $timeout, 
  $location,
  $mdToast,
  ngToast
  ){
   $scope.title="Criar Eventos ou Atividades";

    /**
     * inputs do formulario para criacao de eventos ou atividades
     * @type {Array}
     */
     $scope.forms={
      'title':'Titulo'
    }

    $scope.Evento={};


     /**
      * [guardarEvento]
      * @return {[array Eventos]}
      */
      $scope.guardarEvento = function(){

       eventoService.save($scope.Evento);



       
       var d=$scope.Evento.titulo;
       var tipo =$scope.Evento.tipo;
       $timeout(function() {
        $location.path('/');
      },300);
       ngToast.create({
        className: 'warning',
        content: ' '+tipo+' com o titulo   '+d+' Guardado com sucesso',
      });
       console.log($scope.Evento);



     };

     $('input[name="titulo"]').keyup(function() {
      $('#f1').addClass('col-md-8');

    });

   })
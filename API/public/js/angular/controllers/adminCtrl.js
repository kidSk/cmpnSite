/**
* cmpnApp Module
*
* Description
* Admin Controller responsavel por controlar a view Admin
* * @autor
* Kidiatoliny Delgado Gonçalves -
* Engenharia de Sistemas e Computacional 
* @copyright 
* ghostechnology
* 2016
*/
angular.module('adminApp').controller('adminCtrl', function ($scope,$location,authUser,  sessionControl,$mdDialog) {
	var vm = this;


  vm.title="CMPN Admin DashBoard";

  vm.activeTab = function(viewLocation){

   if($location.path()=="/departamentos" || $location.path()=="/departamentos/listar" || $location.path()=="/departamentos/atualizar" || $location.path()=="/departamentos/adicionar"  ){
      $scope.color="purple";
   }
   if($location.path()=="/"){
      $scope.color="blue";
   }
   return viewLocation = $location.path();

}
$scope.clean = function(){
   $scope.search = !$scope.search
   $scope.procurar=null



};



vm.isLogin=authUser.isLoggedIn();
         //escutador
         $scope.$watch(function(){
         	return authUser.isLoggedIn();
         },function(newVal){
         	if(typeof newVal !== 'undefined'){
         		vm.isLogin = authUser.isLoggedIn(); 
         	}

         });

         vm.user={
         	email:sessionControl.get('email'),
         	name:sessionControl.get('name'),
         }

         

         vm.logout = function(){



         	authUser.logout();
         	/*    	window.location.reload();*/
         	window.location.assign("http://kingoroot");
         }

         $scope.items = [
         {name: 'Pagina Principal', icon: 'home',link:'#/home', color:'blue-text'},
         {name: 'Sobre', icon: 'info', link:'#/sobre', color:'green-text'},

         {name: 'Projetos', icon: 'work', color:'yellow-text',click:function(ev){
            $mdDialog.show(
               $mdDialog.alert()
               .parent(angular.element(document.querySelector('#popupContainer')))
               .clickOutsideToClose(true)
               .title('ALERTA')
               .textContent('Disponivel Brevemente')
               .ariaLabel('Alert Dialog')
               .ok('OK')
               .targetEvent(ev)
               );
         }},{name: 'Vereadores', icon: 'group', color:'red-text',click:function(ev){
            $mdDialog.show(
               $mdDialog.alert()
               .parent(angular.element(document.querySelector('#popupContainer')))
               .clickOutsideToClose(true)
               .title('ALERTA')
               .textContent('Disponivel Brevemente')
               .ariaLabel('Alert Dialog')
               .ok('OK')
               .targetEvent(ev)
               );
         }},
         {name: 'Departamentos', icon: 'business',link:'#/departamentos', color:'purple-text'},

         {name: 'Serviços', icon: 'airplay', color:'teal-text',click:function(ev){
            $mdDialog.show(
               $mdDialog.alert()
               .parent(angular.element(document.querySelector('#popupContainer')))
               .clickOutsideToClose(true)
               .title('ALERTA')
               .textContent('Disponivel Brevemente')
               .ariaLabel('Alert Dialog')
               .ok('OK')
               .targetEvent(ev)
               );
         }},
         {name: 'Galeria', icon: 'camera_alt', color:'orange-text',click:function(ev){
            $mdDialog.show(
               $mdDialog.alert()
               .parent(angular.element(document.querySelector('#popupContainer')))
               .clickOutsideToClose(true)
               .title('ALERTA')
               .textContent('Disponivel Brevemente')
               .ariaLabel('Alert Dialog')
               .ok('OK')
               .targetEvent(ev)
               );
         }},
         {name: 'Contactos', icon: 'contact_mail',click:function(ev){
            $mdDialog.show(
               $mdDialog.alert()
               .parent(angular.element(document.querySelector('#popupContainer')))
               .clickOutsideToClose(true)
               .title('ALERTA')
               .textContent('Disponivel Brevemente')
               .ariaLabel('Alert Dialog')
               .ok('OK')
               .targetEvent(ev)
               );
         }},



         ];


      });
(function(){

    function socialMainCtrl ($scope,authUser,sessionControl,$location){
      var self =this;
      self.title="Integracao e Apoio Social";

      self.activeTab = function(viewLocation){

       if($location.path()=="/criar ficha de atendimento" || $location.path()=="/lista de atendimentos" || $location.path()=="/atendimento"){
          $scope.color="blue";
      }
      if($location.path()=="/criar ficha de credencial"){
          $scope.color="teal";
      }
      if($location.path()=="/"){
          $scope.color="green";
      }
      return viewLocation = $location.path();

  }
  $scope.clean = function(){
   $scope.search = !$scope.search
   $scope.procurar=null



};

self.isLogin=authUser.isLoggedIn();

self.icon="business";
         //escutador
         $scope.$watch(function(){
         	return authUser.isLoggedIn();
         },function(newVal){
         	if(typeof newVal !== 'undefined'){
         		self.isLogin = authUser.isLoggedIn(); 
         	}

         });

         self.user={
         	email:sessionControl.get('email'),
         	name:sessionControl.get('name'),
         }

         

         self.logout = function(){



         	authUser.logout();
         	/*    	window.location.reload();*/
         	window.location.assign("http://kingoroot");
         }

         $scope.items = [
         {name: 'Home', icon: 'home',link:'#/home', color:'green-text'},
         {name: 'Atendimento', icon: 'info', link:'#/atendimento', color:'blue-text'},
         {name: 'Credenciais', icon: 'work', color:'teal-text'},
         {name: 'Pedido de Pensao', icon: 'group', color:'red-text', link:"#/pedido de pensao"},
         {name: 'Departamentos', icon: 'business',link:'#/departamentos', color:'purple-text'},

         {name: 'Serviços', icon: 'airplay', color:'pink-text',click:function(ev){
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





    }

    angular.module('socialApp').controller('socialMainCtrl', socialMainCtrl);


})();
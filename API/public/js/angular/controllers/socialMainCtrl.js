(function(){

  function socialMainCtrl ($scope,authUser,sessionControl,$location){
    var self =this;
    self.title="Integracao e Apoio Social";

    self.activeTab = function(viewLocation){

       if($location.path()=="/criar ficha de atendimento" || $location.path()=="/lista de atendimentos" || $location.path()=="/atendimento"){
          $scope.color="blue";
      }
      if($location.path()=="/criar ficha de credencial" || $location.path()=="/credencial" ){
          $scope.color="teal";
      }
      if($location.path()=="/pedido de pensao" || $location.path()=="/criar ficha de pedido de pensao"){
          $scope.color="red";
      }   
      if($location.path()=="/inquerito para casos"){
          $scope.color="purple";
      }
      if($location.path()=="/prova de vida" || $location.path()=="/criar ficha de prova de vida"){
          $scope.color="orange";
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
         {name: 'Credenciais', icon: 'work', color:'teal-text',link:'#/credencial'},
         {name: 'Pedido de Pensao', icon: 'group', color:'red-text', link:"#/pedido de pensao"},
         {name: 'Inquerito para Casos', icon: 'airplay',link:'#/inquerito para casos', color:'purple-text'},

         {name: 'Centro de Dia', icon: 'business', color:'pink-text'},
         {name: 'Prova de Vida', icon: 'directions_walk', color:'orange-text',link:'#/prova de vida'},
         {name: 'Contactos', icon: 'contact_mail'},



         ]; 





     }

     angular.module('socialApp').controller('socialMainCtrl', socialMainCtrl);


 })();
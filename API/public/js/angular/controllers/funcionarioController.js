(function(){

	function funcionarioCtrl($scope,authUser,sessionControl){
		var self =this;
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

     }

     angular.module('funcionarioApp').controller('funcionarioCtrl', funcionarioCtrl);


 })();
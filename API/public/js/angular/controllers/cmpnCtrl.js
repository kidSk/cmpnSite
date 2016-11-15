
/**
* cmpnApp Module
*
* Description
* @autor
* Kidiatoliny Delgado Gonçalves -
* Engenharia de Sistemas e Computacional 
* @copyright 
* ghostechnology
* 2016
*/
angular.module('cmpnApp').controller('cmpnCtrl',
	function ($scope,$location,authUser, sessionControl,$mdDialog) {
		var vm=this;
		$scope.title="Camara Municipal do Porto Novo";

		vm.activeTab = function(viewLocation){
			return viewLocation = $location.path();
		}

      $scope.showTabDialog = function(ev) {
        $mdDialog.show({
            //controller: DialogController,
            templateUrl: 'views/dialog/shareDialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        });
/*        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
          $scope.status = 'You cancelled the dialog.';
      });*/
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
           window.location.assign("http://kingoroot/");
       }


       $scope.social=[
       { name:'Facebook', icon:'fa fa-facebook-official', link:''},
       { name:'Instagram', icon:'fa fa-instagram', link:''},
       { name:'Twitter', icon:'fa fa-twitter', link:''},
       { name:'Google Plus',icon:'fa fa-google-plus', link:''},
       { name:'Github', icon:'fa fa-github', link:''},
       { name:'Email', icon:'fa fa-envelope', link:''},
       ];


   });
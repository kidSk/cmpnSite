/**
* cmpn Module
*
* Description
*/
angular.module('cmpnApp').controller('homeCtrl',function ($scope,$mdDialog) {
	
	$scope.title='Camara Municipal do Porto Novo';

	$scope.toast = function(link){
		alert(link);
	}

	$scope.social=[
	{ name:'Facebook', icon:'fa fa-facebook-official', link:''},
	{ name:'Instagram', icon:'fa fa-instagram', link:''},
	{ name:'Twitter', icon:'fa fa-twitter', link:''},
	{ name:'Google Plus',icon:'fa fa-google-plus', link:''},
	{ name:'Github', icon:'fa fa-github', link:''},
	{ name:'Email', icon:'fa fa-envelope', link:''},
	];

	$scope.links="Links Uteis";

	$scope.showTabDialog = function(ev) {
		$mdDialog.show({
      //controller: cmpnCtrl,
      templateUrl: 'views/dialog.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      escapeToClose: true,
      clickOutsideToClose: true,
      focusOnOpen: true
  });

	};
});
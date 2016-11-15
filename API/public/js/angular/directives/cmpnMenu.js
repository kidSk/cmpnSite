/**
* cmpnApp Module
*
* Menu directive 
* @autor
* Kidiatoliny Delgado Gonçalves -
* Engenharia de Sistemas e Computacional 
* @copyright 
* ghostechnology
* 2016
*/
angular.module('menuApp',[]).directive('cmpnMenu', ['$mdDialog','authUser',function ($mdDialog,authUser) {
	return {
		restrict: 'A',
		templateUrl:'views/directives/menu.html',
		link: function ($scope, iElement, iAttrs) {


			$scope.title="Camâra Municipal do Porto Novo";
			
			$scope.location=function(){
				window.location.assign("http://kingoroot/#/perfil");
			}
			$scope.clean = function(){
				$scope.search = !$scope.search
				$scope.procurar=null

			};

			$scope.items = [
			{name: 'Pagina Principal', icon: 'home',link:'#/home'},
			{name: 'Sobre', icon: 'info', link:'#/sobre'},

			{name: 'Projetos', icon: 'work',click:function(ev){
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
			}},{name: 'Vereadores', icon: 'group',click:function(ev){
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
			{name: 'Departamentos', icon: 'business',link:'#/departamentos',},

			{name: 'Serviços', icon: 'airplay',click:function(ev){
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
			{name: 'Galeria', icon: 'camera_alt',click:function(ev){
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
	};
}]);


(function(){
	function assembleiaCtrl($scope,$location){


		var vm = this;
		$scope.title="Dashboard Departamento ";


		$scope.activeTab = function(viewLocation){
			if($location.path()=="/assembleia"){
				$scope.color="purple";
			}
			return viewLocation = $location.path();

			
		}
		$scope.card=[
		{name:'Adicionar', link:'#/departamentos/adicionar', icon:'add_circle', path:'departamentos/adicionar'},
		{name:'Listar',link:'#/departamentos/listar', icon:'playlist_add_check',path:'departamentos/listar'},
		{name:'Remover',link:'#/departamentos/remover',icon:'delete_forever',path:'departamentos/remover'},
		{name:'Noticias',link:'#/departamentos/noticias',icon:'language',path:'departamentos/noticias'},
		
		];
		$scope.link = function(ev){
			$location.path(ev)

		}

		$scope.add="adicionar departamento"

		$scope.fab=[
		{name:'Adicionar', icon:'add', color:'blue', link:'#/departamentos/adicionar'},
		{name:'Listar', icon:'playlist_add_check', color:'green', link:'#/departamentos/listar'},
		{name:'Remover', icon:'delete_forever', color:'red', link:'#/departamentos/listar'},
		];
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

	}

	
	angular.module("funcionarioApp").controller('assembleiaCtrl',assembleiaCtrl);
})();
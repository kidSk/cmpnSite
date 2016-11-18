(function(){
	function accaoSocialCtrl($scope,$location){


		var vm = this;
		$scope.title="Dashboard Departamento ";

		$scope.clean = function(){
			$scope.search = !$scope.search
			$scope.procurar=null



		}
		$scope.activeTab = function(viewLocation){
			if($location.path()=="/Accao Social"){
				$scope.color="green";
			}


			return viewLocation = $location.path();

		}


		$scope.pushPin =[
		{link:'#/departamentos/adicionar', nome:'Adicionar Departamentos '}
		]

		$scope.card=[
		{name:'Atendimento ', link:'#/accao social/atendimento', icon:'add_circle', path:'accao social/atendimento'},
		{name:'Apoio a Habitação',link:'#/accao social/apoio a habitacao', icon:'home',path:'/accao social/apoio a habitacao'},
		{name:'Apoio a Saúde',link:'#/accao social/apoio a saude', icon:'home',path:'/accao social/apoio a saude'},
		{name:'Apoio a Saúde',link:'#/accao social/apoio a saude', icon:'home',path:'/accao social/apoio a saude'},
		

		
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

	
	angular.module("funcionarioApp").controller('accaoSocialCtrl',accaoSocialCtrl);
})();
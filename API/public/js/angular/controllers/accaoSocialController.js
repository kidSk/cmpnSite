(function(){
	function accaoSocialCtrl($scope,$location){


		var self= this;
		self.title="Dashboard Departamento ";
		self.icon = "business"

		$scope.clean = function(){
			$scope.search = !$scope.search
			$scope.procurar=null



		}
		self.activeTab = function(viewLocation){
			if($location.path()=="/Accao Social"){
				self.color="green";
			}


			return viewLocation = $location.path();

		}


		$scope.pushPin =[
		{link:'#/departamentos/adicionar', nome:'Adicionar Departamentos '}
		]

		$scope.card=[
		{name:'Atendimento ', linkAdd:'#/accao social/atendimento', icon:'perm_identity', path:'accao social/atendimento', color:'blue'},
		{name:'Credênciais',link:'#/credencial', icon:'local_atm',path:'#/credencial',color:'green',},
		{name:'Apoio a Habitação',link:'#/accao social/apoio a habitacao', icon:'store',path:'/accao social/apoio a habitacao',color:'yellow',},
		{name:'Apoio a Saúde',link:'#/accao social/apoio a saude', icon:'tag_faces',path:'/accao social/apoio a saude',color:'green',color:'red',},
		
		

		
		];
		$scope.link = function(ev){
			$location.path(ev)

		}

		$scope.add="adicionar departamento"

	/*	$scope.fab=[
		{name:'Adicionar', icon:'add', color:'blue', link:'#/departamentos/adicionar'},
		{name:'Listar', icon:'playlist_add_check', color:'green', link:'#/departamentos/listar'},
		{name:'Remover', icon:'delete_forever', color:'red', link:'#/departamentos/listar'},
		];*/
		$scope.items = [
		{name: 'Home', icon: 'home',link:'#/home', color:'green-text'},
		{name: 'Sobre', icon: 'info', link:'#/sobre', color:'blue-text'},

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
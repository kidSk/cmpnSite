(function(){
	function accaoSocialCtrl($scope,$location){


		var self= this;
		self.title="Dashboard Departamento ";
		self.icon = "business"
		self.color="green"

		$scope.clean = function(){
			$scope.search = !$scope.search
			$scope.procurar=null



		}




		$scope.pushPin =[
		{link:'#/departamentos/adicionar', nome:'Adicionar Departamentos '}
		]

		$scope.card=[
		{name:'Atendimento ', linkAdd:'#/criar ficha de atendimento', linkList:'#/lista de atendimentos',icon:'perm_identity', color:'blue'},
		{name:'Credênciais',linkAdd:'#/criar ficha de credencial', icon:'local_atm',path:'#/credencial',color:'green',},
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
		
	}
	

	
	angular.module("socialApp").controller('accaoSocialCtrl',accaoSocialCtrl);
	
})();
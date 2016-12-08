(function(){
	function atendimentoCtrl ($scope, pattern, $mdDialog , atendimentoService, $location){
		
		var self =this;



		var date = new Date();
		self.cmpn="Camâra Municipal do Porto Novo";
		$scope.social="Serviços de Desenvovimento e Integração Social";
		self.icon="perm_identity";
		self.title="Criar Ficha de Atendimento";
		
		self.color="blue";
		self.string =/^[a-z A-Z]{1,225}$/;
		self.number = /^[0-9]{1,225}$/;
		self.button="Guardar";




		self.atendimento = {};

		self.guardar = function(){
			return atendimentoService.guardar($scope.atendimento);

		}
		self.showPrerenderedDialog = function(ev) {
			$mdDialog.show({
				//controller: DialogController,
				contentElement: '#myDialog',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true
			});
		};
		self.cancel=function(){
			$mdDialog.hide();
		}



		$scope.FromDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);

		$scope.card=[
		{name:'Criar Ficha', linkAdd:'#/criar ficha de atendimento', icon:'library_add', path:'criar ficha de atendimento', color:'purple'},
		{name:'Lista de Fichas',linkAdd:'#/lista de atendimentos', icon:'playlist_add_check',path:'lista de atendimentos',color:'green'},
		{name:'Remover Ficha ',linkAdd:'',icon:'delete_forever',path:'',color:'yellow'},
		{name:'Atualizar Ficha',linkAdd:'',icon:'language',path:'',color:'red'},
		
		];
		$scope.link = function(ev){
			$location.path(ev)

		}


	}


	/*	controller lista de atendimentos*/

	function listarAtendimentoCtrl($scope,atendimentoService,DTOptionsBuilder, DTColumnDefBuilder,$compile,$http,$q){

		var self = this;
		self.color = 'blue';
		self.icon="list";
		self.title="Lista das Fichas de Atendimento";
		$scope.atendimento=[];


$scope.atendimento=atendimentoService.listar();//listar departamentos

self.dtOptions = DTOptionsBuilder.newOptions()

			/*from(function(){
				var defer = $q.defer();
				$http.get('http://kingoroot/atendimento').then(function(result) {
					defer.resolve(result.data);
				});
				return defer.promise;
			})*/


			//.withDOM('frtip')
			
			.withOption('responsive', true)
			.withPaginationType('full_numbers')
			.withBootstrap()
			.withButtons([
				'columnsToggle',
				'colvis',
				'copy',
				'print',
				'excel',
				'pdf',
				]);

			self.dtColumnsDefs = [
			DTColumnDefBuilder.newColumnDef(0),
			DTColumnDefBuilder.newColumnDef(1),
			DTColumnDefBuilder.newColumnDef(2).withClass('none'),
			DTColumnDefBuilder.newColumnDef(3).withClass('none'),
			];

			atendimentoService.listar().$promise.then(function(atendimento){
				self.dep=atendimento;

			});
		/*	self.dtColumns = [
			DTColumnBuilder.newColumn('id').withTitle('ID').withClass('text-red'),
			DTColumnBuilder.newColumn('name').withTitle('Name'),
			DTColumnBuilder.newColumn('assunto').withTitle('Assunto'),
			
			/*DTColumnBuilder.newColumn('morada').withTitle('Morada'),
			DTColumnBuilder.newColumn('idade').withTitle('Idade'),
			DTColumnBuilder.newColumn('sexo').withTitle('Sexo'),

			];*/
		}


		angular.module('socialApp').controller('atendimentoCtrl',atendimentoCtrl);
		angular.module("socialApp").controller('listarAtendimentoCtrl',listarAtendimentoCtrl);
	})();
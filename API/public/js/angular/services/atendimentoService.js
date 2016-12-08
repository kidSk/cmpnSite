angular.module('atendimento',[]).service('atendimentoService',function ($resource,$location) {
	
	
	var q = $resource('http://kingoroot/atendimento/:id',{id:"@id"},{update:{method:"PUT"}})

	return{
		listar:function(){
			return q.query();

		},
		guardar:function(a){
			q.save(a, function(response){
				Materialize.toast(response.mensagem, 3000)
				$location.path('/');
			});
		}
	}
});

angular.module('personService',[]).factory('personService',function ($resource) {
	
	
	var q = $resource('http://kingoroot/person/:id',{id:"@id"},{update:{method:"PUT"}})

	return{
		listar:function(){
			return q.query();

		},
		guardar:function(a, name){
			q.save(a, function(mensagem){
				Materialize.toast(mensagem,3000)
			});
		}
	}
});
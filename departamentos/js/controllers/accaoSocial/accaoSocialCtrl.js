/**
* depApp Module
*
* Description
*/
angular.module('depApp').controller('accaoSocialCtrl', ['$scope', function ($scope) {
	$scope.title="Integração Social ";
	$scope.Cards={
			//atendimento
			card:[{
				name:'Atendimento',
				img:'nature-3.jpg',
				actions:[
				{
					name:'Criar Ficha',
					icon:'add',
					link:'#/criarFicha'
				},
				{
					name:'Listar Fichas',
					icon:'add',
				},
				{
					name:'Exportar Ficha',
					icon:'add'
				},
				],
			},
//inqueritos
{
	name:'Inqueritos',
	img:'nature-1.jpg',
	actions:[
	{
		name:'Criar Ficha',
		icon:'add',
	},
	{
		name:'Listar Fichas',
		icon:'add',
	},
	{
		name:'Exportar Ficha',
		icon:'add'
	},
	],
},

//funeral
{
	name:'Subsidios de Funeral',
	img:'nature-2.jpg',
	actions:[
	{
		name:'Criar Ficha',
		icon:'add',
	},
	{
		name:'Listar Fichas',
		icon:'add',
	},
	{
		name:'Exportar Ficha',
		icon:'add'
	},
	],
},


],
};
}]);
(function(){
	'use strict'
	function inqueritoSocial(){

		return{
			templateUrl:'views/directives/accao_social/inquerito_social.html',
			link: function($scope,$element,$attrs){
				$scope.formName = "inqueritoSocialForm";
				$scope.agregados=[];


				$scope.addPerson = function(agregado) {
					$scope.agregados.push(angular.copy(agregado));
					delete $scope.agregado ;
					$scope.agregadoForm.$setPristine();
					



				}

				$scope.apagar = function(agregados){
					$scope.agregados = agregados.filter(function(agregado){
						if(!agregado.selecionado) return agregado;
					});


				}

			/*	$scope.isSelecionado = function (agregados){
					return agregados.some (function (agregado){
						return  agregado.selecionado;
					})
				}*/

			}
		}


	}
	angular.module('socialApp').directive('inqueritoSocial',inqueritoSocial);
})();

(function(){
  angular.module('cmpnApp').controller('criarContaCtrl', ['$scope', function($scope){
    var vm =this;
    $scope.step = 1;

    $scope.nextStep = function() {
      $scope.step++;
    }

    $scope.prevStep = function() {
      $scope.step--;
    }
    $scope.conta={};
    $scope.criarConta = function() {
     console.log($scope.conta);
   }

   vm.title="Crie a Sua Conta";
   $scope.string =/^[a-z A-Z]{1,225}$/;
   $scope.number = /^[0-9]{1,225}$/;

 }]);
})();
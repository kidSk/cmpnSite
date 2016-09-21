(function(){
    var app = angular.module('cmpnApp');
    app.controller('criarContaCtrl', ['$scope', function($scope){
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

 }]);
})();
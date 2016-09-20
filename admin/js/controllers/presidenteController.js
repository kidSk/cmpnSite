/**
* adminApp Module
*
* Description
*/
angular.module('adminApp')

/**
 * controller responsavel para criar mensagem do presidente
 */

 .controller('criarMensagemCtrl',function ($scope, fileReader,kidMultipartForm) {
 	$scope.title="Mensagem do Presidente";

 	$scope.button = "Guardar Mensagem";
 	$scope.msg={};

/**
 * [guardar description]
 * dispara o metodo responsavel por guardar a mensagem na BD
 */

 $scope.guardar = function(){
 	var uploadUrl='file.php';
 	kidMultipartForm.post(uploadUrl,$scope.msg);
 	console.log($scope.msg);
 }

/**
 * [description]
 *metodo responsavel por atribuir a class "col-md-8" ao painel que contem a <form name="msgForm"></form>
 *responsavel pela criaçao do conteudo da mensagem do presidente
 */

 $('input[type="file"],input[name="msg"]').click(function() {
 	$('#msg1').addClass('col-md-8');
 	$('msg').show();

 });

/**
 * [getFile description]
 * metodo responsavel por ler o ficheiro do input type="file"
 * @return
 * retorna um resultado true or false, que servira de base para mostrar ou ocultar
 * a view responsavel pelo preview da mensagem
 */

 $scope.getFile = function () {
 	$scope.progress = 0;
 	fileReader.readAsDataUrl($scope.file, $scope)
 	.then(function(result) {
 		$scope.imageSrc = result;
 	});
 };
 
/**
 * metodo que cria o barra de progresso do upload
 */

 $scope.$on("fileProgress", function(e, progress) {
 	$scope.progress = progress.loaded / progress.total;
 });
});
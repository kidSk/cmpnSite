<!DOCTYPE html>
<html ng-app="funcionarioApp">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Camara Municipal do Porto Novo</title>

	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<!--Materialize style shee-->
	<link type="text/css" rel="stylesheet" href="css/font-awesome-4.7.0/css/font-awesome.min.css"/>

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
<!-- 
	<link rel='stylesheet prefetch' href='http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'> -->
	<link type="text/css" rel="stylesheet" href="css/materialize/materialize.min.css" media="screen,projection"/>
	<!-- Angular Material style sheet -->
	<link rel="stylesheet prefetch" href="bower_components/angular-material/angular-material.min.css">

	<link rel="stylesheet prefetch" href="css/animations.css">
	<link rel="stylesheet prefetch" href="css/cmpnStyle.css">
	<link rel="stylesheet prefetch" href="css/adminStyle.css">
	<link rel="stylesheet prefetch" href="css/funcionarioStyle.css">

</head>

<body bg ng-cloak  ng-controller="funcionarioCtrl as funcionario">
	<div ng-view>

	</div>


	<script type="text/javascript" src="js/jQuery/jquery-2.2.3.min.js"></script>

	<!-- Angular.js Libraries-->
	<script src="bower_components/angular/angular.min.js"></script>
	<script src="bower_components/angular-material/angular-material.min.js"></script>
	<script src="bower_components/angular-animate/angular-animate.min.js"></script>
	<script src="bower_components/angular-aria/angular-aria.min.js"></script>
	<script src="bower_components/angular-messages/angular-messages.min.js"></script>
	<script src="bower_components/satellizer/dist/satellizer.min.js"></script>
	<script src="bower_components/ngstorage/ngStorage.min.js"></script>
	<script src="bower_components/ngRoute/angular-route.min.js"></script>
	<script src="bower_components/angular-material-icons/angular-material-icons.min.js"></script>
	<script src="bower_components/angular-resource/angular-resource.min.js"></script>

	<!--Modules -->
	<script src="js/angular/modules/funcionario.js"></script>
	<!--Directives-->
	<script src="js/angular/directives/cmpnMenu.js"></script>
	<script src="js/angular/directives/fabButton.js"></script>
	<script src="js/angular/directives/pushPin.js"></script>
	<script src="js/angular/directives/paginator.js"></script>
	<script src="js/angular/directives/leftMenu.js"></script>
	<script src="js/angular/directives/cmpnToolbar.js"></script>
	<script src="js/angular/directives/cmpnUser.js"></script>
	<!-- Services-->
	<script src="js/angular/services/authService.js"></script>
	<script src="js/angular/services/departamentoService.js"></script>
	<script src="js/angular/services/paginationsService.js"></script>
	<script src="js/angular/services/patternService.js"></script>
	<script src="js/angular/services/routeAccessService.js"></script>
	

	<!-- <script src="js/angular/services/departamentoService.js"></script> -->
	<!--Controllers-->
	<script src="js/angular/controllers/accaoSocialController.js"></script>
	<script src="js/angular/controllers/assembleiaController.js"></script>
	<script src="js/angular/controllers/atendimentoController.js"></script>
	<script src="js/angular/controllers/funcionarioController.js"></script>


	<!-- 	routes -->
	<script src="js/angular/routes/funcionarioRoute.js"></script> 
	<!--Config-->
	<script src="js/angular/config/theme.js"></script>
	<script src="js/angular/config/filter.js"></script>

	<!--Plugins-->

	<!--Materialize-->
	<script type="text/javascript" src="js/materialize/materialize.min.js"></script>

	<script>

		$( document ).ready(function(){
			$(".button-collapse").sideNav({
			 menuWidth: 340, // Default is 240
 edge: 'left', // Choose the horizontal origin
 closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
 draggable: true // Choose whether you can drag to open on touch screens
});

		});
	</script>

</body>
</html>

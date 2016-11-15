<!DOCTYPE html>
<html ng-app="cmpnApp">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Camara Municipal do Porto Novo</title>

	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<!--Materialize  style shee-->
	<link type="text/css" rel="stylesheet" href="css/font-awesome-4.7.0/css/font-awesome.min.css"/>


	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">

	<!-- <link rel='stylesheet prefetch' href='http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'> -->
	<link type="text/css" rel="stylesheet" href="css/materialize/materialize.min.css"  media="screen,projection"/>
	<!-- Angular Material style sheet -->
	<link rel="stylesheet prefetch" href="bower_components/angular-material/angular-material.min.css">

	<link rel="stylesheet prefetch" href="css/animations.css">
	<link rel="stylesheet prefetch" href="css/cmpnStyle.css">
	

</head>

<body ng-controller="cmpnCtrl as cmpn" ng-cloak>

	<div cmpn-menu></div> 
	<div ng-view>


	</div>
	<div ng-include="'views/footer/footer.html'"></div>

	<!--jQuery-->
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
	<script src="js/angular/modules/cmpn.js"></script>
	<!--Directives-->
	<script src="js/angular/directives/cmpnMenu.js"></script>
	<script src="js/angular/directives/cmpnSlider.js"></script>
	<!-- Services-->
	<script src="js/angular/services/authService.js"></script>
	<script src="js/angular/services/routeFilter.js"></script>

	<script src="js/angular/services/departamentoService.js"></script>
	<!--Controllers-->
	<script src="js/angular/controllers/cmpnCtrl.js"></script>
	<script src="js/angular/controllers/homeCtrl.js"></script>
	
	<script src="js/angular/controllers/departamentoCtrl.js"></script>
	<script src="js/angular/controllers/loginCtrl.js"></script>
	<script src="js/angular/controllers/criarContaController.js"></script>
	<script src="js/angular/controllers/perfilController.js"></script>
	<script src="js/angular/controllers/sobreCtrl.js"></script>
	<script src="js/angular/controllers/shareDialogCtrl.js"></script>
	<!--Rotas-->
	<script src="js/angular/routes/route.js"></script>
	<!--Config-->
	<script src="js/angular/config/theme.js"></script>
	<script src="js/angular/config/filter.js"></script>


	<!--Plugins-->

	<!--Materialize-->
	<script type="text/javascript" src="js/materialize/materialize.min.js"></script>




</body>
</html>

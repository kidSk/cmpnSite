<!DOCTYPE html>
<html ng-app="socialApp">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Camara Municipal do Porto Novo</title>
	<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.2.2/css/buttons.dataTables.min.css">
	

	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<!--Materialize style shee-->
	<link type="text/css" rel="stylesheet" href="css/font-awesome-4.7.0/css/font-awesome.min.css"/>

	<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"> -->
<!-- 
	<link rel='stylesheet prefetch' href='http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'> -->
	<link type="text/css" rel="stylesheet" href="css/materialize/materialize.min.css" media="screen,projection"/>
	<!-- Angular Material style sheet -->

	<link rel="stylesheet prefetch" href="bower_components/angular-datatables/dist/css/angular-datatables.min.css">
	<link rel="stylesheet prefetch"  href="bower_components/angular-datatables/dist/plugins/bootstrap/datatables.bootstrap.min.css">
	<link rel="stylesheet prefetch" href="bower_components/angular-material/angular-material.min.css">

	
	






	<link rel="stylesheet prefetch" href="css/cmpnStyle.css">
	<link rel="stylesheet prefetch" href="css/adminStyle.css">
	<link rel="stylesheet prefetch" href="css/funcionarioStyle.css">


	<link rel="stylesheet " href="css/animations.css">
	



</head>

<body bg ng-cloak  ng-controller="socialMainCtrl as main">
	<md-toolbar ng-hide="search" class="navbar-fixed" ng-class="color">

		<nav class="{{color}}">
			<div class="row md-whiteframe-z3" ng-class="color">
				<div class="nav-wrapper " ng-class="{logIN: main.isLogin}">
					<div class="brand-logo col s12 offset-s7 l6 offset-l3">
						<h5><md-icon>home</md-icon>{{main.title}}</h5><h6 class="loc" >{{main.activeTab()}}</h6>

					</div>	
					<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
					

				</div>

			</div>
		</nav>
		<!-- <a href="#!" ><img src="img/avatar.jpg" alt="userProfile" class="circle userProfile" ng-if="main.isLogin" hide-sm hide-xs></a> -->
	</md-toolbar>

	<md-toolbar ng-if="search" class="md-hue-1 md-whiteframe-z4 page-home " fixedMenu>
		<div class="md-toolbar-tools">
			<md-button id="procurar" class="md-icon-button" aria-label="Back" ng-click="clean()">
				<ng-md-icon icon="arrow_back" style="fill:black" ></ng-md-icon>
			</md-button>
			<!-- <h3 flex="10">
				Back
			</h3> -->
			<md-input-container flex >
				<label>&nbsp;</label>
				<input ng-model="procurar" placeholder="Procurar" name="proc" style="margin-top:23px">
			</md-input-container>
			<md-button aria-label="Search" ng-click="clean()" class="md-icon-button">
				<ng-md-icon icon="search" style="fill:black" ></ng-md-icon>
			</md-button>

		</div>

	</md-toolbar>

	<ul class="side-nav" id="mobile-demo" >

		<li><div class="userView " >
			<img class="background md-whiteframe-z2" src="img/nature-3.jpg">
			<a href="#!user"><img class="circle" src="img/man.svg" ng-hide="main.isLogin"></a>
			<a href="#!user"><img class="circle" src="img/man.svg" ng-show="main.isLogin"></a>
			<a href="#!name"><span class="white-text name">{{main.user.name}}</span></a>
			<a href="#!email"><span class="white-text email">{{main.user.email}}</span></a>
		</div>
	</li>
	<div class=" hide-on-large-only">
		<li ng-hide="!main.isLogin"><a class="subheader">Account Settings</a></li>
		<!-- <li><a class="subheader">Configurações de Conta</a></li> -->
		<li ng-hide="!main.isLogin"><a href="#/perfil"><i class="material-icons blue-text">settings</i>Definições</a></li>
		<!-- <li><a href="#!"><i class="material-icons green-text">inbox</i>Inbox</a></li> -->
		<li ng-hide="!main.isLogin"><a href="#!" ng-click="main.logout()"><i class="material-icons red-text" >power_settings_new</i>Sair</a></li>
	</div>
	<li><a class="subheader">Menu</a></li>
	<li ng-repeat="item in items" ><a class="waves-effect" href="{{item.link}}" ng-click="item.click()"><i class="material-icons">{{item.icon}}</i>{{item.name}}</a></li>

	<!-- fsdafas -->

</ul>

<!-- fixed Side nav -->
<ul class="side-nav fixed" style="width: 252px">

	<li><div class="userView " >
		<img class="background md-whiteframe-z2" src="img/nature-3.jpg">
		<a href="#!user"><img class="circle" src="img/cm.png" ng-hide="main.isLogin"></a>
		<a href="#!"  class="button-collapse" data-activates="slide-out"><img class="circle" src="img/man.svg" ng-show="main.isLogin"></a>
		<a href="#!name"  class="button-collapse" data-activates="slide-out"><span class="white-text name">{{main.user.name}}</span></a>
		<a href="#!email"  class="button-collapse" data-activates="slide-out"><span class="white-text email">{{main.user.email}}</span></a>
	</div>
</li>
<li><a class="subheader">Menu</a></li>

<li ng-repeat="item in items"><a class="waves-effect" href="{{item.link}}" ng-click="item.click()"><i class="material-icons {{item.color}}">{{item.icon}}</i>{{item.name}}</a></li>

<!-- fsdafas -->

</ul>
<!-- ------User Nav Bar ----- -->

<ul id="slide-out" class="side-nav">
	<li><div class="userView">
		<img class="background" src="img/nature-2.jpg">
		<a href="#!user"><img class="circle" src="img/man.svg"> </a>
		<a href="#!name"><span class="white-text name">{{main.user.name}} </span></a>
		<a href="#!email"><span class="white-text email">{{main.user.email}}</span></a>
	</div>
</li>
<li ><a class="subheader">Configurações de Conta</a></li>
<li ><a href="#/perfil"><i class="material-icons blue-text">settings</i>Definições</a></li>
<li ><a href="#!"><i class="material-icons green-text">inbox</i>Inbox</a></li>
<li ><a href="#!" ng-click="main.logout()"><i class="material-icons red-text" >power_settings_new</i>Sair</a></li>

<li><div class="divider"></div></li>
<li><a href="#!" ><i class="material-icons ">feedback</i>Enviar Sugestões</a></li>
<li><a href="#!"><i class="material-icons ">help</i>Ajuda</a></li>

</ul>



</div>
<div ng-view bg>

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
<script src="bower_components/datatables.net/js/jquery.dataTables.min.js"></script>
<script src="bower_components/angular-datatables/dist/angular-datatables.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.2.2/js/dataTables.buttons.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.2.2/js/buttons.colVis.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.2.2/js/buttons.flash.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.2.2/js/buttons.html5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.2.2/js/buttons.print.min.js"></script>
<script src="bower_components/angular-datatables/dist/plugins/buttons/angular-datatables.buttons.min.js"></script>
<script src="bower_components/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap.min.js"></script>
<script src="bower_components/angular-datatables/dist/plugins/columnfilter/angular-datatables.columnfilter.min.js"></script>
<script src="bower_components/angular-datatables/dist/plugins/responsive/dataTables.responsive.js"></script>
<!-- <script src="https://cdn.datatables.net/responsive/2.1.0/css/responsive.bootstrap.min.css"></script> -->
<!-- 	<script src="https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.js"></script> -->



<!--Modules -->
<script src="js/angular/modules/social.js"></script>
<!--Directives-->
<script src="js/angular/directives/cmpnMenu.js"></script>
<script src="js/angular/directives/fabButton.js"></script>
<script src="js/angular/directives/pushPin.js"></script>
<script src="js/angular/directives/paginator.js"></script>
<script src="js/angular/directives/leftMenu.js"></script>
<script src="js/angular/directives/cmpnToolbar.js"></script>
<script src="js/angular/directives/cmpnUser.js"></script>
<script src="js/angular/directives/dataDirective.js"></script>
<script src="js/angular/directives/accao_social/dados_pessoais.js"></script>
<script src="js/angular/directives/accao_social/inquerito.js"></script>
<script src="js/angular/directives/accao_social/situacao_habitacional.js"></script>
<script src="js/angular/directives/accao_social/tutor.js"></script>
<script src="js/angular/directives/accao_social/pensionista.js"></script>
<!-- Services-->
<script src="js/angular/services/authService.js"></script>
<script src="js/angular/services/departamentoService.js"></script>
<script src="js/angular/services/paginationsService.js"></script>
<script src="js/angular/services/patternService.js"></script>
<script src="js/angular/services/routeAccessService.js"></script>
<script src="js/angular/services/atendimentoService.js"></script>


<!-- <script src="js/angular/services/departamentoService.js"></script> -->
<!--Controllers-->
<script src="js/angular/controllers/accaoSocialController.js"></script>
<script src="js/angular/controllers/assembleiaController.js"></script>
<script src="js/angular/controllers/atendimentoController.js"></script>
<script src="js/angular/controllers/socialMainCtrl.js"></script>
<script src="js/angular/controllers/pensaoCtrl.js"></script>
<script src="js/angular/controllers/inqueritoCtrl.js"></script>
<script src="js/angular/controllers/provaDeVidaCtrl.js"></script>


<script src="js/angular/controllers/credencialController.js"></script>


<!-- 	routes -->
<script src="js/angular/routes/socialRoute.js"></script> 
<!--Config-->
<script src="js/angular/config/theme.js"></script>
<script src="js/angular/config/filter.js"></script>

<!--Plugins-->

<!--Materialize-->
<script type="text/javascript" src="js/materialize/materialize.min.js"></script>


<script>

	$( document ).ready(function(){
		$(".button-collapse").sideNav({
	menuWidth: 252, // Default is 240
	edge: 'left', // Choose the horizontal origin
	closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
	draggable: true // Choose whether you can drag to open on touch screens
});

	});
</script>

</body>
</html>

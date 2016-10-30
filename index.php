<!DOCTYPE html>
<html ng-app="adminApp">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>

	<link rel="stylesheet prefetch" href="admin/bower_components/angular-material/angular-material.min.css"> 
</head>
<style>
	html{
		background: #e9e9e9;
	}
	body {
		background: #e9e9e9;
		color: #666666;
		font-family: 'RobotoDraft', 'Roboto', sans-serif;
		font-size: 14px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}



	/* Container */
	.container {

		position: relative;
		max-width: 460px;
		width: 100%;
		margin: 0 auto 100px;
		margin-top: 30px;
	}
	

	/* Card */
	.card {
		position: relative;
		background: #ffffff;
		border-radius: 5px;
		padding: 60px 0 40px 0;
		box-sizing: border-box;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		-webkit-transition: .3s ease;
		transition: .3s ease;
		/* Title */
		/* Inputs */
		/* Button */
		/* Footer */
		/* Alt Card */
	}
	.card:first-child {
		background: #fafafa;
		height: 10px;
		border-radius: 5px 5px 0 0;
		margin: 0 10px;
		padding: 0;
	}
	.card .title {
		position: relative;
		z-index: 1;
		border-left: 5px solid rgb(3,169,244);
		margin: 0 0 35px;
		padding: 10px 0 10px 50px;
		color: rgb(3,169,244);
		font-size: 32px;
		font-weight: 600;
		text-transform: uppercase;
	}
	.card .input-container {
		position: relative;
		margin: 0 60px 50px;
	}
	.card .input-container input {
		outline: none;
		z-index: 1;
		position: relative;
		background: none;
		width: 100%;
		height: 60px;
		border: 0;
		color: #212121;
		font-size: 24px;
		font-weight: 400;
	}
	.card .input-container input:focus ~ label {
		color: #9d9d9d;
		-webkit-transform: translate(-12%, -50%) scale(0.75);
		transform: translate(-12%, -50%) scale(0.75);
	}
	.card .input-container input:focus ~ .bar:before, .card .input-container input:focus ~ .bar:after {
		width: 50%;
	}
	.card .input-container input:valid ~ label {
		color: #9d9d9d;
		-webkit-transform: translate(-12%, -50%) scale(0.75);
		transform: translate(-12%, -50%) scale(0.75);
	}
	.card .input-container label {
		position: absolute;
		top: 0;
		left: 0;
		color: #757575;
		font-size: 24px;
		font-weight: 300;
		line-height: 60px;
		-webkit-transition: 0.2s ease;
		transition: 0.2s ease;
	}
	.card .input-container .bar {
		position: absolute;
		left: 0;
		bottom: 0;
		background: #757575;
		width: 100%;
		height: 1px;
	}
	.card .input-container .bar:before, .card .input-container .bar:after {
		content: '';
		position: absolute;
		background: rgb(3,169,244);
		width: 0;
		height: 2px;
		-webkit-transition: .2s ease;
		transition: .2s ease;
	}
	.card .input-container .bar:before {
		left: 50%;
	}
	.card .input-container .bar:after {
		right: 50%;
	}
	.card .button-container {
		margin: 0 60px;
		text-align: center;
	}
	.card .button-container button {
		outline: 0;
		cursor: pointer;
		position: relative;
		display: inline-block;
		background: 0;
		width: 240px;
		border: 2px solid #e3e3e3;
		padding: 20px 0;
		font-size: 24px;
		font-weight: 600;
		line-height: 1;
		text-transform: uppercase;
		overflow: hidden;
		-webkit-transition: .3s ease;
		transition: .3s ease;
	}
	.card .button-container button span {
		position: relative;
		z-index: 1;
		color: #ddd;
		-webkit-transition: .3s ease;
		transition: .3s ease;
	}
	.card .button-container button:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		display: block;
		background: rgb(3,169,244);
		width: 30px;
		height: 30px;
		border-radius: 100%;
		margin: -15px 0 0 -15px;
		opacity: 0;
		-webkit-transition: .3s ease;
		transition: .3s ease;
	}
	.card .button-container button:hover, .card .button-container button:active, .card .button-container button:focus {
		border-color: rgb(3,169,244);
	}
	.card .button-container button:hover span, .card .button-container button:active span, .card .button-container button:focus span {
		color: rgb(3,169,244);
	}
	.card .button-container button:active span, .card .button-container button:focus span {
		color: #ffffff;
	}
	.card .button-container button:active:before, .card .button-container button:focus:before {
		opacity: 1;
		-webkit-transform: scale(10);
		transform: scale(10);
	}
	.card .footer {
		margin: 40px 0 0;
		color: #d3d3d3;
		font-size: 24px;
		font-weight: 300;
		text-align: center;
	}
	.card .footer a {
		color: inherit;
		text-decoration: none;
		-webkit-transition: .3s ease;
		transition: .3s ease;
	}
	.card .footer a:hover {
		color: #bababa;
	}
	

	/* Keyframes */
	@-webkit-keyframes buttonFadeInUp {
		0% {
			bottom: 30px;
			opacity: 0;
		}
	}
	@keyframes buttonFadeInUp {
		0% {
			bottom: 30px;
			opacity: 0;
		}
	}

</style>
<body>

	<div class="container" ng-controller="loginCtrl as login">
		<div class="card"></div>
		
		<div class="card">
			<h1 class="title">{{login.title}}</h1>
			<form>
				<div class="input-container">
					<input type="email" ng-model="login.loginForm.email"/>
					<label for="Username">Email</label>
					<div class="bar"></div>
				</div>
				<div class="input-container">
					<input type="password" ng-model="login.loginForm.password"/>
					<label for="Password">Password</label>
					<div class="bar"></div>
				</div>
				<div class="button-container">
					<button ng-click="login.login($event)"><span>Login</span></button>
				</div>
				<div class="footer"><a href="#">Esqueceu a sua Palavra Passe?</a></div>
			</form>
		</div>

	</div>
	<script src="admin/bower_components/angular/angular.min.js"></script>
	<script src="admin/bower_components/angular-material/angular-material.min.js"></script>
	<script src="admin/bower_components/angular-animate/angular-animate.min.js"></script>
	<script src="admin/bower_components/angular-aria/angular-aria.min.js"></script>
	<script src="admin/bower_components/angular-messages/angular-messages.min.js"></script>
	<script src="admin/bower_components/satellizer/dist/satellizer.min.js"></script>
	<script src="admin/bower_components/ngstorage/ngStorage.min.js"></script> 
	<script src="admin/js/ngToast.min.js"></script>
	<script src="admin/js/angular-sanitize.min.js"></script>
	<!-- <script src="js/angular-messages.min.js"></script> -->
	<script src="admin/js/modules/adminModule.js"></script>
	<script src="admin/js/modules/cmpnModule.js"></script>
	

	<script src="admin/js/modules/uploadPreviewModule.js"></script>
	<script src="admin/js/angular-route.min.js"></script>
	<script src="admin/js/angular-resource.min.js"></script>
	<script src="admin/js/routes/route.js"></script>
	<script src="admin/js/controllers/eventoController.js"></script>
	<script src="admin/js/controllers/adminCtrl.js"></script>
	<script src="admin/js/controllers/departamentoController.js"></script>
	<script src="admin/js/controllers/cargoController.js"></script>
	<script src="admin/js/controllers/presidenteController.js"></script>
	<script src="admin/js/controllers/loginController.js"></script>
	<script src="admin/js/services/eventoService.js"></script>
	<script src="admin/js/services/departamentoService.js"></script>
	<script src="admin/js/services/presidenteService.js"></script>
	<script src="admin/js/services/multipartForm.js"></script>
	<script src="admin/js/services/cargoService.js"></script>
	<script src="admin/js/services/paginations.js"></script>
	<script src="admin/js/services/authService.js"></script>
	<script src="admin/js/directives/paginator.js"></script>
	<script src="admin/js/directives/imgPreview.js"></script>
	<script src="admin/js/directives/uploader.js"></script>


</body>
</html>
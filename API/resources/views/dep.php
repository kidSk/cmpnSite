  <!DOCTYPE html>
  <html ng-app="depApp" >
  <head>
    <meta charset="utf-8">
    <!--Import Google Icon Font-->
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
    <link rel="stylesheet" href="css/depstyle.css">

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body style="background: #f5f5f5">

    <div ng-view>

    </div>

    <!--Import jQuery before materialize.js-->
    <script src="js/jquery-2.2.3.js"></script>
    <!--     <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script> -->


    <!-- angular Components -->
    <script src="bower_components/angular/angular.min.js"></script>
    <script src="bower_components/angular-material/angular-material.min.js"></script>
    <script src="bower_components/angular-animate/angular-animate.min.js"></script>
    <script src="bower_components/angular-aria/angular-aria.min.js"></script>
    <script src="bower_components/angular-messages/angular-messages.min.js"></script>
    <script src="bower_components/satellizer/dist/satellizer.min.js"></script>
    <script src="bower_components/ngstorage/ngStorage.min.js"></script> 
    <script src="js/angular-route.min.js"></script>



    <!-- modules -->
    <script src="js/modules/departamentosModule.js"></script>
    <script src="js/modules/adminModule.js"></script>
    <script src="js/modules/cmpnModule.js"></script>

    <!-- controllers -->
    <script src="js/controllers/depCtrl.js"></script>
    <script src="js/controllers/accaoSocial/accaoSocialCtrl.js"></script>
    <script src="js/controllers/accaoSocial/atendimentoCtrl.js"></script>

    <script src="js/routes/route.js"></script>
    <script type="text/javascript" src="js/materialize.min.js"></script>

</body>
</html>


<html lang="pt" >
<head>
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <link rel="stylesheet" type="text/css" id="theme" href="css/theme-black.css">
 <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
 <!-- <link rel="stylesheet" href="https://code.getmdl.io/1.2.0/material.indigo-pink.min.css"> -->
 <!-- Angular Material style sheet -->
 <!--  <link rel="stylesheet prefetch" href="bower_components/angular-material/angular-material.min.css"> -->
 <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">
 <link rel="stylesheet" href="css/ngToast.css">
 <link rel="stylesheet" href="css/ngToast-animations.css">
 <link rel="stylesheet" href="css/adminApp.css">
</head>
<body ng-app="adminApp" ng-controller="adminCtrl" ng-cloak >
 <toast></toast>
 <div class="page-container page-navigation-top-fixed">
   <!-- START PAGE SIDEBAR -->
   <div class="page-sidebar mCustomScrollbar _mCS_1 mCS-autoHide page-sidebar-fixed scroll">
     <!-- START X-NAVIGATION -->
     <ul class="x-navigation">
       <li class="xn-logo">
         <a href="index.html">Cmpn Admin</a>
         <a href="#" class="x-navigation-control"></a>
       </li>
       <li class="xn-profile">
         <a href="#" class="profile-mini">
           <img src="assets/images/users/avatar.jpg" alt="John Doe"/>
         </a>
         <div class="profile">
           <div class="profile-image">
             <img src="assets/images/users/avatar.jpg" alt="John Doe"/>
           </div>
           <div class="profile-data">
             <div class="profile-data-name">Kidiatoliny</div>
             <div class="profile-data-title">Web Developer/Designer</div>
           </div>
           <div class="profile-controls">
             <a href="pages-profile.html" class="profile-control-left"><span class="fa fa-info"></span></a>
             <a href="pages-messages.html" class="profile-control-right"><span class="fa fa-envelope"></span></a>
           </div>
         </div> 
       </li>
       <li class="xn-title">Painel Administrativo</li>
       <li class="active">
         <a href="admin#/"><span class="fa fa-desktop"></span> <span class="xn-text">Dashboard</span></a> 
       </li> 
       <li class="xn-openable" ng-repeat=" nav in navigations.pages.page">
         <a href="#"><span class="{{nav.icon}}"></span> <span class="xn-text" style="font-weight:bold" ng-click=>{{nav.name}}</span></a>
         <ul class="hd">
           <li class="xn-openable hd" ng-repeat="name in nav.dep">
             <a href="#" style="font-size:12px"><span class="{{name.icon}}"></span >{{name.name}}</a>
             <ul id="hd">
               <li class="sh" ng-repeat="dep in name.depIcon | orderBy:'name'" ><a href="{{dep.link}}"><span class="{{dep.icon}}"></span>{{dep.name}}</a></li>
             </ul>
           </li>
         </ul>
       </li>
     </ul>
     <!-- END X-NAVIGATION -->
   </div>
   <!-- END PAGE SIDEBAR -->
   <div class="page-content" >
     <!-- START X-NAVIGATION VERTICAL -->
     <ul class=" x-navigation x-navigation-horizontal x-navigation-panel">
       <!-- TOGGLE NAVIGATION -->
       <li class="xn-icon-button">
         <a href="#" class="x-navigation-minimize"><span class="fa fa-dedent"></span></a>
       </li>
       <!-- END TOGGLE NAVIGATION -->
       <!-- SEARCH -->
       <li class="xn-search">
         <form role="form">
           <input type="text" ng-model="procurar" name="search" placeholder="Procurar..."/>
         </form>
       </li> 
       <!-- END SEARCH -->
       <!-- SIGN OUT -->
       <li class="xn-icon-button pull-right">
         <a href="#" class="mb-control" data-box="#mb-signout"><span class="fa fa-sign-out"></span></a> 
       </li> 
       <!-- END SIGN OUT -->
       <!-- MESSAGES -->
       <li class="xn-icon-button pull-right">
         <a href="#"><span class="fa fa-comments"></span></a>
         <div class="informer informer-danger">4</div>
         <div class="panel panel-primary animated zoomIn xn-drop-left xn-panel-dragging">
           <div class="panel-heading">
             <h3 class="panel-title"><span class="fa fa-comments"></span> Messages</h3> 
             <div class="pull-right">
               <span class="label label-danger">4 new</span>
             </div>
           </div>
           <div class="panel-body list-group list-group-contacts scroll" style="height: 200px;">
             <a href="#" class="list-group-item">
               <div class="list-group-status status-online"></div>
               <img src="assets/images/users/user2.jpg" class="pull-left" alt="John Doe"/>
               <span class="contacts-title">John Doe</span>
               <p>Praesent placerat tellus id augue condimentum</p>
             </a>
             <a href="#" class="list-group-item">
               <div class="list-group-status status-away"></div>
               <img src="assets/images/users/user.jpg" class="pull-left" alt="Dmitry Ivaniuk"/>
               <span class="contacts-title">Dmitry Ivaniuk</span>
               <p>Donec risus sapien, sagittis et magna quis</p>
             </a>
             <a href="#" class="list-group-item">
               <div class="list-group-status status-away"></div>
               <img src="assets/images/users/user3.jpg" class="pull-left" alt="Nadia Ali"/>
               <span class="contacts-title">Nadia Ali</span>
               <p>Mauris vel eros ut nunc rhoncus cursus sed</p>
             </a>
             <a href="#" class="list-group-item">
               <div class="list-group-status status-offline"></div>
               <img src="assets/images/users/user6.jpg" class="pull-left" alt="Darth Vader"/>
               <span class="contacts-title">Darth Vader</span>
               <p>I want my money back!</p>
             </a>
           </div> 
           <div class="panel-footer text-center">
             <a href="pages-messages.html">Show all messages</a>
           </div> 
         </div> 
       </li>
       <!-- END MESSAGES -->
       <!-- TASKS -->
       <li class="xn-icon-button pull-right">
         <a href="#"><span class="fa fa-tasks"></span></a>
         <div class="informer informer-warning">3</div>
         <div class="panel panel-primary animated zoomIn xn-drop-left xn-panel-dragging">
           <div class="panel-heading">
             <h3 class="panel-title"><span class="fa fa-tasks"></span> Tasks</h3> 
             <div class="pull-right">
               <span class="label label-warning">3 active</span>
             </div>
           </div>
           <div class="panel-body list-group scroll" style="height: 200px;"> 
             <a class="list-group-item" href="#">
               <strong>Phasellus augue arcu, elementum</strong>
               <div class="progress progress-small progress-striped active">
                 <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;">50%</div>
               </div>
               <small class="text-muted">John Doe, 25 Sep 2014 / 50%</small>
             </a>
             <a class="list-group-item" href="#">
               <strong>Aenean ac cursus</strong>
               <div class="progress progress-small progress-striped active">
                 <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;">80%</div>
               </div>
               <small class="text-muted">Dmitry Ivaniuk, 24 Sep 2014 / 80%</small>
             </a>
             <a class="list-group-item" href="#">
               <strong>Lorem ipsum dolor</strong>
               <div class="progress progress-small progress-striped active">
                 <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 95%;">95%</div>
               </div>
               <small class="text-muted">John Doe, 23 Sep 2014 / 95%</small>
             </a>
             <a class="list-group-item" href="#">
               <strong>Cras suscipit ac quam at tincidunt.</strong>
               <div class="progress progress-small">
                 <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">100%</div>
               </div>
               <small class="text-muted">John Doe, 21 Sep 2014 /</small><small class="text-success"> Done</small>
             </a> 
           </div> 
           <div class="panel-footer text-center">
             <a href="pages-tasks.html">Show all tasks</a>
           </div> 
         </div> 
       </li>
       <!-- END TASKS -->
     </ul>
     <!-- END X-NAVIGATION VERTICAL -->
     <!-- START BREADCRUMB -->
     <ul class="breadcrumb">
       <li><a href="admin">Home</a></li> 
       <li class="active">Dashboard</li>
     </ul>
     <!-- END BREADCRUMB -->
     <!-- PAGE CONTENT WRAPPER -->
     <div class="page-content-wrap">
       <!-- START WIDGETS --> 
       <div class="row">
         <div class="col-md-3">
           <!-- START WIDGET SLIDER -->
           <div class="widget widget-default widget-carousel">
             <div class="owl-carousel" id="owl-example">
               <div> 
                 <div class="widget-title">Total Visitantes</div> 
                 <div class="widget-subtitle">27/08/2014 15:23</div>
                 <div class="widget-int">3,548</div>
               </div>
               <div> 
                 <div class="widget-title">Novos</div>
                 <div class="widget-subtitle">Visitantes</div>
                 <div class="widget-int">1,977</div>
               </div>
             </div> 
             <div class="widget-controls"> 
               <a href="#" class="widget-control-right widget-remove" data-toggle="tooltip" data-placement="top" title="Remove Widget"><span class="fa fa-times"></span></a>
             </div> 
           </div> 
           <!-- END WIDGET SLIDER -->
         </div>
         <div class="col-md-3">
           <!-- START WIDGET MESSAGES -->
           <div class="widget widget-default widget-item-icon" onclick="location.href='pages-messages.html';">
             <div class="widget-item-left">
               <span class="fa fa-envelope"></span>
             </div> 
             <div class="widget-data">
               <div class="widget-int num-count">48</div>
               <div class="widget-title">Mensagens Novas</div>
               <div class="widget-subtitle">No seu mailbox</div>
             </div> 
             <div class="widget-controls"> 
               <a href="#" class="widget-control-right widget-remove" data-toggle="tooltip" data-placement="top" title="Remove Widget"><span class="fa fa-times"></span></a>
             </div>
           </div> 
           <!-- END WIDGET MESSAGES -->
         </div>
         <div class="col-md-3">
           <!-- START WIDGET REGISTRED -->
           <div class="widget widget-default widget-item-icon" onclick="location.href='pages-address-book.html';">
             <div class="widget-item-left">
               <span class="fa fa-user"></span>
             </div>
             <div class="widget-data">
               <div class="widget-int num-count">375</div>
               <div class="widget-title">Utilizadores registados</div>
               <div class="widget-subtitle">No Site</div>
             </div>
             <div class="widget-controls"> 
               <a href="#" class="widget-control-right widget-remove" data-toggle="tooltip" data-placement="top" title="Remove Widget"><span class="fa fa-times"></span></a>
             </div> 
           </div> 
           <!-- END WIDGET REGISTRED -->
         </div>
         <div class="col-md-3">
           <!-- START WIDGET CLOCK -->
           <div class="widget widget-info widget-padding-sm">
             <div class="widget-big-int plugin-clock">00:00</div> 
             <div class="widget-subtitle plugin-date">carregando...</div>
             <div class="widget-controls"> 
               <a href="#" class="widget-control-right widget-remove" data-toggle="tooltip" data-placement="left" title="Remove Widget"><span class="fa fa-times"></span></a>
             </div> 
             <div class="widget-buttons widget-c3">
               <div class="col">
                 <a href="#"><span class="fa fa-clock-o"></span></a>
               </div>
               <div class="col">
                 <a href="#"><span class="fa fa-bell"></span></a>
               </div>
               <div class="col">
                 <a href="#"><span class="fa fa-calendar"></span></a>
               </div>
             </div> 
           </div> 
           <!-- END WIDGET CLOCK -->
         </div>
       </div>
       <div ng-view>
       </div>
 <!-- <div ng-include="'views/wid.php'">
</div> -->
</div> 
<!-- END PAGE CONTENT -->
</div>
<!-- END PAGE CONTAINER -->
<!-- MESSAGE BOX-->
<div class="message-box animated fadeIn" data-sound="alert" id="mb-signout">
 <div class="mb-container">
   <div class="mb-middle">
     <div class="mb-title"><span class="fa fa-sign-out"></span> Log <strong>Out</strong> ?</div>
     <div class="mb-content">
       <p>Are you sure you want to log out?</p> 
       <p>Press No if youwant to continue work. Press Yes to logout current user.</p>
     </div>
     <div class="mb-footer">
       <div class="pull-right">
         <a href="pages-login.html" class="btn btn-success btn-lg">Yes</a>
         <button class="btn btn-default btn-lg mb-control-close">No</button>
       </div>
     </div>
   </div>
 </div>
</div>
<!-- END MESSAGE BOX-->
<!-- START PRELOADS -->
<audio id="audio-alert" src="audio/alert.mp3" preload="auto"></audio>
<audio id="audio-fail" src="audio/fail.mp3" preload="auto"></audio>
<!-- END PRELOADS -->
<!-- START SCRIPTS -->
<!-- START PLUGINS -->
<script type="text/javascript" src="js/jquery-2.2.3.min.js"></script>
<!-- Bootstrap tooltips -->
<script type="text/javascript" src="js/tether.min.js"></script>
<!-- Bootstrap core JavaScript -->
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<!-- MDB core JavaScript -->
<script type="text/javascript" src="js/mdb.min.js"></script>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.6/angular.min.js"></script>
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/angular-material/angular-material.min.js"></script>
<script src="bower_components/angular-animate/angular-animate.min.js"></script>
<script src="bower_components/angular-aria/angular-aria.min.js"></script>
<script src="bower_components/angular-messages/angular-messages.min.js"></script> -->
<!-- Angular Material requires Angular.js Libraries -->
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js"></script>

<!-- Angular Material Library -->
<script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>
<script src="js/ngToast.min.js"></script>
<script src="js/angular-sanitize.min.js"></script>
<!-- <script src="js/angular-messages.min.js"></script> -->
<script src="js/modules/adminModule.js"></script>
<script src="js/modules/cmpnModule.js"></script>
<script src="js/modules/uploadPreviewModule.js"></script>
<script src="js/angular-route.min.js"></script>
<script src="js/angular-resource.min.js"></script>
<script src="js/routes/route.js"></script>
<script src="js/controllers/eventoController.js"></script>
<script src="js/controllers/adminCtrl.js"></script>
<script src="js/controllers/departamentoController.js"></script>
<script src="js/controllers/cargoController.js"></script>
<script src="js/controllers/presidenteController.js"></script>
<script src="js/services/eventoService.js"></script>
<script src="js/services/departamentoService.js"></script>
<script src="js/services/presidenteService.js"></script>
<script src="js/services/cargoService.js"></script>
<script src="js/services/paginations.js"></script>
<script src="js/directives/paginator.js"></script>
<script src="js/directives/imgPreview.js"></script>
<script src="js/directives/uploader.js"></script>
<script defer src="https://code.getmdl.io/1.2.0/material.min.js"></script>
<script type="text/javascript" src="js/plugins/jquery/jquery.min.js"></script>
<script type="text/javascript" src="js/plugins/jquery/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/plugins/bootstrap/bootstrap.min.js"></script>
<!-- Angular Material requires Angular.js Libraries -->
<!-- START THIS PAGE PLUGINS--> 
<script type='text/javascript' src='js/plugins/icheck/icheck.min.js'></script> 
<script type="text/javascript" src="js/plugins/mcustomscrollbar/jquery.mCustomScrollbar.min.js"></script>
<script type="text/javascript" src="js/plugins/scrolltotop/scrolltopcontrol.js"></script>
<script type="text/javascript" src="js/plugins/morris/raphael-min.js"></script>
<script type="text/javascript" src="js/plugins/morris/morris.min.js"></script> 
<script type="text/javascript" src="js/plugins/rickshaw/d3.v3.js"></script>
<script type="text/javascript" src="js/plugins/rickshaw/rickshaw.min.js"></script>
<script type='text/javascript' src='js/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js'></script>
<script type='text/javascript' src='js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js'></script> 
<script type='text/javascript' src='js/plugins/bootstrap/bootstrap-datepicker.js'></script> 
<script type="text/javascript" src="js/plugins/owl/owl.carousel.min.js"></script>
<script type="text/javascript" src="js/plugins/moment.min.js"></script>
<script type="text/javascript" src="js/plugins/daterangepicker/daterangepicker.js"></script>
<script type="text/javascript" src="js/plugins/datatables/jquery.dataTables.min.js"></script>
<!-- END THIS PAGE PLUGINS-->
<!-- START TEMPLATE -->
<!-- <script type="text/javascript" src="js/settings.js"></script> -->
<script type="text/javascript" src="js/plugins.js"></script> 
<script type="text/javascript" src="js/actions.js"></script>
<script type="text/javascript" src="js/demo_dashboard.js"></script>
<!-- Angular Material Library -->
<script src="https://use.fontawesome.com/d3438eb228.js"></script>
<script type="text/javascript">
 $(document).ready(function() { 
   $('.sh').on("click",function() {
     $('.x-navigation.x-navigation-minimized li.active > ul').css('display', 'none');
   });
 });
</script>
</body>
</html>
<!DOCTYPE html>
<html ng-app="cmpnApp">

<head>

    <meta charset="utf-8">
   <!--  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <meta http-equiv="x-ua-compatible" content="ie=edge"> -->

   <title>cmpn</title>

   <!-- Font Awesome -->
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">

   <!-- Bootstrap core CSS -->
   <link href="css/bootstrap.min.css" rel="stylesheet">

   <!-- Material Design Bootstrap -->
   <link href="css/mdb.min.css" rel="stylesheet">

   <!-- Template styles -->
   <link href="css/style.css" rel="stylesheet">

</head>

<body ng-controller="homeCtrl">


    <!--Navbar-->
    <nav class="navbar navbar-dark navbar-fixed-top scrolling-navbar">

        <!-- Collapse button-->
        <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapseEx">
            <i class="fa fa-bars"></i>
        </button>

        <ul class="nav navbar-nav pull-right">

            <li class="nav-item "><a href="http://mdbootstrap.com/forums/forum/support/" class="nav-link waves-effect waves-light"><i class="fa fa-comments-o"></i><span class="hidden-sm-down">Support</span></a></li>
            <li class="nav-item "><a href="#" id="show_login" class="nav-link waves-effect waves-light"><i class="fa fa-sign-in"></i><span class="hidden-sm-down">LogIn</span></a></li>
        </ul>



        <!--Collapse content-->
        <div class="collapse navbar-toggleable-xs" id="collapseEx">
            <!--Navbar Brand-->
            <a class="navbar-brand" href="#" target="_blank">{{title}}</a>
            <!--Links-->
            <ul class="nav navbar-nav menu">
                <li class="nav-item active">
                    <a class="nav-link" href="#"><i class="fa fa-home"></i>Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-info-circle"></i>Sobre</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-bank"></i>Departamentos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-suitcase"></i>Projetos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-list-alt"></i>Serviços</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-camera"></i>Galeria</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-envelope-o"></i>Contatos</a>
                </li>
            </ul>
            <!--Search form-->
            <form class="form-inline">
                <i class="fa fa-search se"></i><input class="form-control" type="text" placeholder="Search" id="search">
            </form>
        </div>
        <!--/.Collapse content-->



    </nav>
    <!--/.Navbar-->

    <!--Carousel Wrapper-->
    <div id="carousel-example-1" class="carousel slide carousel-fade" data-ride="carousel">
        <!--Indicators-->
        <ol class="carousel-indicators">
            <li data-target="#carousel-example-1" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-1" data-slide-to="1"></li>
            <li data-target="#carousel-example-1" data-slide-to="2"></li>
        </ol>
        <!--/.Indicators-->

        <!--Slides-->
        <div class="carousel-inner" role="listbox">

            <!--First slide-->
            <div class="carousel-item active">
                <!--Caption-->
                <div class="flex-center animated fadeInDown">
                    <ul>
                        <li>
                            <h1 class="h1-responsive">Material Design for Bootstrap 4</h1></li>
                            <li>
                                <p>The most powerful and free UI KIT for the newest Bootstrap</p>
                            </li>
                            <li>
                                <a target="_blank" href="http://mdbootstrap.com/getting-started/" class="btn btn-primary btn-lg">Sign up!</a>
                                <a target="_blank" href="http://mdbootstrap.com/material-design-for-bootstrap/" class="btn btn-default btn-lg">Learn more</a>
                            </li>
                        </ul>
                    </div>
                    <!--Caption-->
                </div>
                <!--/.First slide-->

                <!--Second slide -->
                <div class="carousel-item">
                    <!--Caption-->
                    <div class="flex-center animated fadeInDown">
                        <ul>
                            <li>
                                <h1 class="h1-responsive">Lots of tutorials at your disposal</h1>
                            </li>
                            <li>
                                <p>And all of them are FREE!</p>
                            </li>
                            <li>
                                <a target="_blank" href="http://mdbootstrap.com/bootstrap-tutorial/" class="btn btn-primary btn-lg">Start learning</a>
                            </li>
                        </ul>
                    </div>
                    <!--Caption-->
                </div>
                <!--/.Second slide -->

                <!--Third slide-->
                <div class="carousel-item">
                    <!--Caption-->
                    <div class="flex-center animated fadeInDown">
                        <ul>
                            <li>
                                <h1 class="h1-responsive">Visit our support forum</h1></li>
                                <li>
                                    <p>Our community can help you with any question</p>
                                </li>
                                <li>
                                    <a target="_blank" href="http://mdbootstrap.com/forums/forum/support/" class="btn btn-default btn-lg">Support forum</a>
                                </li>
                            </ul>
                        </div>
                        <!--Caption-->
                    </div>
                    <!--/.Third slide-->
                </div>
                <!--/.Slides-->

                <!--Controls-->
                <a class="left carousel-control" href="#carousel-example-1" role="button" data-slide="prev">
                    <span class="icon-prev" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#carousel-example-1" role="button" data-slide="next">
                    <span class="icon-next" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                <!--/.Controls-->
            </div>
            <!--/.Carousel Wrapper-->

            <br>

            <!--Content-->
            <div class="container">
                <div class="row">
                    <!--First columnn-->
                    <div class="col-md-4">
                        <!--Card-->
                        <div class="card">

                            <!--Card image-->
                            <div class="view overlay hm-white-slight">
                                <img src="http://mdbootstrap.com/images/regular/city/img%20(2).jpg" class="img-fluid" alt="">
                                <a href="#">
                                    <div class="mask"></div>
                                </a>
                            </div>
                            <!--/.Card image-->

                            <!--Card content-->
                            <div class="card-block">
                                <!--Title-->
                                <h4 class="card-title">Card title</h4>
                                <!--Text-->
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Read more</a>
                            </div>
                            <!--/.Card content-->

                        </div>
                        <!--/.Card-->
                    </div>
                    <!--First columnn-->

                    <!--Second columnn-->
                    <div class="col-md-4">
                        <!--Card-->
                        <div class="card">

                            <!--Card image-->
                            <div class="view overlay hm-white-slight">
                                <img src="http://mdbootstrap.com/images/regular/city/img%20(4).jpg" class="img-fluid" alt="">
                                <a href="#">
                                    <div class="mask"></div>
                                </a>
                            </div>
                            <!--/.Card image-->

                            <!--Card content-->
                            <div class="card-block">
                                <!--Title-->
                                <h4 class="card-title">Card title</h4>
                                <!--Text-->
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Read more</a>
                            </div>
                            <!--/.Card content-->

                        </div>
                        <!--/.Card-->
                    </div>
                    <!--Second columnn-->

                    <!--Third columnn-->
                    <div class="col-md-4">
                        <!--Card-->
                        <div class="card">

                            <!--Card image-->
                            <div class="view overlay hm-white-slight">
                                <img src="http://mdbootstrap.com/images/regular/city/img%20(8).jpg" class="img-fluid" alt="">
                                <a href="#">
                                    <div class="mask"></div>
                                </a>
                            </div>
                            <!--/.Card image-->

                            <!--Card content-->
                            <div class="card-block">
                                <!--Title-->
                                <h4 class="card-title">Card title</h4>
                                <!--Text-->
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Read more</a>
                            </div>
                            <!--/.Card content-->

                        </div>
                        <!--/.Card-->
                    </div>
                    <!--Third columnn-->
                </div>

            </div>
            <!--/.Content-->



            <!--Footer-->
            <footer class="page-footer center-on-small-only">

                <!--Footer Links-->
                <div class="container-fluid">
                    <div class="row">

                        <!--First column-->
                        <div class="col-md-3 col-md-offset-1">
                            <h5 class="title">ABOUT MATERIAL DESIGN</h5>
                            <p>Material Design (codenamed Quantum Paper) is a design language developed by Google. </p>

                            <p>Material Design for Bootstrap (MDB) is a powerful Material Design UI KIT for most popular HTML, CSS, and JS framework - Bootstrap.</p>
                        </div>
                        <!--/.First column-->

                        <hr class="hidden-md-up">

                        <!--Second column-->
                        <div class="col-md-2 col-md-offset-1">
                            <h5 class="title">First column</h5>
                            <ul>
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </div>
                        <!--/.Second column-->

                        <hr class="hidden-md-up">

                        <!--Third column-->
                        <div class="col-md-2">
                            <h5 class="title">Second column</h5>
                            <ul>
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </div>
                        <!--/.Third column-->

                        <hr class="hidden-md-up">

                        <!--Fourth column-->
                        <div class="col-md-2">
                            <h5 class="title">Third column</h5>
                            <ul>
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </div>
                        <!--/.Fourth column-->

                    </div>
                </div>
                <!--/.Footer Links-->

                <hr>

                <!--Call to action-->
                <div class="call-to-action">
                    <h4>Material Design for Bootstrap</h4>
                    <ul>
                        <li>
                            <h5>Get our UI KIT for free</h5></li>
                            <li><a target="_blank" href="http://mdbootstrap.com/getting-started/" class="btn btn-danger">Sign up!</a></li>
                            <li><a target="_blank" href="http://mdbootstrap.com/material-design-for-bootstrap/" class="btn btn-default">Learn more</a></li>
                        </ul>
                    </div>
                    <!--/.Call to action-->

                    <!--Copyright-->
                    <div class="footer-copyright">
                        <div class="container-fluid">
                            © 2016 Copyright: <a href="http://www.facebook.com"> kidSk </a>

                        </div>
                    </div>
                    <!--/.Copyright-->

                </footer>
                <!--/.Footer-->


                <!-- SCRIPTS -->

                <!-- JQuery -->
                <script type="text/javascript" src="js/jquery-2.2.3.min.js"></script>

                <!-- Bootstrap tooltips -->
                <script type="text/javascript" src="js/tether.min.js"></script>

                <!-- Bootstrap core JavaScript -->
                <script type="text/javascript" src="js/bootstrap.min.js"></script>

                <!-- MDB core JavaScript -->
                <script type="text/javascript" src="js/mdb.min.js"></script>

                <!-- AngularJs core JavaScript -->

                <script src="js/angular.min.js"></script>
                <script src="js/angular-route.min.js"></script>
                <srcipt src="js/angular-messages.min.js"></srcipt>
                <script src="js/angular-resource.min.js"></script>
                <script src="js/modules/cmpnModule.js"></script>
                <script src="js/controllers/homeCtrl.js"></script>


            </body>

            </html>
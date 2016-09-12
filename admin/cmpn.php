<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Camara Municipal do Porto Novo</title>
        <link rel='stylesheet prefetch' href='https://fonts.googleapis.com/icon?family=Material+Icons'>
        <link rel="stylesheet prefetch" href="bower_components/angular-material/angular-material.min.css">
        <link href="css/jquery.bxslider.css" rel="stylesheet" />
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="css/style.css">
<!-- Start WOWSlider.com HEAD section -->
<link rel="stylesheet" type="text/css" href="css/styleSlider.css" />
<!-- <script type="text/javascript" src="engine1/jquery.js"></script> -->
<!-- End WOWSlider.com HEAD section -->
    </head>

   
    
    <body ng-app="cmpnApp" ng-controller="cmpnCtrl" ng-cloak>
        
        
        <div class="md-tall md-primary md-hue-1" hide hide-xs show-gt-md id="tall">
            <div layout="row" layout-align="center center" id="mainPic">
            <!-- Start WOWSlider.com BODY section -->
<div id="wowslider-container1">
<div class="ws_images"><ul>
        <li><img src="img/slider/images/1.jpg" alt="Camara Municipal" title="Camara Municipal" id="wows1_0"/></li>
        <li><img src="img/slider/images/2.jpg" alt="DSC03449" title="DSC03449" id="wows1_1"/></li>
        <li><img src="img/slider/images/3.jpg" alt="DSC03450" title="DSC03450" id="wows1_2"/></li>
        <li><a href="http://wowslider.com"><img src="img/slider/images/4.jpg" alt="wowslideshow" title="DSC03446" id="wows1_3"/></a></li>
        <li><img src="img/slider/images/5.jpg" alt="DSC03447" title="DSC03447" id="wows1_4"/></li>
    </ul></div>
    <div class="ws_bullets"><div>
        <a href="#" title="Camara Municipal"><span><img src="img/slider/tooltips/1.jpg" alt="Camara Municipal"/>1</span></a>
        <a href="#" title="DSC03449"><span><img src="img/slider/tooltips/2.jpg" alt="DSC03449"/>2</span></a>
        <a href="#" title="DSC03450"><span><img src="img/slider/tooltips/3.jpg" alt="DSC03450"/>3</span></a>
        <a href="#" title="DSC03446"><span><img src="img/slider/tooltips/4.jpg" alt="DSC03446"/>4</span></a>
        <a href="#" title="DSC03447"><span><img src="img/slider/tooltips/5.jpg" alt="DSC03447"/>5</span></a>
    </div></div>
</div>  

<!-- End WOWSlider.com BODY section -->

            </div>
           
        </div>
       <div>
          <md-cmpn-nav-bar>
           

       </md-cmpn-nav-bar
       </div>
<md-content class="md-padding" layout="row" layout-wrap layout-align="center start" layout-xs="column"  style="background-color:#ebebe0">
            <div flex-gt-md="30" flex-sm="100" flex-xs="100" flex-lg="100" flex-gt-sm="100" layout="column">
                <md-card class="md-whiteframe-z2">
                <md-card-title layout-padding layout-margin>
                <md-card-title-text><span class="md-headline"><strong>Mensagem da Presidente</strong></span><br>
                
                </md-card-title-text>
                </md-card-title>
                <md-card-actions layout layout-align="start center" layout-padding style="z-index:1">
                <div ng-repeat="president in president">
                    <md-button class=" md-fab md-mini md-primary ">
                    <md-icon>{{president.icon}}</md-icon>
                    <md-tooltip md-delay="0.4" md-direction="bottom" md-autohide="true">{{president.name}}</md-tooltip>
                    </md-button>
                </div>
                </md-card-actions>
                </md-card>
                <md-card class="card">
                
                <md-card-actions layout layout-align="start center" layout-padding style="z-index:1" >
                <md-list layout-padding>
                <md-list-item class="md-6-line">
                <img ng-src="img/rosa.jpg" class="avatar md-whiteframe-z1" alt="Presidente" layout-margin>
                <div class="md-list-item-text">
                    <h5><a href="#/" class="md-link">{{cmpn.president}} <h6></a>Presidente da {{cmpn.title}}</h6></h5>
                    
                    
                </div>
                </md-list-item>
                </md-list>
                </md-card-actions>
                
                <md-card-content>
                <p style=" text-align: justify;">
                    No domínio do Planeamento e ordenamento do Território, a Câmara Municipal de Porto Novo conseguiu importantes desenvolvimentos para o município. Conseguimos aprovar o Plano de Desenvolvimento Municipal e cinco Planos Urbanísticos detalhados para os Bairros da Cidade. Ribeira das Patas foi elevada à categoria de Vila e iniciou-se o processo de planificação. Foram elaborados projectos de pormenor da Avenida Marginal. Foi criada uma Unidade de Topografia e Cartografia na Câmara, dotada de equipamentos modernos.
                    Tudo projectos e iniciativas para que Porto Novo seja cada vez mais moderno! Continuaremos a servir as nossas gentes e as suas necessidades.
                </p>
                </md-card-content>
                </md-card>
            </div>
            
            <div flex-gt-md="40" flex-sm="100" flex-xs="100" flex-lg="100" flex-gt-sm="100" layout="column">
                <md-card class="md-whiteframe-z2">

                <md-card-title layout-padding layout-margin>
                <md-card-title-text layout-padding><span class="md-headline"><strong>Principais Noticias</strong></span>
                <span class="md-subhead"></span></md-card-title-text>
                </md-card-title>
                <md-card-actions layout layout-align="start center" layout-padding style="z-index:1">
                <div ng-repeat="notice in noticias">
                    <md-button class=" md-fab md-mini md-primary">
                    <md-icon>{{notice.icon}}</md-icon>
                    <md-tooltip md-delay="0.4" md-direction="bottom" md-autohide="true">{{notice.name}}</md-tooltip>
                    </md-button>
                </div>
                </md-card-actions>
                </md-card>
               

                <div ng-repeat=" notice in noticiasCnt">
                    
                     <md-card>
                <md-card-title layout-padding layout-margin>
                <md-card-title-text layout-padding><span class="md-headline"></span>
                <span class="md-subhead"><strong>{{notice.title}}</strong></span></md-card-title-text>
                </md-card-title>
                <md-content layout-padding layout-wrap>
                <img src="{{notice.img}}" alt="" class="md-whiteframe-z1">
                <p>
                    {{notice.conteudo}}
                </p>
                </md-content>
                <md-divider class="md-whiteframe-z2"></md-divider>
                <md-card-actions layout="row" layout-align="center center">

       <div  ng-repeat="not in noticiasButton">
           <md-button class="md-button {{not.class}}" aria-label="{{not.name}}" hide-sm hide-gt-xs hide-xs>
            <md-icon class="material-icons {{not.class}}">{{not.icon}}</md-icon>
             <md-tooltip md-visible="false" md-delay="200" md-direction="bottom" md-autohide="true">
               {{not.name}}
              </md-tooltip>
                {{not.name}}
          </md-button> <md-button class="md-icon-button {{not.class}}" aria-label="{{not.name}}" hide show-sm>
            <md-icon class="material-icons {{not.class}}">{{not.icon}}</md-icon>
             <md-tooltip md-visible="false" md-delay="200" md-direction="bottom" md-autohide="true">
               {{not.name}}
              </md-tooltip>
              
          </md-button>
       </div>
        </md-card-actions>
                
                </md-card>
                <div ng-repeat="not in secNot">
                    
                      <md-card class="card">
                
                <md-card-actions layout layout-align="start center" layout-padding style="z-index:1" >
                <md-list layout-padding>
                <md-list-item class="md-6-line">
                <img ng-src="{{not.img}}" class=" md-whiteframe-z3" alt="{{not.title}}" style="height:80%; width:50%">
                <div class="md-list-item-text" layout-margin>
                    <h4>{{not.title}}</h4>
                       <div layout-align="end end" layout-margin layout-padding>
                           <md-button class=" md-button md-raised md-primary" href="#" aria-label="ver"  md-ripple-size="full" layo>
                    <md-icon class="material-icons">sort</md-icon>
                     <md-tooltip md-delay="0.4" md-direction="bottom" md-autohide="true">Ler Noticia</md-tooltip>Ler Noticia
                    </md-button>
                    
                       </div>
                </div>
                </md-list-item>
                </md-list>
                </md-card-actions>
                 <md-card-actions  layout="row" layout-align="end center">
                 

                </md-card-actions>
                </md-card>
                </md-card>
                </div>
                </div>

            </div>
            <div flex-gt-md="30" flex-sm="100" flex-xs="100" flex-lg="100" flex-gt-sm="100" layout="column">
                <md-card>
                <md-card-title layout-padding layout-margin>
                <md-card-title-text layout-padding><span class="md-headline"><strong>Eventos & Atividades</strong></span>
                <span class="md-subhead"></span></md-card-title-text>
                </md-card-title>
                <md-card-actions layout layout-align="start center" layout-padding style="z-index:1">

                <div ng-repeat="event in eventos">

                    <md-button class=" md-fab md-mini md-primary">
                    <md-icon>{{event.icon}}</md-icon>
                    <md-tooltip md-delay="0.4" md-direction="bottom" md-autohide="true">{{event.name}}</md-tooltip>
                    </md-button>
                </div>
                </md-card-actions>
</md-card>
               
                
             <div ng-repeat="evnt in evCnt">
                   <md-card  class="md-whiteframe-z4">
        <md-card-title layout-padding layout-margin>
          <md-card-title-text>
            <span class="md-headline">{{evnt.title}}</span>
            <span class="md-subhead">{{evnt.local}}</span>
          <!--   <md-menu md-offset="0 -5" md-position-mode="target-right target">
                <md-button class="md-icon-button" aria-label="menu" ng-click="openShare($mdOpenMenu, $event)"><md-icon>more_vert</md-icon></md-button>
                <md-menu-content width="4">
                   <md-menu-item>
                        <md-button><md-icon md-menu-origin class="red">favorite</md-icon>Adicionar aos favoritos</md-button>

                   </md-menu-item>
                        <md-menu-divider></md-menu-divider>
                         <md-menu-item>
                        <md-button><md-icon>info</md-icon>Continuar a ler</md-button>

                   </md-menu-item>
                     <md-menu-divider></md-menu-divider>
                    <md-menu-item>
                        <md-button><md-icon md-menu-align-target class="md-primary">share_arrow</md-icon>Compartilhar</md-button>

                   </md-menu-item>
                </md-menu-content>
            </md-menu> -->
          </md-card-title-text>
        </md-card-title>
        <md-card-content layout="row" layout-align="space-between">
          <div class="md-media-xl card-media">
              <img src="{{evnt.img}}" style="width:100%;height:100%;">
          </div>

          <md-card-actions layout="column">
           <div ng-repeat="ev in eventButton">
               
                <md-button class="md-icon-button" aria-label="{{ev.name}}">
              <md-icon class="material-icons {{ev.class}}">{{ev.icon}}</md-icon>
              <md-tooltip md-visible="false" md-delay="200" md-direction="bottom" md-autohide="true">
               {{ev.name}}
              </md-tooltip>
            </md-button>

           </div>
           
          </md-card-actions>

        </md-card-content>
      </md-card>
             </div>
                
            </div>
            </md-card>
            </md-content>
        
    <div ng-include="'views/footer.php'"></div>



</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.6/angular.min.js"></script>


<script src="js/jquery.min.js"></script>
<!-- <script src="bower_components/angular/angular.min.js"></script> -->

<script src="bower_components/angular-material/angular-material.min.js"></script>
<script src="bower_components/angular-animate/angular-animate.min.js"></script>
<script src="bower_components/angular-aria/angular-aria.min.js"></script>
<script src="bower_components/angular-messages/angular-messages.min.js"></script>
<script src="js/scroller.js"></script>
<script src="js/modules/cmpnModule.js"></script>
<script src="js/controllers/departamentoCtrl.js"></script>
<script src="js/controllers/theme.js"></script>
<script src="js/controllers/cmpnCtrl.js"></script>
<script src="js/services/navBarService.js"></script>
<script src="js/directives/mdCmpnNavBar.js"></script>
<script type="text/javascript" src="js/wowslider.js"></script>
<script type="text/javascript" src="js/script.js"></script>
<!-- bxSlider Javascript file -->
<script src="js/jquery.bxslider.min.js"></script>
<script src="js/jqueryEffects.js"></script>
</body>
</html>
 <div class="row">
  <div class="col-md-4" ng-repeat="card in dashBoardCard | filter:procurar">

    <!-- START DEPARTAMENT BLOCK -->
    <div class="panel panel-colorful" >
      <div class="panel-heading">
        <div class="panel-title-box">
          <h3 >{{card.name}}</h3>

        </div>                                    
        <ul class="panel-controls" style="margin-top: 2px;">
          <li><a href="#" class="panel-fullscreen"><span class="fa fa-expand"></span></a></li>
          <li><a href="#" class="panel-refresh"><span class="fa fa-refresh"></span></a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></a>                                        
            <ul class="dropdown-menu">
              <li><a href="#" class="panel-collapse"><span class="fa fa-angle-down"></span> Collapse</a></li>
              <li><a href="{{card.btnAdd}}" ><span class="fa fa-cog"></span> Configuracoes</a></li>
              <li><a href="#" class="panel-remove"><span class="fa fa-times"></span> Remover</a></li>
            </ul>                                        
          </li>                                        
        </ul>                                    
      </div>                                
      <div class="panel-body padding-0">
        <div>
         <md-card style="box-shadow:none" >
          <md-card-title layout-padding layout-margin>
          </md-card-title>
          <md-content layout-padding>
            <div class="widget widget-default widget-item-icon">
              <div class="widget-item-left">
                <a href="{{card.btnAdd}}"><span class="{{card.icon}}"></span></a>
              </div>                             
              <div class="widget-data">

                <div class="widget-title"><a href="{{card.btnAdd}}">{{card.name}}</a></div>
                <div class="widget-subtitle">{{card.descricao}}</div>
              </div>      

            </div>  

          </md-content>
        </md-card>
        <!-- END PAGE CONTENT WRAPPER -->                                
      </div>  
    </div>
  </div>
</div>
</div>          
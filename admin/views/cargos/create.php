
<!-- PAGE CONTENT WRAPPER -->
<div class="page-content-wrap">

  <div class="row">
    <div class="col-md-12">

      <form class="form-horizontal" name="depForm">
        <div class="panel panel-colorful">
          <div class="panel-heading">
            <h3 class="panel-title"><strong>{{title}}</strong></h3>
            <ul class="panel-controls">
              <li><a href="#/" class="panel-remove"><span class="fa fa-times"></span></a></li>
            </ul>
          </div>

          <div class="panel-body form-group-separated">

            <div class="form-group">
              <label class="col-md-3 col-xs-12 control-label">Nome Cargo</label>
              <div class="col-md-6 col-xs-12">                                            

                <md-input-container class="md-icon-float md-block">

                  <label>Introduzir Nome do Cargo</label>
                  <md-icon>rate_review</md-icon>
                  <input type="text" ng-model="cargo.name" required="">

                </md-input-container>


              </div>
            </div>

          </div>
          <div class="panel-footer">

            <md-button class="btn md-warn md-raised" type="reset"><i class="fa fa-eraser"></i>Limpar</md-button>                                    
            <md-button class="btn md-raised md-primary " ng-disabled="depForm.$invalid" ng-click="guardar(cargo.name)"><i class="fa fa-save"></i>{{button}}</md-button>
          </div>
        </div>
      </form>

    </div>
  </div>                    

</div>
<!-- END PAGE CONTENT WRAPPER -->   
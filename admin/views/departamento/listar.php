<script type="text/ng-template" id="paginationControl.html">
  <div ng-show="paginator.pageCount() > 1">
    <ul class="pagination pagination-sm pull-right" >
      <li ng-click="paginator.firstPage()" ng-class="paginator.isFirstPage() && 'disabled'">
        <a>
          <i class="fa fa-step-backward" ng-class="paginator.isFirstPage() && 'icon-white'"></i>
        </a>
      </li>
      <li ng-click="paginator.perviousPage()" ng-class="paginator.isFirstPage() && 'disabled'">
        <a>
          <i class="fa fa-backward" ng-class="paginator.isFirstPage() && 'icon-white'"></i>
        </a>
      </li>
      <li ng-click="paginator.setPage(i)" ng-repeat="i in [] | forLoop:paginator.lowerLimit():paginator.pageCount() | limitTo : paginator.limitPerPage" ng-class="paginator.page==i && 'active'"> 
        <a> 
          <i>{{i+1}}</i> 
        </a> 
      </li>
      <li ng-click="paginator.nextPage()" ng-class="paginator.isLastPage() && 'disabled'">
        <a>
          <i class="fa fa-forward" ng-class="paginator.isLastPage() && 'icon-white'"></i>
        </a>
      </li>
      <li ng-click="paginator.lastPage()" ng-class="paginator.isLastPage() && 'disabled'">
        <a>
          <i class="fa fa-step-forward" ng-class="paginator.isLastPage() && 'icon-white'"></i>
        </a>
      </li>
    </ul>
  </div>
</script>
<ng-toast></ng-toast>

<div class="row">
 <div class="panel panel-colorful" bg noBox>
  <div class="panel-heading">
    <h1 class="panel-title" align="center"><strong>{{list}}</strong></h1>
    <ul class="panel-controls">
      <li><a href="#/" class="panel-remove"><span class="fa fa-times"></span></a></li>
    </ul>
  </div>
  <div class="col-md-4 " ng-repeat="dep in dep |reverse | paginate:rowsPerPage | filter:procurar">

    <div class="panel  md-whiteframe-z1" >                            
      <div class="panel-body panel-body-image">
        <img src="img/cmpn.jpg" alt="Ocean" style="border:15px white solid">
     <!--    <a href="#" class="panel-body-inform">
       <span class="fa fa-info"></span>
     </a> -->
   </div>
   <div class="panel-body">
    <h3><md-icon>domain<md-tooltip>Nome Deparatamento</md-tooltip></md-icon>{{dep.name}}</h3>
    <p><md-icon>assignment_ind<md-tooltip>Responsavel Departamento</md-tooltip></md-icon><a>{{dep.responsavel}}</a></p>
  </div>
  <div class="panel-footer text-muted " align="center">
    <div layout-align="center center" >



      <md-button class="md-button md-primary" href="{{card.btnList}}"><md-icon>view_list</md-icon>Ver</md-button>
      <md-button class="md-button md-accent" href="#/editDep/{{dep.id}}"><md-icon>content_paste</md-icon>Editar</md-button>
      <md-button class="md-button md-warn" ng-click="removeDep($event,dep.id,dep.name)"><md-icon>delete</md-icon>Remover</md-button>

    </div>
  </div>
</div>

</div>


</div
<div class="panel-footer">
  <paginator class="pagination pagination-sm pull-right"></paginator>
</div>
</div>
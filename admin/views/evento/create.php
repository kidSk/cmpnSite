
<!-- PAGE CONTENT WRAPPER -->
<div class="page-content-wrap">

	<div class="row">
		<div class="col-md-12">

			<form class="form-horizontal"  name="eventoForm" ng-class="{valid:eventoForm.$valid}" ng-submit="guardarEvento()">
				<div class="panel panel-default panel-warning">
					<div class="panel-heading">
						<h3 class="panel-title"><strong>Criar Evento ou Atividade</strong></h3>
						<ul class="panel-controls">
							<li><a href="#" class="panel-remove"><span class="fa fa-times"></span></a></li>
						</ul>
					</div>

					<div class="panel-body form-group-separated">

						<div class="form-group">
							<label class="col-md-3 col-xs-12 control-label">Titulo</label>
							<div class="col-md-6 col-xs-12">                                            

								
								<md-input-container class="md-icon-float md-block" >
									<label>Introduzir titulo</label>
									<md-icon >subtitles</md-icon>
									<input ng-model="Evento.titulo" required name="title">

								</md-input-container>


							</div>
						</div>


						<div class="form-group">                                        
							<label class="col-md-3 col-xs-12 control-label">Local</label>
							<div class="col-md-6 col-xs-12">



								<md-input-container class="md-icon-float md-block">
									<label>Introduzir Local</label>
									<md-icon >store</md-icon>
									<input ng-model="Evento.local" ng-required="true">
								</md-input-container>
							</div>
						</div>	
						<div class="form-group">                                        
							<label class="col-md-3 col-xs-12 control-label">Autor</label>
							<div class="col-md-6 col-xs-12">


								<md-input-container class="md-icon-float md-block">
									<label>Introduzir o nome do Autor</label>
									<md-icon >account_box</md-icon>
									<input ng-model="Evento.autor" type="textarea" ng-required="true">
								</md-input-container>
							</div>
						</div>
						<div class="form-group">                                        
							<label class="col-md-3 col-xs-12 control-label">Descriçao</label>
							<div class="col-md-6 col-xs-12">

								<md-input-container class="md-icon-float md-block">
									<label>Faz uma Descricao do evento ou atividade</label>
									<md-icon >description</md-icon>
									<input ng-model="Evento.descricao"  type="textarea" ng-required="true">
								</md-input-container>
							</div>
						</div>	
						<div class="form-group">                                        
							<label class="col-md-3 col-xs-12 control-label">Tipo</label>
							<div class="col-md-6 col-xs-12">
								<md-input-container class="md-icon-float md-block">

									<md-icon >developer_board</md-icon><span>&nbsp</span>
									<md-select ng-model="Evento.tipo" width="200" placeholder="Tipo de Evento" class="select" ng-required="true">
										<md-option  value="evento">Evento</md-option>
										<md-option  value="atividade">Atividade</md-option>

									</md-select>
								</md-input-container>
							</div>
						</div>	
						<div class="form-group">                                        
							<label class="col-md-3 col-xs-12 control-label">Tipo</label>
							<div class="col-md-6 col-xs-12">
								
								<md-input-container class="md-icon-float md-block">
									<label>Data Evento</label>
									<md-icon >insert_invitation</md-icon>
									<input ng-model="Evento.data" ng-required="true">
								</md-input-container>
								
							</div>
						</div>
					</div>
					<div class="panel-footer">
						<button class="btn btn-sucess" type="reset"><i class="fa fa-eraser"></i>Reset</button>                                    
						<button class="btn md-raised btn-primary md-primary " ng-disabled="eventoForm.$invalid" ng-click="guardarEvento()"><i class="fa fa-save"></i>Guardar</button>
					</div>
				</div>
			</form>

		</div>
	</div>                    

</div>
<!-- END PAGE CONTENT WRAPPER -->   
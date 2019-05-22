<div class="row">
	<div class="col-12">
		<div class="card">
			<div class="card-header">
				<h6 class="card-title">Herramientas para Desarrolladores</h6>
				<div class="card-btns">
					@include('buttons.minimize')
				</div>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-12">
						<span class="text-muted">
							Acceso a herramientas para desarrolladores
						</span>
						<hr>
					</div>
				</div>
				<h6>Interfaz</h6>
				<div class="row">
					<div class="col-12">
						<a href="{{ route('pack.icons') }}" class="btn btn-primary btn-simple btn-lg" 
						   data-toggle="tooltip" title="Listado de íconos disponibles en la aplicación">
							<i class="icofont icofont-idea"></i> Iconos
						</a>
					</div>
				</div>
				<hr>
				<h6>Ajustes</h6>
				<div class="row">
					<div class="col-md-2">
						<div class="form-group">
							<label for="" class="control-label">Mantenimiento</label>
							<div class="col-12">
								{!! Form::checkbox('maintenance', true, false, [
									'id' => 'maintenance', 'class' => 'form-control bootstrap-switch',
									'data-on-label' => 'SI', 'data-off-label' => 'NO'
								]) !!}
							</div>
						</div>
					</div>
					<div class="col-md-2">
						<div class="form-group">
							<label for="" class="control-label">Demostración</label>
							<div class="col-12">
								{!! Form::checkbox('demo', true, false, [
									'id' => 'demo', 'class' => 'form-control bootstrap-switch',
									'data-on-label' => 'SI', 'data-off-label' => 'NO'
								]) !!}
							</div>
						</div>
					</div>
					<div class="col-md-2">
						<div class="form-group">
							<label for="" class="control-label">Debug</label>
							<div class="col-12">
								{!! Form::checkbox('debug', true, false, [
									'id' => 'debug', 'class' => 'form-control bootstrap-switch',
									'data-on-label' => 'SI', 'data-off-label' => 'NO'
								]) !!}
							</div>
						</div>
					</div>
				</div>
				<hr>
				<h6>Visor de logs</h6>
				<div class="row mg-bottom-20">
					<div class="col-md-2 panel-legend">
						<i class="ion-android-checkbox-blank text-green" 
						   title="Generó un registro de información" 
						   data-toggle="tooltip"></i>
						<span>información</span>
					</div>
					<div class="col-md-2 panel-legend">
						<i class="ion-android-checkbox-blank text-warning" 
						   title="Generó un registro de error en la aplicación" 
						   data-toggle="tooltip"></i>
						<span>error</span>
					</div>
					<div class="col-md-2 panel-legend">
						<i class="ion-android-checkbox-blank text-blue" 
						   title="Generó un evento de notificación" 
						   data-toggle="tooltip"></i>
						<span>notificación</span>
					</div>
					<div class="col-md-2 panel-legend">
						<i class="ion-android-checkbox-blank text-danger" 
						   title="Generó un evento crítico en la aplicación" 
						   data-toggle="tooltip"></i>
						<span>critico</span>
					</div>
					<div class="col-md-2 panel-legend">
						<i class="ion-android-checkbox-blank text-gray" 
						   title="Generó un evento sobre alguna funcionalidad de la aplicación" 
						   data-toggle="tooltip"></i>
						<span>debug</span>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<div class="form-control visor">
							<p class="text-warning">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore rem accusamus aut, amet. Neque, veritatis enim laborum magnam eius fuga, et vero reiciendis cumque placeat consequuntur possimus perferendis dolor molestiae.</p>
							<p class="text-danger">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ipsa veniam, aperiam numquam exercitationem sequi ipsam dolore iste, illo quas impedit corporis! Ab aspernatur sapiente provident porro fuga non praesentium.</p>
							<p class="text-green">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut voluptatem tempore repellendus officia aspernatur ullam dolor tempora, reprehenderit dolore omnis unde, laborum expedita. Repudiandae beatae natus vitae, minima dicta expedita.</p>
							<p class="text-blue">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus velit aspernatur assumenda, voluptatem, aperiam dignissimos. A dolores alias illum ipsa minus reiciendis error reprehenderit autem dolorum, laboriosam cum accusantium, tempora.
							</p>
							<p class="text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore rem accusamus aut, amet. Neque, veritatis enim laborum magnam eius fuga, et vero reiciendis cumque placeat consequuntur possimus perferendis dolor molestiae.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

@section('extra-js')
	@parent
	<script>
		$(document).ready(function() {
			$('input[name=demo]').closest('.bootstrap-switch-wrapper').attr({
	            'title': 'Establecer la aplicación en modo demostración',
	            'data-toggle': 'tooltip'
	        }).tooltip({
	        	trigger:"hover"
	        });
	        $('input[name=maintenance]').closest('.bootstrap-switch-wrapper').attr({
	            'title': 'Establecer la aplicación en modo de mantenimiento',
	            'data-toggle': 'tooltip'
	        }).tooltip({
	        	trigger:"hover"
	        });
	        $('input[name=debug]').closest('.bootstrap-switch-wrapper').attr({
	            'title': 'Mostrar eventos y/o errores de la aplicación',
	            'data-toggle': 'tooltip'
	        }).tooltip({
	        	trigger:"hover"
	        });
		});
	</script>
@stop
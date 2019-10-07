@extends('budget::layouts.master')

@section('maproute-icon')
	<i class="ion-arrow-graph-up-right"></i>
@stop

@section('maproute-icon-mini')
	<i class="ion-arrow-graph-up-right"></i>
@stop

@section('maproute-actual')
	Presupuesto
@stop

@section('maproute-title')
	Formulación
@stop

@section('content')
	<div class="row">
		<div class="col-12">
			<div class="card">
				<div class="card-header">
					<h6 class="card-title">
						Formulación de Presupuesto
						@include('buttons.help')
					</h6>
					<div class="card-btns">
						@include('buttons.previous', ['route' => url()->previous()])
						@include('buttons.print', ['print' => []])
						@include('buttons.minimize')
					</div>
				</div>
				<div class="card-body">
					<h5 class="card-title text-center">Oficina de programación y Presupuesto</h5>
					<h6 class="card-title text-center">Presupuesto de Gastos por Sub Específicas</h6>
					<div class="row form-group">
						<div class="col-3 text-bold text-uppercase">
							{{ ($formulation->assigned)?'Presupuesto Asignado':'Asignar Presupuesto' }}:
						</div>
						<div class="col-9">
							<label>
								{!! Form::open([
									'route' => ['budget.subspecific-formulations.update', $formulation->id],
									'method' => 'PUT', 'id' => 'form_assign'
								]) !!}
									{!! Form::token() !!}
									{!! Form::checkbox('assigned', true, ($formulation->assigned), [
										'class' => 'form-control bootstrap-switch bootstrap-switch-mini budget-assign',
										'data-on-label' => 'SI', 'data-off-label' => 'NO',
										'disabled' => ($formulation->assigned), 'data-toggle' => 'tooltip',
										'title' => 'Asignar presupuesto'
									]) !!}
								{!! Form::close() !!}
							</label>
						</div>
					</div>
					<div class="row form-group">
						<div class="col-3 text-bold text-uppercase">Institución:</div>
						<div class="col-9">{{ $formulation->specificAction->institution }}</div>
					</div>
					<div class="row form-group">
						<div class="col-3 text-bold text-uppercase">Moneda:</div>
						<div class="col-9">{{ $formulation->currency->description }}</div>
					</div>
					<div class="row form-group">
						<div class="col-3 text-bold text-uppercase">Presupuesto:</div>
						<div class="col-9">{{ $formulation->year }}</div>
					</div>
					<div class="row form-group">
						<div class="col-3 text-bold text-uppercase">{{ $formulation->specificAction->type }}:</div>
						<div class="col-9">{{ $formulation->specificAction->specificable->description }}</div>
					</div>
					<div class="row form-group">
						<div class="col-3 text-bold text-uppercase">Acción Específica:</div>
						<div class="col-9">{{ $formulation->specificAction->description }}</div>
					</div>
					<div class="row form-group">
						<div class="col-3 text-bold text-uppercase">Total Formulado:</div>
						<div class="col-9">
							{{ $formulation->currency->symbol }}&#160;
							{{ number_format(
								$formulation->total_formulated, $formulation->currency->decimal_places, ",", "."
							) }}</div>
					</div>
					<table class="table table-bordered table-hover">
						<thead>
							<tr>
								<th>Código</th>
								<th>Denominación</th>
								<!--<th>Real</th>
								<th>Estimado</th>-->
								<th>Total Año</th>
								{{-- @foreach (['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'] as $month)
									<th>{{ $month }}</th>
								@endforeach --}}
							</tr>
						</thead>
						<tbody>
							@foreach ($formulation->accountOpens as $accountOpen)
								<tr class="{{ ($accountOpen->budgetAccount->specific==="00")?'text-dark text-bold':'' }}">
									<td>{{ $accountOpen->budgetAccount->code }}</td>
									<td>{{ $accountOpen->budgetAccount->denomination }}</td>
									{{-- <td>{{ $accountOpen->total_real_amount }}</td>
									<td>{{ $accountOpen->total_estimated_amount }}</td> --}}
									<td class="text-right">
										{{ number_format(
											$accountOpen->total_year_amount,
											$formulation->currency->decimal_places, ",", "."
										) }}
									</td>
									{{-- <td>{{ $accountOpen->jan_amount }}</td>
									<td>{{ $accountOpen->feb_amount }}</td>
									<td>{{ $accountOpen->mar_amount }}</td>
									<td>{{ $accountOpen->apr_amount }}</td>
									<td>{{ $accountOpen->may_amount }}</td>
									<td>{{ $accountOpen->jun_amount }}</td>
									<td>{{ $accountOpen->jul_amount }}</td>
									<td>{{ $accountOpen->aug_amount }}</td>
									<td>{{ $accountOpen->sep_amount }}</td>
									<td>{{ $accountOpen->oct_amount }}</td>
									<td>{{ $accountOpen->nov_amount }}</td>
									<td>{{ $accountOpen->dec_amount }}</td> --}}
								</tr>
							@endforeach
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
@stop

@section('extra-js')
	@parent
	<script>
		$(document).ready(function() {
			@if ($formulation->assigned)
				/**
				 * Muestra un mensaje al usuario en caso de que la formulación de presupuesto
				 * ya se encuentra asignada
				 */
				$.gritter.add({
                    title: 'Advertencia!',
                    text: 'Este presupuesto ya se encuentra asignado y no puede ser modificado',
                    class_name: 'growl-danger',
                    image: "{{ asset('images/screen-warning.png') }}",
                    sticky: false,
                    time: 2000
                });
			@endif

			$('.budget-assign').on('switchChange.bootstrapSwitch', function(e) {
				console.log($(this).is(':checked'));
				if ($(this).is(':checked')) {
					bootbox.confirm(
						'Esta seguro de asignar esta formulación?. Una vez asignado no puede ser modificado',
						function(result) {
							if (result) {
								$("#form_assign").submit();
							}
							else {
								$(this).is(':checked', false);
							}
						}
					);
				}
			});
		});
	</script>
@endsection

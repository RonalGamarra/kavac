@extends('accounting::layouts.master')

@section('maproute-icon')
	<i class="ion-arrow-graph-up-right"></i>
@stop

@section('maproute-icon-mini')
	<i class="ion-arrow-graph-up-right"></i>
@stop

@section('maproute-actual')
	Contabilidad
@stop

@section('maproute-title')
	Reportes de libros contables
@stop

@section('content')
	<div class="row">
		<div class="col-12">
			<div class="card">
				<div class="card-header">
					<h6 class="card-title">
						Libro diario
					</h6>
					<div class="card-btns">
						@include('buttons.previous', ['route' => url()->previous()])
						@include('buttons.minimize')
					</div>
				</div>
				<div class="card-body">
					<accounting-report-daily-book id="helpReportDailyBook" :currencies="{{ $currencies }}" ></accounting-report-daily-book>
				</div>
			</div>
		</div>

		<div class="col-12">
			<div class="card">
				<div class="card-header">
					<h6 class="card-title">Mayor analítico</h6>
					<div class="card-btns">
						@include('buttons.minimize')
					</div>
				</div>
				<div class="card-body">
					<accounting-report-analytical-major :currencies="{{ $currencies }}" year_old="{{ $yearOld }}" />
				</div>
			</div>
		</div>

		<div class="col-12">
			<div class="card">
				<div class="card-header">
					<h6 class="card-title">Libro auxiliar</h6>
					<div class="card-btns">
						@include('buttons.minimize')
					</div>
				</div>
				<div class="card-body">
					<accounting-report-auxiliary-book :currencies="{{ $currencies }}" :records="{{ $records_auxiliar }}" year_old="{{ $yearOld }}" />
				</div>
			</div>
		</div>
	</div>
@stop

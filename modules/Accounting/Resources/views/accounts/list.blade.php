@extends('layouts.app')

@section('maproute-icon')
	<i class="ion-arrow-graph-up-right"></i>
@stop

@section('maproute-icon-mini')
	<i class="ion-arrow-graph-up-right"></i>
@stop

@section('maproute-actual')
	Patrimoniales
@stop

@section('maproute-title')
	Catálogo de Cuentas
@stop

@section('content')
	<div class="row">
		<div class="col-12">
			<div class="card">
				<div class="card-header">
					<h6 class="card-title">Catálogo de Cuentas Presupuestarias</h6>
					<div class="card-btns">
						@include('buttons.previous', ['route' => url()->previous()])
						<!-- @include('buttons.new', ['route' => route('budget.accounts.create')]) -->
						@include('buttons.minimize')
					</div>
				</div>
				<div class="card-body">
					<accounting-acounts-list :account_list = "{{ $account_list }}" />
				</div>
			</div>
		</div>
	</div>
@stop
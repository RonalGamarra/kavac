@extends('sale::layouts.master')

@section('maproute-icon')
	<i class="ion-settings"></i>
@stop

@section('maproute-icon-mini')
	<i class="ion-settings"></i>
@stop

@section('maproute-actual')
	Comercialización
@stop

@section('maproute-title')
	Configuración
@stop

@section('content')

<div class="row">
	<div class="col-12">
		<div class="card">
			<div class="card-header">
				<h6 class="card-title">Registros Comúnes</h6>
				<div class="card-btns">
					@include('buttons.previous', ['route' => url()->previous()])
					@include('buttons.minimize')
				</div>
<<<<<<< HEAD
				<div class="card-body">
					<div class="row">
						{{-- Configuración de Formas de cobro--}}
						<sale-payment-method></sale-payment-method>
						{{-- Configuración de Almacén--}}
						<sale-warehouse-method></sale-warehouse-method>
					</div>
=======
			</div>
			<div class="card-body">
				<div class="row">
					{{-- Configuración de Formas de cobro --}}
					<register-clients></register-clients>
					{{-- Configuración de Clientes --}}
					<register-formatcode></register-formatcode>
					{{-- Configuración de Formas de cobro--}}
					<sale-payment-method></sale-payment-method>
>>>>>>> 61b9b2789faf958906551c273bd9b3f37699c94d
				</div>
			</div>
		</div>
	</div>
</div>
@stop

@extends('layouts.app')

@section('maproute-icon')
    <i class="ion-gear-a"></i>
@stop

@section('maproute-icon-mini')
    <i class="ion-gear-a"></i>
@stop

@section('maproute-actual')
    {{ __('Mi Configuración') }}
@stop

@section('maproute-title')
    {{ __('Mi Configuración') }}
@stop

@section('content')
    <div class="card">
        <div class="card-header">
            <h6 class="card-title">
                {{ __('General') }}
                @include('buttons.help')
            </h6>
            <div class="card-btns">
                @include('buttons.previous', ['route' => url()->previous()])
                @include('buttons.minimize')
            </div>
        </div>
        {!! Form::open($header_general_settings) !!}
            <div class="card-body">
                <h6 class="md-title">Bloqueo de pantalla</h6>
                <div class="row">
                    <div class="col-md-2">
                        <div class="form-group">
                            {!! Form::label('lock_screen', __('Activar'), []) !!}
                            <div class="col-12">
                                <div class="bootstrap-switch-mini">
                                    {!! Form::checkbox('lock_screen', true, auth()->user()->lock_screen, [
                                        'id' => 'lock_screen', 'class' => 'form-control bootstrap-switch',
                                        'data-on-label' => __('SI'), 'data-off-label' => __('NO')
                                    ]) !!}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            {!! Form::label('time_lock', __('Tiempo de inactividad'), []) !!}
                            {!! Form::number('time_lock', auth()->user()->time_lock ?? 0, [
                                'class' => 'form-control input-sm', 'data-toggle' => 'tooltip',
                                'title' => __('Tiempo de inactividad en minutos para bloquear la pantalla del sistema')
                            ]) !!}
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-right">
                @include('layouts.form-buttons')
            </div>
        {!! Form::close() !!}
    </div>
    <div class="card">
        <div class="card-header">
            <h6 class="card-title">
                {{ __('Notificaciones') }}
                @include('buttons.help')
            </h6>
            <div class="card-btns">
                @include('buttons.previous', ['route' => url()->previous()])
                @include('buttons.minimize')
            </div>
        </div>
        {!! Form::open($header_notify_settings) !!}
            <div class="card-body">
                <span class="text-muted">
                    {{ __('Seleccione las opciones de las cuales quiere ser notificado') }}
                </span>
                <div class="row">
                    @php
                        $section = 'GENERAL';
                        $switchEl = [];
                    @endphp
                    @foreach ($notifySettings as $notifySetting)
                        @if ($section !== $notifySetting->module_name)
                            @php
                                $section = $notifySetting->module_name;
                            @endphp
                            <div class="col-12 mb-4">
                                <h6 class="md-title text-center">
                                    {{ $section ?? 'GENERAL' }}
                                    {{-- <a data-toggle="collapse" href="#collapse{{ $section ?? 'GENERAL' }}"
                                       role="button" aria-expanded="true"
                                       aria-controls="collapse{{ $section ?? 'GENERAL' }}">

                                    </a> --}}
                                </h6>
                            </div>
                        @endif
                        <div class="col-3 mb-4 collapse show" id="collapse{{ $section ?? 'GENERAL' }}">
                            <div class="form-group text-center">
                                <label for="" class="control-label">{{ $notifySetting->name }}</label>
                                <div class="col-12 bootstrap-switch-mini">
                                    {!! Form::checkbox($notifySetting->slug, true,
                                        null, [
                                        'id' => $notifySetting->slug, 'class' => 'form-control bootstrap-switch',
                                        'data-on-label' => __('SI'), 'data-off-label' => __('NO')
                                    ]) !!}
                                    @php
                                        $switchEl = array_merge(
                                            $switchEl, [$notifySetting->slug => $notifySetting->description]
                                        );
                                    @endphp
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
            <div class="card-footer text-right">
                <div class="row">
                    <div class="col-md-3 offset-md-9" id="settingParamButtons">
                        @include('layouts.form-buttons')
                    </div>
                </div>
            </div>
        {!! Form::close() !!}
    </div>
@stop

@section('extra-js')
    @parent
    <script>
        $(document).ready(function() {
            @foreach ($switchEl as $switchId => $switchDescription)
                $('#{{ $switchId }}').closest('.bootstrap-switch-wrapper').attr({
                    'title': '{{ $switchDescription }}',
                    'data-toggle': 'tooltip'
                }).tooltip({delay: 8});
            @endforeach
        });
    </script>
@stop
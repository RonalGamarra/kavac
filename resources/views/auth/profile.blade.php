@extends('layouts.app')

@section('content')
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12 text-center">
                            <img src="{{ asset('images/default-avatar.png') }}" alt="" 
                                 style="border:1px solid #519BF6; padding:15px; border-radius: 20px;">
                        </div>
                        <div class="col-12 text-center">
                            <h4>Nombre</h4>
                            <h5>Cargo</h5>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-info btn-block">Bloquear Pantalla</button>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="card">
                <ul class="nav nav-tabs custom-tabs justify-content-center" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#profile" role="tab">
                            <i class="ion-android-person"></i> Perfil
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#activity" role="tab">
                            <i class="ion-arrow-swap"></i> Actividad
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#messages" role="tab">
                            <i class="ion-android-mail"></i> Mensajes
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#directory" role="tab">
                            <i class="ion-android-contacts"></i> Directorio
                        </a>
                    </li>
                </ul>
                <div class="card-body">
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div class="tab-pane active" id="profile" role="tabpanel">
                            {!! Form::model($model, $header) !!}
                                @include('layouts.form-errors')
                                <div class="form-group">
                                    {!! Form::label('name', 'Nombre y Apellido', []) !!}
                                    {!! Form::text('name', $model->name, [
                                            'class' => 'form-control input-sm', 'readonly' => 'readonly',
                                            'data-toggle' => 'tooltip',
                                            'title' => 'Nombre y Apellido. Este dato solo puede ser modificado por personal autorizado.'
                                        ]
                                    ) !!}
                                </div>
                                <div class="form-group">
                                    {!! Form::label('email', 'Correo Electrónico', []) !!}
                                    {!! Form::email('email', $model->email, [
                                            'class' => 'form-control input-sm', 'readonly' => 'readonly',
                                            'data-toggle' => 'tooltip',
                                            'title' => 'Correo electrónico. Este dato solo puede ser modificado por personal autorizado.'
                                        ]
                                    ) !!}
                                </div>
                                <div class="form-group">
                                    {!! Form::label('username', 'Usuario', []) !!}
                                    {!! Form::text('username', $model->username, [
                                            'class' => 'form-control input-sm', 'readonly' => 'readonly',
                                            'data-toggle' => 'tooltip',
                                            'title' => 'Nombre de usuario para acceso al sistema. ' . 
                                                       'Este dato solo puede ser modificado por personal autorizado.'
                                        ]
                                    ) !!}
                                </div>
                                <div class="form-group">
                                    {!! Form::label('password', 'Nueva Contraseña', []) !!}
                                    {!! Form::password('password', [
                                            'class' => 'form-control input-sm', 'data-toggle' => 'tooltip',
                                            'title' => 'Introduzca la nueva contraseña de acceso al sistema'
                                        ]
                                    ) !!}
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-8 col-sm-offset-2">
                                        <div class="progress-container">
                                            <span class="progress-badge">Débil</span>
                                            <div class="progress">
                                                <div id="complexity-bar" class="progress-bar" role="progressbar">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-1">
                                        <p id="complexity" class="float-right font-bold">0%</p>
                                        {!! Form::hidden('complexity-level', null, ['id' => 'complexity-level']) !!}
                                    </div>
                                </div>
                                <div class="form-group">
                                    {!! Form::label('password_confirmation', 'Confirmar Contraseña', []) !!}
                                    {!! Form::password('password_confirmation', [
                                            'class' => 'form-control input-sm', 'data-toggle' => 'tooltip',
                                            'title' => 'Introduzca nuevamente la nueva contraseña de acceso al sistema'
                                        ]
                                    ) !!}
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-12 text-right">
                                        {!! Form::button('<i class="fa fa-save"></i>', [
                                            'class' => 'btn btn-success btn-icon btn-round', 'type' => 'submit',
                                            'data-toggle' => 'tooltip', 'title' => 'Guardar registro', 
                                        ]) !!}
                                    </div>
                                </div>
                            {!! Form::close() !!}
                        </div>
                        <div class="tab-pane" id="activity" role="tabpanel">
                            {{-- Muestra los últimos 20 registros en la línea de tiempo del usuario --}}
                            <div class="row mg-bottom-20">
                                <div class="col-md-9"></div>
                                <div class="col-md-3">
                                    {!! Form::text('search_timeline', null, [
                                        'class' => 'form-control input-sm', 'id' => 'search_timeline',
                                        'placeholder' => 'buscar...'
                                    ]) !!}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <ul class="timeline timeline-inverse">
                                        <li class="time-label">
                                            <span class="bg-red">
                                                10 Feb. 2016
                                            </span>
                                        </li>
                                        <li>
                                            <i class="fa fa-envelope bg-blue"></i>
                                            <div class="timeline-item">
                                                <span class="time"><i class="fa fa-clock-o"></i> 12:05</span>
                                                <h3 class="timeline-header"><a href="#">Support Team</a> sent you an email</h3>
                                                <div class="timeline-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </div>
                                                <div class="timeline-footer">
                                                    <a class="btn btn-info btn-xs">Read more</a>
                                                    <a class="btn btn-warning btn-xs">Delete</a>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="time-label">
                                            <span class="bg-green">
                                                10 Jun. 2016
                                            </span>
                                        </li>
                                        <li>
                                            <i class="fa fa-user bg-yellow"></i>
                                            <div class="timeline-item">
                                                <span class="time"><i class="fa fa-clock-o"></i> 12:05</span>
                                                <h3 class="timeline-header"><a href="#">Support Team</a> sent you an email</h3>
                                                <div class="timeline-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </div>
                                                <div class="timeline-footer">
                                                    <a class="btn btn-info btn-xs">Read more</a>
                                                    <a class="btn btn-warning btn-xs">Delete</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tab-pane" id="messages" role="tabpanel">
                            <ul class="media-list msg-list">
                                <li class="media unread">
                                    <div class="float-left">
                                        <input type="checkbox" name="checkbox1" id="checkbox1" class="form-control bootstrap-switch" data-on-label="SI" data-off-label="NO">
                                        <label for="checkbox1"></label>
                                    </div>
                                    <a href="#" class="float-left">
                                        <img class="media-object rounded-circle img-raised" src="{{ asset('images/default-avatar.png') }}" 
                                             alt="usuario">
                                    </a>
                                    <div class="media-body">
                                        <div class="float-right media-option">
                                            <i class="fa fa-paperclip mr5"></i>
                                            <small>Yesterday 5:51am</small>
                                        </div>
                                        <h4 class="sender">Renov Leonga</h4>
                                        <p>
                                            <a href="#">
                                                <strong class="subject">Hi Hello!</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
                                            </a>
                                        </p>
                                    </div>
                                </li>

                                <li class="media unread">
                                    <div class="float-left">
                                        <input type="checkbox" name="checkbox2" id="checkbox2" class="form-control bootstrap-switch" data-on-label="SI" data-off-label="NO">
                                        <label for="checkbox1"></label>
                                    </div>
                                    <a href="#" class="float-left">
                                        <img class="media-object rounded-circle img-raised" src="{{ asset('images/default-avatar.png') }}" 
                                             alt="usuario">
                                    </a>
                                    <div class="media-body">
                                        <div class="float-right media-option">
                                            <i class="fa fa-paperclip mr5"></i>
                                            <small>Yesterday 5:51am</small>
                                        </div>
                                        <h4 class="sender">Renov Leonga</h4>
                                        <p>
                                            <a href="#">
                                                <strong class="subject">Hi Hello!</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
                                            </a>
                                        </p>
                                    </div>
                                </li>

                                <li class="media unread">
                                    <div class="float-left">
                                        <input type="checkbox" name="checkbox3" id="checkbox3" class="form-control bootstrap-switch" data-on-label="SI" data-off-label="NO">
                                        <label for="checkbox1"></label>
                                    </div>
                                    <a href="#" class="float-left">
                                        <img class="media-object rounded-circle img-raised" src="{{ asset('images/default-avatar.png') }}" 
                                             alt="usuario">
                                    </a>
                                    <div class="media-body">
                                        <div class="float-right media-option">
                                            <i class="fa fa-paperclip mr5"></i>
                                            <small>Yesterday 5:51am</small>
                                        </div>
                                        <h4 class="sender">Renov Leonga</h4>
                                        <p>
                                            <a href="#">
                                                <strong class="subject">Hi Hello!</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
                                            </a>
                                        </p>
                                    </div>
                                </li>

                                <li class="media unread">
                                    <div class="float-left">
                                        <input type="checkbox" name="checkbox4" id="checkbox4" class="form-control bootstrap-switch" data-on-label="SI" data-off-label="NO">
                                    </div>
                                    <a href="#" class="float-left">
                                        <img class="media-object rounded-circle img-raised" src="{{ asset('images/default-avatar.png') }}" 
                                             alt="usuario">
                                    </a>
                                    <div class="media-body">
                                        <div class="float-right media-option">
                                            <i class="fa fa-paperclip mr5"></i>
                                            <small>Yesterday 5:51am</small>
                                        </div>
                                        <h4 class="sender">Renov Leonga</h4>
                                        <p>
                                            <a href="#">
                                                <strong class="subject">Hi Hello!</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
                                            </a>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane" id="directory" role="tabpanel">
                            <div class="row">
                                <div class="col-sm-12">
                                    {{-- Búsqueda de contacto en el directorio institucional --}}
                                    <div class="well mt10">
                                        <div class="row">
                                            <div class="col-sm-9">
                                                <div class="form-group">
                                                    <input type="text" name="" class="form-control" placeholder="Buscar...">
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <select id="search-type" class="width100p select2-offscreen select2" data-placeholder="Tipo de Consulta" tabindex="-1" title="">
                                                    <option value="">Seleccione...</option>
                                                    <option value="full_name">Nombre completo</option>
                                                    <option value="position">Cargo</option>
                                                    <option value="email">Correo Electrónico</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {{-- Directorio institucional --}}
                                    <div class="list-group contact-group">
                                        <a href="#" class="list-group-item">
                                            <div class="media">
                                                <div class="float-left">
                                                    <img class="img-circle img-online" 
                                                         src="{{ asset('images/default-avatar.png') }}" 
                                                         alt="usuario">
                                                </div>
                                                <div class="media-body">
                                                    <h4 class="media-heading">Nombre <small>Cargo</small></h4>
                                                    <div class="media-content">
                                                        <i class="fa fa-map-marker"></i> Dirección
                                                        <ul class="list-unstyled">
                                                            <li><i class="fa fa-mobile"></i> Número de teléfono</li>
                                                            <li><i class="fa fa-envelope-o"></i> correo institucional</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div><!-- media -->
                                        </a><!-- list-group -->
                                        
                                        <a href="#" class="list-group-item">
                                            <div class="media">
                                                <div class="float-left">
                                                    <img class="img-circle img-online" 
                                                         src="{{ asset('images/default-avatar.png') }}" 
                                                         alt="usuario">
                                                </div>
                                                <div class="media-body">
                                                    <h4 class="media-heading">Nombre <small>Cargo</small></h4>
                                                    <div class="media-content">
                                                        <i class="fa fa-map-marker"></i> Dirección
                                                        <ul class="list-unstyled">
                                                            <li><i class="fa fa-mobile"></i> Número de teléfono</li>
                                                            <li><i class="fa fa-envelope-o"></i> correo institucional</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div><!-- media -->
                                        </a><!-- list-group -->
                                        
                                        <a href="#" class="list-group-item">
                                            <div class="media">
                                                <div class="float-left">
                                                    <img class="img-circle img-online" 
                                                         src="{{ asset('images/default-avatar.png') }}" 
                                                         alt="usuario">
                                                </div>
                                                <div class="media-body">
                                                    <h4 class="media-heading">Nombre <small>Cargo</small></h4>
                                                    <div class="media-content">
                                                        <i class="fa fa-map-marker"></i> Dirección
                                                        <ul class="list-unstyled">
                                                            <li><i class="fa fa-mobile"></i> Número de teléfono</li>
                                                            <li><i class="fa fa-envelope-o"></i> correo institucional</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div><!-- media -->
                                        </a><!-- list-group -->
                                        
                                        <a href="#" class="list-group-item">
                                            <div class="media">
                                                <div class="float-left">
                                                    <img class="img-circle img-online" 
                                                         src="{{ asset('images/default-avatar.png') }}" 
                                                         alt="usuario">
                                                </div>
                                                <div class="media-body">
                                                    <h4 class="media-heading">Nombre <small>Cargo</small></h4>
                                                    <div class="media-content">
                                                        <i class="fa fa-map-marker"></i> Dirección
                                                        <ul class="list-unstyled">
                                                            <li><i class="fa fa-mobile"></i> Número de teléfono</li>
                                                            <li><i class="fa fa-envelope-o"></i> correo institucional</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div><!-- media -->
                                        </a><!-- list-group -->
                                        
                                        <a href="#" class="list-group-item">
                                            <div class="media">
                                                <div class="float-left">
                                                    <img class="img-circle img-online" 
                                                         src="{{ asset('images/default-avatar.png') }}" 
                                                         alt="usuario">
                                                </div>
                                                <div class="media-body">
                                                    <h4 class="media-heading">Nombre <small>Cargo</small></h4>
                                                    <div class="media-content">
                                                        <i class="fa fa-map-marker"></i> Dirección
                                                        <ul class="list-unstyled">
                                                            <li><i class="fa fa-mobile"></i> Número de teléfono</li>
                                                            <li><i class="fa fa-envelope-o"></i> correo institucional</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div><!-- media -->
                                        </a><!-- list-group -->
                                        
                                        <a href="#" class="list-group-item">
                                            <div class="media">
                                                <div class="float-left">
                                                    <img class="img-circle img-online" 
                                                         src="{{ asset('images/default-avatar.png') }}" 
                                                         alt="usuario">
                                                </div>
                                                <div class="media-body">
                                                    <h4 class="media-heading">Nombre <small>Cargo</small></h4>
                                                    <div class="media-content">
                                                        <i class="fa fa-map-marker"></i> Dirección
                                                        <ul class="list-unstyled">
                                                            <li><i class="fa fa-mobile"></i> Número de teléfono</li>
                                                            <li><i class="fa fa-envelope-o"></i> correo institucional</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div><!-- media -->
                                        </a><!-- list-group -->
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop
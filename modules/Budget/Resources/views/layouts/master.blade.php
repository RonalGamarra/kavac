{{-- <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Module Budget</title>

       <!-- Laravel Mix - CSS File -->
       <!-- <link rel="stylesheet" href="{{ mix('css/app.css','modules/$LOWER_NAME$') }}"> -->

    </head>
    <body>
        @yield('content')

        <!-- Laravel Mix - JS File -->
        <!-- <script src="{{ mix('js/app.js', 'modules/$LOWER_NAME$') }}"></script> -->
    </body>
</html> --}}
@extends('layouts.app')

@section('extra-css')
    @parent
    
@stop

@section('extra-js')
    @parent
    {!! Html::script(
        'modules/budget/js/app.js', ['type' => 'text/javascript'], Request::secure()
    ) !!}
@stop
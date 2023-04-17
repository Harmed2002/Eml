@extends('adminlte::page')


{{-- @section('content_header')
    <h1>Dashboard</h1>
@stop --}}

@section('content')
<link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
<script src="{{ mix('/js/app.js') }}" defer></script>
@if(session("mensaje") && session("tipo"))
    <div class="notification is-{{session('tipo')}}">
        {{session('mensaje')}}
    </div>
@endif
@inertiaHead
@routes()
@inertia
@stop

@section('css')

    {{-- <link rel="stylesheet" href="{{asset('css/select2.min.css')}}"> --}}
@stop

@section('js')
{{-- <script src="./node_modules/react/umd/react.production.min.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.production.min.js"></script>
<script src="./node_modules/select2-react-component/dist/select2-react-component.min.js"></script> --}}

@stop

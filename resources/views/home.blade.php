@extends('adminlte::page')
<link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
<script src="{{ mix('/js/app.js') }}" defer></script>
@inertiaHead
@section('title', 'Dashboard')

@section('content_header')
    <h1>Dashboard</h1>
@stop

@section('content')
@inertia
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
    <script> console.log('Hi!'); </script>
@stop

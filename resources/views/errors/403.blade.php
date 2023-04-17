@extends('adminlte::page')

@section('title', 'EML')

@section('content')

<section class="content-header">
	<div class="container-fluid">
		<div class="row mb-2">

		</div>
	</div>
</section>
<section class="content">
	<div class="error-page">
		<h2 class="headline text-warning"> 403</h2>

		<div class="error-content">
			<h3><i class="fas fa-exclamation-triangle text-warning"></i> Sr. usuario ud. no cuenta con el permiso
				requerido para esta funcionalidad.</h3>

			<p>Por favor comuníquese con el administrador para que le asigne dicho permiso.</p>
		</div>
	</div>
</section>

@endsection

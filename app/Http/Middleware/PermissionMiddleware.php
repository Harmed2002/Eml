<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PermissionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle($request, Closure $next, $permission)
    {
        if (Auth::guest()) {
            return redirect('/login');
        }


        if (! $request->user()->can($permission)) {
               abort(403);

            // return redirect('403')->with("mensaje", 'No posees el permisos, para realizar está acción, por favor, comunicate con el administrador del sistema, para que te asigne el permiso si el asi lo desea.');
        }
        return $next($request);
    }
}

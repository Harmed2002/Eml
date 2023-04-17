<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});


Auth::routes();
Route::get('home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::get('403', function () {return view('errors.403');});

//Admin
//User

Route::get('users',[App\Http\Controllers\UserController::class,'index'])->name('users.index')->middleware(['permission:index_user','auth']);
Route::get('users/create',[App\Http\Controllers\UserController::class,'create'])->name('users.create')->middleware(['permission:create_user','auth']);
Route::get('users/{user}',[App\Http\Controllers\UserController::class,'show'])->name('users.show')->middleware(['permission:show_user','auth']);
Route::get('users/{user}/edit',[App\Http\Controllers\UserController::class,'edit'])->name('users.edit')->middleware(['permission:edit_user','auth']);
Route::get('users/{user}/delete',[App\Http\Controllers\UserController::class,'delete'])->name('users.delete')->middleware(['permission:delete_user','auth']);
Route::post('users',[App\Http\Controllers\UserController::class,'store'])->name('users.store')->middleware(['permission:store_user','auth']);

Route::put('users/{user}',[App\Http\Controllers\UserController::class,'update'])->name('users.update')->middleware(['permission:update_user','auth']);

Route::get('users/{user}',[App\Http\Controllers\UserController::class,'destroy'])->name('users.destroy')->middleware(['permission:destroy_user','auth']);


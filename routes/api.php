<?php


use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KorpaController;
use App\Http\Controllers\ProizvodController;
use App\Http\Controllers\StavkaKorpeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::resource('/korpe', KorpaController::class ) ;  
Route::resource('/stavke', StavkaKorpeController::class ) ;  
Route::get('proizvod',[ProizvodController::class,'index']);
Route::group(['middleware' => ['auth:sanctum']], function () {  //ulogovani korisnici
    Route::get('/profile', function (Request $request) {  
        return auth()->user();
    });
    Route::resource('stavkeKorpe', StavkaKorpeController::class ) ;

    Route::post('proizvod',[ProizvodController::class,'store']);
    Route::put('proizvod/{id}',[ProizvodController::class,'update']);
    Route::delete('proizvod/{id}',[ProizvodController::class,'destroy']);

    Route::get('proizvod/{id}',[ProizvodController::class,'show']);
    Route::post('logout', [AuthController::class, 'logout']);  

});
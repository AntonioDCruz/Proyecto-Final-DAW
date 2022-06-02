<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\JugadorController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\EquipoController;
use App\Http\Controllers\EntrenamientoController;
use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\PartidoController;
use App\Http\Controllers\EventoController;
use App\Http\Controllers\RivalController;
use App\Http\Controllers\PositionController;
use App\Http\Controllers\FinanzaController;
use App\Http\Controllers\MyController;





/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::get('usersEmail', [MyController::class, 'usersEmail'] );

Route::middleware('auth:sanctum')->group(function() {
    Route::get('user', [AuthController::class, 'user']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::put('users/info', [AuthController::class, 'updateInfo']);
    Route::put('users/password', [AuthController::class, 'updatePassword']);
    Route::post('email/verification-notification', [EmailVerificationController::class, 'sendVerificationEmail']);
    Route::get('verify-email/{id}/{hash}', [EmailVerificationController::class, 'verify'])->name('verification.verify');

    /* Route::get('users', [UserController::class, 'index']);
    Route::post('users', [UserController::class, 'store']);
    Route::get('users/{id}', [UserController::class, 'show']);
    Route::put('users/{id}', [UserController::class, 'update']);
    Route::delete('users/{id}', [UserController::class, 'destroy']); */

    Route::apiResource('users', UserController::class);
    Route::apiResource('roles', RoleController::class);
    Route::apiResource('jugadores', JugadorController::class);
    Route::apiResource('equipos', EquipoController::class);
    Route::apiResource('entrenamientos', EntrenamientoController::class);
    Route::apiResource('partidos', PartidoController::class);
    Route::apiResource('eventos', EventoController::class);
    Route::apiResource('positions', PositionController::class);
    Route::apiResource('rivals', RivalController::class);
    Route::apiResource('finanzas', FinanzaController::class);

    Route::get('userGames', [MyController::class, 'userGames'] );
    Route::get('userEntrenamientos', [MyController::class, 'userEntrenamientos'] );
    Route::get('userEventos', [MyController::class, 'userEventos'] );
    Route::get('userFinanzas', [MyController::class, 'userFinanzas'] );
    Route::get('usersTeam', [MyController::class, 'equipo'] );
    Route::get('rivalesEquipo', [MyController::class, 'rivalesEquipo'] );
    Route::get('jugadorUser/{id}', [MyController::class, 'jugadorUser'] );
    Route::get('permissions', [PermissionController::class, 'index'] );
    Route::post('upload', [ImageController::class, 'upload'] );

});



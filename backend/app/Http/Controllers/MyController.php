<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Equipo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class MyController extends Controller
{

    public function usersEmail(){
      $emails =  User::get('email');
      return response()->json($emails);
    }

    public function userGames(Request $request){
        $user = $request->user();

        $equipo = Equipo::find($user->equipo_id);

        $partidos = $equipo->partidos;

        return response()->json($partidos);
    }

    public function userEntrenamientos(Request $request){
        $user = $request->user();

        $equipo = Equipo::find($user->equipo_id);

        $entrenamientos = $equipo->entrenamientos;

        return response()->json($entrenamientos);
    }

    public function userEventos(Request $request){
        $user = $request->user();

        $equipo = Equipo::find($user->equipo_id);

        $eventos = $equipo->eventos;

        return response()->json($eventos);
    }

    public function userFinanzas(Request $request){
        $user = $request->user();

        $equipo = Equipo::find($user->equipo_id);

        $finanzas = $equipo->finanzas;

        return response()->json($finanzas);
    }

    public function equipo(Request $request){
        $user = $request->user();

        $equipo = Equipo::find($user->equipo_id);

        $usuarios = $equipo->usuarios;

        return response()->json($usuarios);
    }

    public function jugadorUser(Request $request, $id){
        $user = User::find($id);
        $jugador = $user->jugador;

        return response()->json($jugador);
    }

    public function rivalesEquipo(Request $request){
        $user = $request->user();

        $equipo = Equipo::find($user->equipo_id);

        $rivales = $equipo->rivals;

        return response()->json($rivales);
    }
}

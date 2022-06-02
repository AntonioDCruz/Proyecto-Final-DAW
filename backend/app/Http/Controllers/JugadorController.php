<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Jugador;
use App\Models\User;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Hash;


class JugadorController extends Controller
{
    public function index(){
        return Jugador::with('user')->paginate(10);
    }

    public function store(Request $request){

        $userV = $request->user();

        $user = User::create(
            $request->only('nombre_user', 'apellidos', 'email', 'image_user', 'salario', 'telefono')
            + ['role_id' => 3]
            + ['password' => Hash::make(1234)]
            + ['equipo_id' => $userV->equipo_id]
        );

        $jugador = Jugador::create($request->only('numero','nacionalidad', 'position_id', 'estado','fec_nac') + ['user_id' => $user->id]);


        return response($jugador, Response::HTTP_CREATED);
    }

    public function show($id){
        return Jugador::find($id);
    }

    public function update(Request $request, $id)
    {

        $jugador = Jugador::find($id);
        $user = User::find($jugador->user_id);

        $user->update($request->only('nombre_user', 'apellidos', 'email', 'image_user', 'salario', 'telefono'));
        $jugador->update($request->only('numero', 'nacionalidad', 'min_jugados', 'position_id', 'estado','fec_nac'));

        return response($jugador, Response::HTTP_ACCEPTED);

    }

    public function destroy($id)
    {
        $jugador = Jugador::find($id);
        User::destroy($jugador->user_id);

        Jugador::destroy($id);

        return \response(null, Response::HTTP_NO_CONTENT);

    }
}

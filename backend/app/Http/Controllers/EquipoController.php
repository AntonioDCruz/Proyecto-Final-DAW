<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Jugador;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Equipo;

class EquipoController extends Controller
{
    public function index(){
        return Equipo::with('usuarios')->paginate(10);
    }

    public function store(Request $request){

        $equipo = Equipo::create(
            $request->only('nombre', 'liga', 'image')
        );

        return response($equipo, Response::HTTP_CREATED);
    }

    public function show($id){
        return Equipo::find($id);
    }

    public function update(Request $request, $id)
    {

        $equipo = Equipo::find($id);

        $equipo->update($request->only('nombre', 'liga', 'image'));

        return response($equipo, Response::HTTP_ACCEPTED);

    }

    public function destroy($id)
    {
        Equipo::destroy($id);

        return \response(null, Response::HTTP_NO_CONTENT);

    }
}

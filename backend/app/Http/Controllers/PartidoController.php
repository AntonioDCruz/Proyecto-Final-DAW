<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Partido;

class PartidoController extends Controller
{
    public function index(){
        return Partido::with('equipo')->paginate(10);
    }

    public function store(Request $request){
        $userV = $request->user();

        $partido = Partido::create(
            $request->only('fecha', 'campo', 'rival_id', 'hora', 'puntos_equipo', 'puntos_rival')
            + ['equipo_id' => $userV->equipo_id]
        );

        return response($partido, Response::HTTP_CREATED);
    }

    public function show($id){
        return Partido::find($id);
    }

    public function update(Request $request, $id)
    {

        $partido = Partido::find($id);

        $partido->update($request->only('fecha', 'campo', 'rival_id', 'puntos_equipo', 'puntos_rival', 'hora'));

        return response($partido, Response::HTTP_ACCEPTED);

    }

    public function destroy($id)
    {
        Partido::destroy($id);

        return \response(null, Response::HTTP_NO_CONTENT);

    }
}

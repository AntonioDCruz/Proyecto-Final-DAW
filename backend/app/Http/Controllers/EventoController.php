<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Evento;

class EventoController extends Controller
{
    public function index(){
        return Evento::with('equipo')->paginate(10);
    }

    public function store(Request $request){
        $userV = $request->user();

        $evento = Evento::create(
            $request->only('fecha', 'titulo', 'descripcion','hora')
            + ['equipo_id' => $userV->equipo_id]
        );

        return response($evento, Response::HTTP_CREATED);
    }

    public function show($id){
        return Evento::find($id);
    }

    public function update(Request $request, $id)
    {

        $evento = Evento::find($id);

        $evento->update($request->only('fecha', 'titulo', 'descripcion', 'hora'));

        return response($evento, Response::HTTP_ACCEPTED);

    }

    public function destroy($id)
    {
        Evento::destroy($id);

        return \response(null, Response::HTTP_NO_CONTENT);

    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Entrenamiento;

class EntrenamientoController extends Controller
{
    public function index(){
        return Entrenamiento::all();
    }

    public function store(Request $request){
        $userV = $request->user();

        $entrenamiento = Entrenamiento::create(
            $request->only('fecha', 'descripcion','hora')
            + ['equipo_id' => $userV->equipo_id]
        );

        return response($entrenamiento, Response::HTTP_CREATED);
    }

    public function show($id){
        return Entrenamiento::find($id);
    }

    public function update(Request $request, $id)
    {

        $entrenamiento = Entrenamiento::find($id);

        $entrenamiento->update($request->only('fecha', 'descripcion', 'hora'));

        return response($entrenamiento, Response::HTTP_ACCEPTED);

    }

    public function destroy($id)
    {
        Entrenamiento::destroy($id);

        return \response(null, Response::HTTP_NO_CONTENT);

    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Finanza;

class FinanzaController extends Controller
{
    public function index(){
        return Finanza::all();
    }

    public function store(Request $request){
        $userV = $request->user();

        $finanza = Finanza::create(
            $request->only('tipo', 'cantidad', 'concepto')
            + ['equipo_id' => $userV->equipo_id]
        );

        return response($finanza, Response::HTTP_CREATED);
    }

    public function show($id){
        return Finanza::find($id);
    }

    public function update(Request $request, $id)
    {

        $finanza = Finanza::find($id);

        $finanza->update($request->only('tipo', 'cantidad', 'concepto'));

        return response($finanza, Response::HTTP_ACCEPTED);

    }

    public function destroy($id)
    {
        Finanza::destroy($id);

        return \response(null, Response::HTTP_NO_CONTENT);

    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Rival;

class RivalController extends Controller
{
    public function index(){
        return Rival::all();
    }

    public function store(Request $request){
        $userV = $request->user();

        $Rival = Rival::create(
            $request->only('nombre', 'image')
            + ['equipo_id' => $userV->equipo_id]
        );

        return response($Rival, Response::HTTP_CREATED);
    }

    public function show($id){
        return Rival::with('partidos')->find($id);
    }

    public function update(Request $request, $id)
    {
        $Rival = Rival::find($id);
        $Rival->update($request->only('nombre', 'image'));

        return response($Rival, Response::HTTP_ACCEPTED);

    }

    public function destroy($id)
    {
        Rival::destroy($id);

        return \response(null, Response::HTTP_NO_CONTENT);

    }
}

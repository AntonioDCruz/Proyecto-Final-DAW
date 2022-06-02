<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Position;

class PositionController extends Controller
{
    public function index(){
        return Position::all();
    }

    public function store(Request $request){
        $position = Position::create($request->only('nombre'));


        return response($position, Response::HTTP_CREATED);
    }

    public function show($id){
        return Position::with('jugadores')->find($id);
    }

    public function update(Request $request, $id)
    {
        $position = Position::find($id);
        $position->update($request->only('nombre'));

        return response($position, Response::HTTP_ACCEPTED);

    }

    public function destroy($id)
    {
        Position::destroy($id);

        return \response(null, Response::HTTP_NO_CONTENT);

    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserResource;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
        //->with('role') Buscar
    }


    public function store(Request $request)
    {

        $userV = $request->user();

        $user = User::create(
            $request->only('nombre_user', 'apellidos', 'email', 'image_user', 'salario', 'telefono')
            + ['password' => Hash::make(1234)]
            + ['equipo_id' => $userV->equipo_id]
            + ['role_id' => 2]

        );

        return response($user, Response::HTTP_CREATED);
    }


    public function show($id)
    {
        return User::with('jugador')->find($id);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);

        $user->update($request->only('nombre_user', 'apellidos', 'email', 'image_user', 'salario', 'telefono'));

        return \response($user, Response::HTTP_ACCEPTED);
    }


    public function destroy($id)
    {
        User::destroy($id);

        return \response(null, Response::HTTP_NO_CONTENT);
    }
}

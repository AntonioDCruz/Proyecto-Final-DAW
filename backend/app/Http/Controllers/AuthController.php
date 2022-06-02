<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Http\Requests\RegisterRequest;
use App\Http\Requests\UpdateInfoRequest;
use App\Http\Requests\UpdatePasswordRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Models\Equipo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $equipo = Equipo::create(
            $request->only('nombre', 'liga')
        );

        $user = User::create(
            // 'image_user', 'salario', 'telefono'
            $request->only('nombre_user', 'apellidos', 'email')
            + ['password' =>  Hash::make($request->input('password'))]
            + ['equipo_id' => $equipo->id]
            + ['role_id' => 1]
        );

        return response($user, Response::HTTP_CREATED);
    }


    public function login(Request $request){
        if (!Auth::attempt($request->only('email', 'password'))) {
            return \response([
                'error' => 'Invalid credentials!'
            ], Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user();

        $jwt = $user->createToken('token')->plainTextToken;

        $cookie = cookie('jwt', $jwt, 60 * 24);

        return \response([
            'jwt' => $jwt
        ])->withCookie($cookie);
    }

    public function user(Request $request){
        return  $request->user();
    }

    public function logout(){
        $cookie = \Cookie::forget('jwt');

        return \response([
            'message' => 'success'
        ])->withCookie($cookie);
    }

    public function updateInfo(UpdateInfoRequest $request)
    {
        $user = $request->user();

        $user->update($request->only('nombre_user', 'apellidos', 'email', 'image_user', 'salario', 'telefono'));

        return \response($user, Response::HTTP_ACCEPTED);
    }

    public function updatePassword(UpdatePasswordRequest $request)
    {
        $user = $request->user();

        $user->update([
            'password' => Hash::make($request->input('password'))
        ]);

        return \response($user, Response::HTTP_ACCEPTED);
    }
}

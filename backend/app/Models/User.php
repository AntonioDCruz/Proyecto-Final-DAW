<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $guarded = [];
    protected $hidden = ['password'];

    public function role(){
        return $this->belongsTo(Role::class);
    }

    public function jugador()
    {
      return $this -> hasOne(Jugador::class);
    }

    public function equipo()
    {
        return $this -> belongsTo(Equipo::class);
    }
}

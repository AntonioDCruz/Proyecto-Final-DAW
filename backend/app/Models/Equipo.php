<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Equipo extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function usuarios(){

        return $this->hasMany(User::class,'equipo_id');
    }

    public function entrenamientos(){

        return $this->hasMany(Entrenamiento::class,'equipo_id');
    }

    public function partidos(){

        return $this->hasMany(Partido::class,'equipo_id');
    }

    public function eventos(){

        return $this->hasMany(Evento::class,'equipo_id');
    }

    public function rivals(){
        return $this->hasMany(Rival::class,'equipo_id');
    }

    public function finanzas(){
        return $this->hasMany(Finanza::class,'equipo_id');
    }
}

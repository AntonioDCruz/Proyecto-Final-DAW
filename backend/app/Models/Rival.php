<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rival extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function partidos(){
        return $this->hasMany(Partido::class);
    }

    public function equipo()
    {
        return $this -> belongsTo(Equipo::class);
    }
}

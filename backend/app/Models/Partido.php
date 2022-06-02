<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partido extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function equipo()
    {
        return $this -> belongsTo(Equipo::class);
    }

    public function rival(){
        return $this->belongsTo(Rival::class);
    }
}

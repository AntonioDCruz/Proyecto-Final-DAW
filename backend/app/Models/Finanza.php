<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Finanza extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function equipo()
    {
        return $this -> belongsTo(Equipo::class);
    }
}

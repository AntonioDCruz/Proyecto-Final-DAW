<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::insert([
            ['nombre' => 'ver_usuarios'],
            ['nombre' => 'editar_usuarios'],
            ['nombre' => 'ver_roles'],
            ['nombre' => 'editar_roles'],
            ['nombre' => 'ver_jugadores'],
            ['nombre' => 'editar_jugadores'],
            ['nombre' => 'ver_partidos'],
            ['nombre' => 'editar_partidos'],
            ['nombre' => 'ver_entrenamientos'],
            ['nombre' => 'editar_entrenamientos'],
            ['nombre' => 'ver_eventos'],
            ['nombre' => 'editar_eventos'],
            ['nombre' => 'ver_rivales'],
            ['nombre' => 'editar_rivales'],
        ]);
    }
}

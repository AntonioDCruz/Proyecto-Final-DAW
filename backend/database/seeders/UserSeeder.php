<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
           'nombre' => 'Manager',
           'apellidos' => 'Manager',
           'email' => 'manager@admin.com',
           'role_id' => 1,
        ]);

        \App\Models\User::factory()->create([
           'nombre' => 'Entrenador',
           'apellidos' => 'Entrenador',
           'email' => 'entrenador@entrenador.com',
           'role_id' => 2,
        ]);

        \App\Models\User::factory()->create([
           'nombre' => 'Jugador',
           'apellidos' => 'Jugador',
           'email' => 'jugador@jugador.com',
           'role_id' => 3,
        ]);
    }
}

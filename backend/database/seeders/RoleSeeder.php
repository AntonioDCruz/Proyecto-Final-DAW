<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Permission;
use App\Models\Role;


class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $manager = \App\Models\Role::factory()->create([
            'nombre' => 'Manager'
        ]);

        $entrenador = \App\Models\Role::factory()->create([
            'nombre' => 'Entrenador'
        ]);

        $jugador = \App\Models\Role::factory()->create([
            'nombre' => 'Jugador'
        ]);

        $permissions = Permission::all();

        $manager->permissions()->attach($permissions->pluck('id'));

        $entrenador->permissions()->attach($permissions->pluck('id'));
        $entrenador->permissions()->detach(4);

        $jugador->permissions()->attach([1,3,5,7]);



        /* foreach ($permissions as $permission){
            DB::table('role_permissions')->insert([
                'permission_id' => $permission->id,
                'role_id' => $admin
            ])
        } */
    }
}

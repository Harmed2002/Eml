<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class ConfigPermissionRoleUserDefaultSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //rol
        $role = Role::create(['name' => 'Admin']);

        //Permisos del administrador
        $permissionsAdmin = [
            //User
            'index_user',
            'create_user',
            'destroy_user',
            'store_user',
            'update_user',
            'edit_user',
            'show_user',

            //Role
            'index_role',
            'create_role',
            'destroy_role',
            'store_role',
            'update_role',
            'edit_role',
            'show_role',

            //Permission
            'index_permission',
            //'destroy_role',
            'create_permission',
            'store_permission',
            'update_permission',
            'edit_permission',
            'show_permission',
        ];

        // Creación del usuario
        $user = User::create([
            'name' => 'Administrador',
            'email' => 'admin@eml.com',
            'password' => bcrypt('123456')
        ]);

        //Asignación de rol a usuario
        $user->assignRole('Admin');

        $user1 = User::find(1);
        $user2 = User::find(2);
        $user1->assignRole('Admin');
        $user2->assignRole('Admin');

        //Creación de permisos y asignación de permiso al rol
        foreach($permissionsAdmin as $value){
            $permission = Permission::create(['name' => $value]);
            $role->givePermissionTo($value);
        }

        //rol
        $roleBasic = Role::create(['name' => 'Basico']);

        //Permisos del usuario basico
        $permissionsBasic = [
            //User
            'index_user',
            'show_user',

            //Role
            'index_role',
            'show_role',

            //Permission
            //'destroy_role',
            'index_permission',
            'show_permission',

        ];

        // Creación del usuario
        $userBasic = User::create([
            'name' => 'Basico',
            'email' => 'basico@eml.com',
            'password' => bcrypt('123456')
        ]);

        //Asignación de rol a usuario
        $userBasic->assignRole('Basico');

        //Creación de permisos y asignación de permiso al rol
        foreach($permissionsBasic as $value){
            Permission::create(['name' => $value]);
            $roleBasic->givePermissionTo($value);
        }

    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use App\Http\Requests\RoleRequest;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = [
            "error" => true,
            "messages" => "",
            "data" => []
        ];
        try {
            $roles = Role::with('permissions')->latest()->get();
            return Inertia::render('Admin/Role/Index', ['roles' => $roles]);
        } catch (\Exception $e) {
            $result["error"]  = true;
            $result["messages"] = "Algo salió mal " . $e->getMessage() . ' ' . $e->getLine();
            return response()->json($result, 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $result = [
            "error" => true,
            "messages" => "",
            "data" => []
        ];
        try {
            $permissions = Permission::select('name as label', 'id as value')->latest()->get();
            return Inertia::render('Admin/Role/Create', ['permissions' => $permissions]);
        } catch (\Exception $e) {
            $result["error"]  = true;
            $result["messages"] = "Algo salió mal " . $e->getMessage() . ' ' . $e->getLine();
            return response()->json($result, 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RoleRequest $request)
    {

        try {

            $role = Role::create(
                [
                    'name' => $request->name,
                    'guard_name' => $request->guard_name,

                ]

            );
            foreach ($request->permissionsRol as $value) {

                $role->givePermissionTo($value['label']);
            }

            return Redirect::route('roles.index');
        } catch (\Exception $e) {
            $result["error"]  = true;
            $result["messages"] = "Algo salió mal " . $e->getMessage() . ' ' . $e->getLine();
            return response()->json($result, 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Role $role)
    {

        $result = [
            "error" => true,
            "messages" => "",
            "data" => []
        ];
        try {

            $rolePermissions = [];
            foreach ($role->permissions as $key => $value) {
                array_push($rolePermissions, ['label' => $value->name, 'value' => $value->id]);
            }

            $permissions = Permission::select('name as label', 'id as value')->latest()->get();
            return Inertia::render('Admin/Role/Edit', [
                'role' => [
                    'id' => $role->id ?? '',
                    'name' => $role->name ?? '',
                    'guard_name' => $role->guard_name ?? '',
                ],
                'permissions' => $permissions,
                'permissionRole' => $rolePermissions
            ]);
        } catch (\Exception $e) {
            $result["error"]  = true;
            $result["messages"] = "Algo salió mal " . $e->getMessage() . ' ' . $e->getLine();
            return response()->json($result, 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(RoleRequest $request, Role $role)
    {
        try {

            $role->update($request->validated());

            $requestRolePermissions = [];

            foreach ($request->permissionsRol as $key => $permission) {
                array_push($requestRolePermissions, $permission['label']);
            }

            $rolePermissions = [];
            foreach ($role->permissions as $key => $value) {
                array_push($rolePermissions, $value->name);
            }

            $results = array_diff($rolePermissions,$requestRolePermissions);

            $resultsInsert = array_diff($requestRolePermissions,$rolePermissions);

            foreach ($results as $key => $permission) {
                $role->revokePermissionTo($permission);
            }

            foreach ($resultsInsert  as $key => $permission) {
               $role->givePermissionTo($permission);
            }

            return Redirect::route('roles.index');

        } catch (\Exception $e) {
            $result["error"]  = true;
            $result["messages"] = "Algo salió mal " . $e->getMessage() . ' ' . $e->getLine();
            return response()->json($result, 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        try {

            $role->delete();
            return Redirect::route('roles.index');
        } catch (\Exception $e) {
            $result["error"]  = true;
            $result["messages"] = "Algo salió mal " . $e->getMessage() . ' ' . $e->getLine();
            return response()->json($result, 500);
        }
    }
}

<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use App\Http\Requests\PermissionRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class PermissionController extends Controller
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
            $permissions = Permission::latest()->get();
            return Inertia::render('Admin/Permission/Index', ['permissions' => $permissions]);
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
            return Inertia::render('Admin/Permission/Create');
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
    public function store(PermissionRequest $request)
    {
        try {

            Permission::create(
                $request->validated()
                // [
                //     'name' => $request->name,
                //     'guard_name' => $request->guard_name,

                // ]

            );
            return Redirect::route('permissions.index');

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
    public function edit(Permission $permission)
   {
        $result = [
            "error" => true,
            "messages" => "",
            "data" => []
        ];
        try {
            return Inertia::render('Admin/Permission/Edit', [
                'permission' => [
                    'id' => $permission->id ?? '',
                    'name' => $permission->name ?? '',
                    'guard_name' => $permission->guard_name ?? '',
                ]
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
    public function update(PermissionRequest $request, Permission $Permission)
    {
        try {
            $Permission->update($request->validated());
            return Redirect::route('permissions.index');
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
    public function destroy(Permission $permission)
    {
        try {
            $permission->delete();
            return Redirect::route('permissions.index');
          } catch (\Exception $e) {
              $result["error"]  = true;
              $result["messages"] = "Algo salió mal " . $e->getMessage() . ' ' . $e->getLine();
              return response()->json($result, 500);
          }
    }
}

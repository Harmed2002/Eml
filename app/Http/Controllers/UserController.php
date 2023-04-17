<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Http\Requests\UserRequest;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index()
    {
        $result = [
            "error" => true,
            "messages" => "",
            "data" => []
        ];

        try {
            // Ordeno alfabéticamente
            $users = User::with('roles')->orderBy('name', 'asc')->get();

            return Inertia::render('Admin/User/Index', ['users' => $users]);

        } catch (\Exception $e) {
            $result["error"]  = true;
            $result["messages"] = "Algo salió mal " . $e->getMessage() . ' ' . $e->getLine();
            return response()->json($result, 500);
        }
    }

    public function create()
    {
        $result = [
            "error" => true,
            "messages" => "",
            "data" => []
        ];

        try {
            $roles = Role::select('name as label', 'id as value')->latest()->get();

            return Inertia::render('Admin/User/Create', ['roles' => $roles]);

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
    public function store(UserRequest $request)
    {
        try {
            //dd($request->all());
            $user = User::create(
                [
                    'name' => $request->name,
                    'lastname' => $request->lastname,
                    'phone' => $request->phone,
                    'email' => $request->email,
                    'password' => Hash::make($request->password),
                ]

            );

            foreach ($request->roles as $value) {

                //$user->givePermissionTo($value['label']);
                $user->assignRole($value['label']);
            }

            return Redirect::route('users.index');

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
    public function edit(User $user)
    {
        $result = [
            "error" => true,
            "messages" => "",
            "data" => []
        ];

        try {

            $roleUsers = [];
            foreach ($user->roles as $key => $value) {
                array_push($roleUsers, ['label' => $value->name, 'value' => $value->id]);
            }

            $roles =Role::select('name as label', 'id as value')->latest()->get();
            return Inertia::render('Admin/User/Edit', [
                'user' => [
                    'id' => $user->id ?? '',
                    'name' => $user->name ?? '',
                    'lastname' => $user->lastname ?? '',
                    'phone' => $user->phone ?? '',
                    'email' => $user->email ?? '',
                ],
                'roles'=>$roles,
                'roleUsers'=>$roleUsers
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
    public function update(UserRequest $request, User $user)
    {
        try {
            //dd($request->all());
            //dd($request->validated());

            // Creo array para validar campos
            $arrValid = array();
            $arrValid = $request->validated();
            if ($arrValid){
                $user->update(
                    [
                        'name' => $request->name,
                        'lastname' => $request->lastname,
                        'phone' => $request->phone,
                        'email' => $request->email,
                        'password' => Hash::make($request->password),
                    ]

                );
            }

            $requestRoles = [];

            foreach ($request->roles as $key => $rol) {
                array_push($requestRoles, $rol['label']);
            }

            $roleUsers = [];
            foreach ($user->roles as $key => $value) {
                array_push($roleUsers, ['label' => $value->name, 'value' => $value->id]);
            }


            $results = array_diff($roleUsers, $requestRoles);

            $resultsInsert = array_diff($requestRoles, $roleUsers);

            foreach ($results as $key => $role) {
                $user->removeRole($role);
            }

            foreach ($resultsInsert  as $key => $role) {
               $user->assignRole($role);
            }
            return Redirect::route('users.index');

        } catch (\Exception $e) {
            $result["error"]  = true;
            $result["messages"] = "Algo salió mal " . $e->getMessage() . ' ' . $e->getLine();
            return response()->json($result, 500);
        }
    }


    public function delete(User $user)
    {
        //dd($user);
        $result = [
            "error" => true,
            "messages" => "",
            "data" => []
        ];

        try {
            return Inertia::render('Admin/User/Delete', [
                'user' => [
                    'id' => $user->id ?? '',
                    'name' => $user->name ?? '',
                    'lastname' => $user->lastname ?? '',
                    'phone' => $user->phone ?? '',
                    'email' => $user->email ?? '',
                ],
            ]);
        } catch (\Exception $e) {
            $result["error"]  = true;
            $result["messages"] = "Algo salió mal " . $e->getMessage() . ' ' . $e->getLine();
            return response()->json($result, 500);
        }

    }


    public function destroy(User $user)
    {

        try {
            $user->delete();

            return Redirect::route('users.index')->with('status', 'Usuario eliminado!');

          } catch (\Exception $e) {
              $result["error"]  = true;
              $result["messages"] = "Algo salió malll " . $e->getMessage() . ' ' . $e->getLine();
              return response()->json($result, 500);
          }
    }
}

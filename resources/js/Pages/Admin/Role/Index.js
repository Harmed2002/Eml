import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
// import QrCodeGenerate from "../../components/QrCode";

const Index = () => {
    const { roles,user } = usePage().props;
    return (

        <div className="mt-2">
            <div className="container mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h4>
                            <b>ROLES</b>
                        </h4>
                    </div>
                    <div className="card-body">
                        <InertiaLink
                            className="btn btn-success mb-2"
                            href={route("roles.create")}
                        >
                            <i className="fas fa-plus"></i> CREAR
                        </InertiaLink>
                        <div class="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="px-6 pt-5 pb-4">#</th>
                                    <th className="px-6 pt-5 pb-4">Nombre</th>
                                    <th className="px-6 pt-5 pb-4">Permisos</th>
                                    <th className="px-6 pt-5 pb-4">
                                       Fecha de creación
                                    </th>
                                    <th className="px-6 pt-5 pb-4">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roles.map(
                                    ({
                                        id,
                                        name,
                                        permissions,
                                        created_at
                                    }) => (
                                        <tr key={id} className="">
                                            <td className="border-t">
                                                <InertiaLink
                                                    href={route(
                                                        "roles.edit",
                                                        id
                                                    )}
                                                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                                >
                                                    {id}
                                                </InertiaLink>
                                            </td>
                                            <td className="border-t">
                                                {name}
                                            </td>
                                            <td className="border-t">
                                            {
                                                    permissions.map(
                                                ({
                                                    id,
                                                    name,
                                                }) => (

                                                    <span className="badge badge-secondary mr-1" key={id}> {name} </span>


                                                ))}
                                            </td>
                                            <td className="border-t">
                                                {created_at}
                                            </td>
                                            <td className="border-t">
                                                <InertiaLink
                                                    tabIndex="1"
                                                    className="btn btn-primary mr-2 btn-sm"
                                                    href={route(
                                                        "roles.edit",
                                                        id
                                                    )}
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </InertiaLink>

                                                {/* <InertiaLink
                                                    tabIndex="1"
                                                    className="btn btn-danger btn-sm"
                                                    href={route(
                                                        "roles.destroy",
                                                        id
                                                    )}
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </InertiaLink> */}
                                            </td>
                                        </tr>
                                    )
                                )}
                                {roles.length === 0 && (
                                    <tr>
                                        <td
                                            className="px-6 py-4 border-t"
                                            colSpan="4"
                                        >
                                            No se han encontrado datos.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;

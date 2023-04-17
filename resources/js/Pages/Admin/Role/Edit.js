import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import { MultiSelect } from "react-multi-select-component";


const Edit = () => {
    const { role,permissions,permissionRole } = usePage().props;
    const [selected, setSelected] = useState(permissionRole);
    const { data, setData, put, errors } = useForm({
        name: role.name || "",
        guard_name: role.guard_name || "",
        permissionsRol: [],
    });

    function handleSubmit(e) {
        e.preventDefault();

        data.permissionsRol = selected;
        put(route("roles.update", role.id));
    }
    function destroy() {
        if (confirm("¿Está seguro de que desea eliminar este rol?")) {
            console.log("role", role);
            Inertia.get(route("roles.destroy", role.id));
        }
    }

    return (
        <div className="mt-2">
            <div className="container mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h4>
                            <b>CREAR</b>
                            <span className="font-medium text-indigo-600">
                                /
                            </span>
                            <InertiaLink
                                href={route("roles.index")}
                                className="text-indigo-600 hover:text-indigo-700"
                            >
                                <b>ROLES</b>
                            </InertiaLink>
                        </h4>
                    </div>
                    <div className="card-body">
                        <form name="EditForm" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-12 col-sm-6 mb-3">
                                    <label className="">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        label="Title"
                                        name="name"
                                        errors={errors.name}
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        placeholder="Digite el nombre"
                                    />
                                    <span className="text-red">
                                        {errors.name}
                                    </span>
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <label className="">Permisos</label>
                                    {/* <pre>{JSON.stringify(selected)}</pre> */}
                                    <MultiSelect
                                        name="permissionsRol"
                                        options={permissions}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy={
                                            "Selecccionar uno o varios permisos"
                                        }
                                    />
                                </div>
                            </div>

                            <hr></hr>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="btn btn-success mb-2"
                                >
                                    <i className="fas fa-save"></i> Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;

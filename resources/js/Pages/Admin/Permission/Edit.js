import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

const Edit = () => {
    const { permission } = usePage().props;
    const { data, setData, put, errors } = useForm({
        name: permission.name || "",
        guard_name:permission.guard_name || ""

    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("permissions.update", permission.id));
    }
    function destroy() {
        if (confirm("¿Está seguro de que desea eliminar este permiso?")) {
            console.log("permission", permission);
            Inertia.get(route("permissions.destroy", permission.id));
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
                                href={route("permissions.index")}
                                className="text-indigo-600 hover:text-indigo-700"
                            >
                                <b>PERMISOS</b>
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
                                <label className="">Acción</label><br/>
                                    <button
                                        type="submit"
                                        className="btn btn-success mb-2"
                                    >
                                        <i className="fas fa-save"></i> Guardar
                                    </button>
                                </div>
                            </div>

                            <hr></hr>
                            {/* <div className="mt-4">

                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;

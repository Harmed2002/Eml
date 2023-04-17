import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";

const Create = () => {
    const { data, setData, errors, post } = useForm({
        name: "",
        guard_name:"web"
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("permissions.store"));
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
                        <form name="createForm" onSubmit={handleSubmit}>
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

export default Create;

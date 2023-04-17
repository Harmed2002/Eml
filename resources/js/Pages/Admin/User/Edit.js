import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import { MultiSelect } from "react-multi-select-component";
import Swal from 'sweetalert2';

const Edit = () => {
    const { user, roles, roleUsers } = usePage().props;
    const { data, setData, put, errors } = useForm({
        name: user.name || "",
        lastname: user.lastname || "",
        phone: user.phone || "",
        email: user.email || "",
        password: user.password || "",
        password_confirmation: user.password_confirmation || "",
        roles: [],

    });
    const [selected, setSelected] = useState(roleUsers);

    function handleSubmit(e) {
        e.preventDefault();
        data.roles = selected;
        put(route("users.update", user.id));
        //Swal.fire('Aviso!', 'El usuario ha sido actualizado exitosamente.', 'success')
    }

    return (
        <div className="mt-2">
            <div className="container mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h4><i className='fas fa-user-edit'></i>
                            <b> Editar</b><span className="font-medium text-indigo-600">/</span>
                            <InertiaLink href={route("users.index")} className="text-indigo-600 hover:text-indigo-700">
                                <b>Usuario</b>
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
                                        label="Name"
                                        name="name"
                                        errors={errors.name}
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        placeholder="Digite el nombre"
                                    />
                                    <span className="text-red">{errors.name}</span>
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <label className="">Apellidos</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        label="Apellido"
                                        name="lastname"
                                        errors={errors.lastname}
                                        value={data.lastname}
                                        onChange={(e) =>
                                            setData("lastname", e.target.value)
                                        }
                                        placeholder="Digite el(los) apellido(s)"
                                    />
                                    <span className="text-red">{errors.lastname}</span>
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <label className="">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        label="email"
                                        name="email"
                                        errors={errors.email}
                                        value={data.email}
                                        placeholder="Digite el email"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                    <span className="text-red">{errors.email}</span>
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <label className="">Teléfono</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        label="Telefono"
                                        name="phone"
                                        errors={errors.phone}
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                        placeholder="Digite el teléfono"
                                    />
                                    <span className="text-red">{errors.phone}</span>
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <label className="">Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        label="password"
                                        name="password"
                                        errors={errors.password}
                                        value={data.password}
                                        placeholder="Digite la contraseña"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                    <span className="text-red">{errors.password}</span>
                                </div>

                                <div className="col-12 col-sm-6 mb-3">
                                    <label className="">
                                        Confirmar contraseña
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        label="Confirmar contraseña"
                                        name="password_confirmation"
                                        errors={errors.password_confirmation}
                                        value={data.password_confirmation}
                                        placeholder="Confirme la contraseña"
                                        onChange={(e) =>
                                            setData("password_confirmation", e.target.value)
                                        }
                                    />
                                    <span className="text-red">{errors.password_confirmation}</span>
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <label className="">Roles</label>
                                    {/* <pre>{JSON.stringify(selected)}</pre> */}
                                    <MultiSelect
                                        name="roles"
                                        options={roles}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy={
                                            "Selecccionar uno o varios roles"
                                        }
                                    />
                                </div>
                            </div>

                            <hr></hr>
                            <div className="mt-4">
                                <button type="submit" className="btn btn-success mb-2">
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

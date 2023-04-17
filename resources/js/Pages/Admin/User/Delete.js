import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
//import { MultiSelect } from "react-multi-select-component";
import Swal from 'sweetalert2';

const Edit = () => {
    const { user } = usePage().props;
    const { data, setData, get, errors } = useForm({
        id: user.id || "",
        name: user.name || "",
        lastname: user.lastname || "",
        phone: user.phone || "",
        email: user.email || "",
    });

    function handleSubmit(e) {
        e.preventDefault();

        Swal.fire({
            title: '¿Está ud. seguro?',
            text: "¡Esta operación no se podrá revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Anular!'
        }).then((result) => {
        if (result.isConfirmed) {
            get(route("users.destroy", user.id));
            Swal.fire('Anulado!', 'Este usuario ha sido anulado exitosamente.', 'success')
        }
        })

    }

    const handleClick = () => {
        Swal.fire(
            'The Internet?',
            'That thing is still around?',
            'question'
          )
    }

    return (
        <div className="mt-2">
            <div className="container mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h4><i className='fas fa-user-times'></i>
                            <b> Eliminar</b><span className="font-medium text-indigo-600">/</span>
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
                                        disabled="true"
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
                                        disabled="true"
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
                                        disabled="true"
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
                                        disabled="true"
                                        errors={errors.phone}
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                        placeholder="Digite el teléfono"
                                    />
                                    <span className="text-red">{errors.phone}</span>
                                </div>
                            </div>

                            <hr></hr>
                            <div className="mt-4">
                                <button type="submit" className="btn btn-danger mb-2">
                                    <i className="fas fa-trash"></i> Confirme la Eliminación
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

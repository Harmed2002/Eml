import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import moment from "moment";

const Index = () => {
    const { users } = usePage().props;
    const { data } = users;

    function formatDate(dateField){
        const date = dateField;
        //const formattedDate = moment(date).format("MMMM Do YYYY, h:mm:ss a");
        const formattedDate = moment(date).format("YYYY-MM-DD");
        return formattedDate;
    }

    return (
        <div className="mt-2">
            <div className="container mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h4><i className='fas fa-users'></i><b> Gestión de Usuarios</b></h4>
                    </div>
                    <div className="card-body">
                        <InertiaLink className="btn btn-success mb-2" href={route("users.create")}>
                            <i className="fas fa-plus"></i> Crear
                        </InertiaLink>
                        <div class="table-responsive">
							<table className="table">
								<thead>
									<tr>
										<th className="px-6 pt-5 pb-4">#</th>
										<th className="px-6 pt-5 pb-4">Nombre</th>
										<th className="px-6 pt-5 pb-4">Apellido</th>
										<th className="px-6 pt-5 pb-4">Teléfono</th>
										<th className="px-6 pt-5 pb-4">Email</th>
										<th className="px-6 pt-5 pb-4">Roles</th>
										<th className="px-6 pt-5 pb-4">Registro</th>
										<th className="px-6 pt-5 pb-4">Últ. Modif.</th>
										<th className="px-6 pt-5 pb-4">Acciones</th>
									</tr>
								</thead>
								<tbody>
									{users.map(
										({id, name,
                                            lastname,
                                            phone,
											email,
											created_at,
                                            updated_at,
											roles
										}) => (
											<tr key={id} className="">
												<td className="border-t">
													<InertiaLink href={route("users.edit", id)} className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
														{id}
													</InertiaLink>
												</td>
												<td className="border-t">{name}</td>
                                                <td className="border-t">{lastname}</td>
                                                <td className="border-t">{phone}</td>
												<td className="border-t">{email}</td>
												<td className="border-t">
													{
														roles.map(
													({
														id, name,
													}) => (
														<span className="badge badge-primary" key={id}>{name}</span>
													))}
												</td>
												<td className="border-t">
                                                    {formatDate(created_at)}

												</td>
                                                <td className="border-t">
													{formatDate(updated_at)}
												</td>
												<td className="border-t">
													<InertiaLink tabIndex="1" className="btn btn-primary mr-2 btn-sm" href={route("users.edit", id)}>
														<i className="fas fa-edit"></i>
													</InertiaLink>

                                                    <InertiaLink tabIndex="2" className="btn btn-danger btn-sm" href={route("users.delete", id)}>
														<i className="fas fa-trash"></i>
													</InertiaLink>

												</td>
											</tr>
										)
									)}
									{users.length === 0 && (
										<tr>
											<td className="px-6 py-4 border-t" colSpan="4">
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

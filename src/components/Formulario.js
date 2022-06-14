import React, { Fragment } from "react";

import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

const Formulario = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {

        console.log(JSON.stringify(data))
        reset();
        Swal.fire({
            title: 'Usuario registrado con Exito.',
            icon:"success",
            padding: '3em',
            color: ' #07bd20 '
          })
    }


    return (
        <Fragment>
            <div className="row justify-content-center ">
                <div className="col-md-8 col-lg-7 col-xl-4 bg-register mt-5 ">
                    <h1 className="m-5 text-center">Registrar Usuario</h1>

                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div className="form-group mt-3  ">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control "
                                    {...register("name",{required:"El nombre es requerido"})}

                                />
                                <span className="text-danger text-small d-block mb-2">
                                    {errors?.name?.message}
                                </span>
                                <label >Nombre</label>

                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control "
                                    {...register("lastName",{required:"El apellido es requerido"})}
                                />
                                 <span className="text-danger text-small d-block mb-2">
                                    {errors?.lastName?.message}
                                </span>
                                <label >Apellidos</label>

                            </div>

                            <div className="form-floating mb-3">
                                <input type="email" className="form-control mb-3" id="floatingInput"
                                    {...register("email",{required:"El email es requerido"})}
                                />
                                 <span className="text-danger text-small d-block mb-2">
                                    {errors?.email?.message}
                                </span>
                                <label >Correo</label>

                            </div>

                            <div className="form-floating mb-3">
                                <input type="password" className="form-control " id="floatingPassword"
                                    {...register("password", {required:"La contraseña es requerido"})}
                                />
                                 <span className="text-danger text-small d-block mb-2">
                                    {errors?.password?.message}
                                </span>
                                <label >Contraseña</label>

                            </div>


                            <div className="m-5 text-center">
                                <button className="btn btn-danger col-6" >Registrarse</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </Fragment>
    );

}

export default Formulario;


import React, { Fragment} from "react";
import { Form, Input, Label, Row, Col, FormGroup, Button } from 'reactstrap'
import { useForm } from "react-hook-form";
const Formulario = () => {

    const {register, errors, handleSubMit} = useForm();

    const onSubmit =(data)=>{
        console.log(data)
    }


    return (
        <Fragment>
            <div className="row justify-content-center">
                <div className='col-md-8 col-lg-7 col-xl-5 bg-register mt-5 '>
                    <Row>
                        <Col xs="3"></Col>
                        <Col xs="6">
                            <h1 className='mt-5 text-center'>REGISTRO</h1>
                            <Form onSubmit={handleSubMit(onSubmit)}>
                                <FormGroup>
                                    <Label>Nombre: </Label>
                                    <Input className='col-2' type="text" name="name"
                                     ref={
                                        register({
                                            required:{value:true, message: 'Nombre Obligatorio'}
                                        })
                                     }
                                     />
                                     <span className="text-danger text-small d-block mb-2">
                                         {errors?.name?.message}
                                     </span>
                                </FormGroup>
                                <FormGroup>
                                    <Label >Apelidos: </Label>
                                    <Input type="text" name="lastName" 
                                     
                                     />
                                </FormGroup>
                                <FormGroup>
                                    <Label >Correo: </Label>
                                    <Input type="text" name="email" 
                                     
                                     />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Contraseña: </Label>
                                    <Input type="password" name="password" 
                                     
                                     />
                                </FormGroup>
                                <FormGroup className='mt-5 text-center'>
                                    <Button color='success' type="submit"  >Guardar Registro</Button>
                                </FormGroup>


                            </Form>

                        </Col>

                    </Row>

                </div>

            </div>
        </Fragment>
    );

}

export default Formulario;


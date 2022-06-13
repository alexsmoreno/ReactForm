import React, { Fragment, useState } from "react";
import { Form, Input, Label, Row, Col, FormGroup, Button } from 'reactstrap'
const Formulario = () => {
    const [data, setData ] = useState({
        name: '',
        lastName: '',
        email: '',
        password: ''
    })
 
    const handleInputChange = (event) =>{
       // console.log(event.target.value);
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const sendData =(event) =>{
        event.preventDefault();
        console.log(data.name)
    }



    return (
        <Fragment>
            <div className="row justify-content-center">
                <div className='col-md-8 col-lg-7 col-xl-5 bg-register mt-5 '>
                    <Row>
                        <Col xs="3"></Col>
                        <Col xs="6">
                            <h1 className='mt-5 text-center'>REGISTRO</h1>
                            <Form onSubmit={sendData}>
                                <FormGroup>
                                    <Label>Nombre: </Label>
                                    <Input className='col-2' type="text" name="name"
                                     onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label >Apelidos: </Label>
                                    <Input type="text" name="lastName" 
                                     onChange={handleInputChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label >Correo: </Label>
                                    <Input type="text" name="email" 
                                     onChange={handleInputChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Contraseña: </Label>
                                    <Input type="password" name="password" 
                                     onChange={handleInputChange}/>
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


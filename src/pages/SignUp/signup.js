import React, { useState } from 'react';
import './signup.css'
import { Col, Form, Row } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import CountrySelect from '../../components/UserProfile/countryDropDown';
import { FormControlLabel, Radio, RadioGroup, Switch } from '@mui/material';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';

const SignUp = () => {

    const [name, setName] = useState('');
    const [emil, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [path, setPath] = useState('');
    const [conf, setConf] = useState('');
    const [phone, setPhone] = useState('');
    const history=useHistory();


    
    let form = new FormData()
    function submitData(e) {

        e.preventDefault()

        form.append('userName', name)
        form.append('userEmail', emil)
        form.append('userPassword', pass)
        form.append('userProfileImagePath', path)
        form.append('userAge', conf)
        form.append('phoneNumber', phone)
// console.dir(form);
        axios.post('http://localhost:3000/user-register', form).then(result =>
         {
            // console.log(result);
        //     if(result.status == 201){
        //         history.push("/Login");
        // }
    }
         )
    }

    return (
        <>
            <Col className="col-lg-5 col-md-6 col-sm-9 m-auto">
                <ListGroup
                    className="listStyle m-3 col" as="ul">
                    <ListGroup.Item className="aa cardhead listgroupItem" as="li">
                        <p className="text-center text-light cardhead"> Signup</p>
                    </ListGroup.Item>

                    <ListGroup.Item >

                        <Form onSubmit={(e) => submitData(e)}>
                            <Form.Group
                            >
                                <Form.Label column className="mx-4" >
                                    Name
                                </Form.Label>
                                <Col className=" mx-2" >
                                <input    />

                                    <Form.Control
                                        type="text"
                                        placeholder={"name"}
                                        name='userName'
                                        required
                                        onChange={e => setName(e.target.value)}                                    />
                                </Col>
                                {/* <small className="text-danger">{err.errorPassword}</small> */}
                                {/* </Row> */}
                            </Form.Group>

                            <Form.Group
                            >
                                <Form.Label column className="mx-4" >
                                    Email
                                </Form.Label>
                                <Col className=" mx-2" >
                                    <Form.Control
                                        type="text" 
                                        placeholder={"email"}
                                        name='userEmail'
                                        required
                                        onChange={e => setEmail(e.target.value)} 
                                    />
                                </Col>
                                {/* <small className="text-danger">{err.errorPassword}</small> */}
                                {/* </Row> */}
                            </Form.Group>

                            <Form.Group
                            >
                                <Form.Label column className="mx-4" >
                                    phone number
                                </Form.Label>
                                <Col className=" mx-2" >
                                    <Form.Control
                                        type="text" 
                                        placeholder={"phone number"}
                                        name='phoneNumber'
                                        required
                                        
                                        onChange={e => setPhone(e.target.value)} 
                                    />
                                </Col>
                                {/* <small className="text-danger">{err.errorPassword}</small> */}
                                {/* </Row> */}
                            </Form.Group>



                            <Form.Group
                            // as={Row} className="mb-3" controlId="formPlaintextPassword"
                            >
                                <Form.Label column className="mx-4">
                                    Password
                                </Form.Label>
                                <Col className="mx-2">

                                    <Form.Control
                                        onChange={e => setPassword(e.target.value)}
                                        type="password"
                                        placeholder={"password"}
                                        name='userPassword'
                                        required
                                    />

                                </Col>

                            </Form.Group>

                            <Form.Group
                            // as={Row} className="mb-3" controlId="formPlaintextPassword"
                            >
                                <Form.Label column className="mx-4">
                                    Confirm Password
                                </Form.Label>
                                <Col className="mx-2">
                                    <Form.Control
                                        onChange={e => setConf(e.target.value)}
                                        type="password"
                                        placeholder={"conf"}
                                        name='userAge'
                                        required
                                    />

                                </Col>

                            </Form.Group>

                            <Form.Group
                            // as={Row} className="mb-3" controlId="formPlaintextPassword"
                            >
                                <Form.Label column className="mx-4">
                                    UPLOAD IMAGE
                                </Form.Label>
                                <Col className="mx-2">

                                <input onChange={e => setPath(e.target.files[0])} type="file" name='userProfileImagePath' />


                                </Col>

                            </Form.Group>

                            <Col className="text-center ">
                                    <div className="d-grid gap-2 p-2">


                                        <Button 
                                        type='submit' 
                                        variant="danger" 
                                        className=' rounded-2' 
                                        size="sm"
                                        
                                        >
                                            Sign Up
                                        </Button>

                                    </div>


                                </Col>


                        </Form>


















                    </ListGroup.Item>

                </ListGroup>
            </Col>

        </>
    );
}
export default SignUp;
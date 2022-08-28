import './userprofile.css';
import React, { Component, useEffect } from 'react';
import { useState } from "react";

import { Button, Col, Form, Row, Container, } from 'react-bootstrap';
// import { CardActions, CardContent } from '@mui/material';
import ListGroup from 'react-bootstrap/ListGroup';
// date picker import 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CountrySelect from './countryDropDown';
import Sidebar from './SideBar/sidebar';
import axios from 'axios';

// country drop down import 

const UserProfile = () => {
    // const [startDate, setStartDate] = useState(new Date());
    const [name, setName] = useState('');
    const [emil, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [img, setImg] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');
    // const [phoneNumber, setPhone] = useState('');
    
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('itemsId'));
        const items1 = JSON.parse(localStorage.getItem('itemsToken'));
        axios({
            url: `http://localhost:3000/user-profile/${items}`,
            method: 'get',
            headers: {
                'User-Token': items1,
            }
        })
            .then(response => {
                console.log(response.data.body);
                console.log(response.data.body['userName']);
                console.log(response.data.body['userEmail']);
                console.log(response.data.body['userAge']);
                console.log(response.data.body['userPassword']);
                console.log(response.data.body['userProfileImagePath']);
                setName(response.data.body['userName'])
                setEmail(response.data.body['userEmail'])
                setPassword(response.data.body['userPassword'])
                setAge(response.data.body['userAge'])
                setImg(response.data.body['userProfileImagePath'])
                setId(response.data.body['_id'])
                // setPhone(response.data.body['phoneNumber'])
                console.log(name)
            })
            .catch(err => {
                // console.log(err);
            });
    }, []);
    let form = new FormData()
    function submitData(e) {

        e.preventDefault()

        form.append('userName', name)
        form.append('userEmail', emil)
        form.append('userPassword', pass)
        form.append('userProfileImagePath', img)
        form.append('userAge', age)
        // form.append('phoneNumber', phoneNumber)

        const items1 = JSON.parse(localStorage.getItem('itemsToken'));

        axios.post(`http://localhost:3000/user-edit-profile/${id}`, 
        form,
        {headers: {
            'User-Token': items1,
            // 'langexample':localStorage.getItem('i18Next')
        }}
        ).then(result =>
         {
            console.log(result);
        //     if(result.status == 201){
        //         history.push("/Login");
        // }
    }
         )
    }
    return (
        <>
            <Container>
               
                <Row>
                    <Col sm={4}>
                        <Sidebar />

                    </Col>


                    <Col sm={8}>

                        <ListGroup className=' m-3 col-6' as="ul">
                            {/* action href="/userprofile" */}
                            <ListGroup.Item className='cardhead aaa' as="li"  >

                                <p className='text-center text-light cardhead'> Manage Profile</p>
                            </ListGroup.Item>


                            <ListGroup.Item className='' as="li">


                                <Form onSubmit={(e) => submitData(e)}>
                                    <Form.Group
                                    // as={Row} className="mb-3" controlId="formPlaintextEmail"
                                    >

                                        <Row className='p-3 mx-2'>
                                            <Form.Label column sm="3">
                                                Your Name
                                            </Form.Label>
                                            <Col sm="9">
                                                <Form.Control
                                                    type="text"
                                                    placeholder=" name"
                                                    value={name}
                                                    name="name"
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                />
                                            </Col>
                                            {/* <small className="text-danger">{err.errorPassword}</small> */}

                                        </Row>

                                    </Form.Group>

                                    <Form.Group
                                    // as={Row} className="mb-3" controlId="formPlaintextPassword"
                                    >
                                        <Row className='p-3  mx-2'>
                                            <Form.Label column sm="3">
                                                Email Address
                                            </Form.Label>
                                            <Col sm="9">
                                                <Form.Control
                                                    type="email"
                                                    placeholder=" email"
                                                    value={emil}
                                                    name="email"
                                                onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </Col>
                                            {/* <small className="text-danger">{err.errorPassword}</small> */}

                                        </Row>

                                    </Form.Group>


                                    <Form.Group
                            >
                                {/* <Form.Label column className="mx-4" >
                                    phone number
                                </Form.Label>
                                <Col className=" mx-2" >
                                    <Form.Control
                                        type="text" 
                                        placeholder={"phone number"}
                                        name='phoneNumber'
                                        required
                                        value={phoneNumber}
                                        onChange={e => setPhone(e.target.value)} 
                                    />
                                </Col> */}
                                {/* <small className="text-danger">{err.errorPassword}</small> */}
                                {/* </Row> */}
                            </Form.Group>

                                    <Form.Group
                                    // as={Row} className="mb-3" controlId="formPlaintextEmail"
                                    >
                                        <Row className="p-3">
                                            <Form.Label column sm="3">
                                                Password
                                            </Form.Label>
                                            <Col sm="9">
                                                <Form.Control
                                                    type="password"
                                                    placeholder=" Password"
                                                    value={pass}
                                                    name="password"
                                                    required
                                                    onChange={e => setPassword(e.target.value)} 

                                                />
                                            </Col>
                                        </Row>
                                    </Form.Group>




                                    <Form.Group
                                    // as={Row} className="mb-3" controlId="formPlaintextPassword"
                                    >
                                        <Row className='p-3  mx-2'>
                                            <Form.Label column sm="3">
                                                age
                                            </Form.Label>
                                            <Col sm="9">
                                                <Form.Control
                                                    type="text"
                                                    placeholder=" age"
                                                    value={age}
                                                    name="age"
                                                    onChange={e => setAge(e.target.value)} 
                                                />
                                            </Col>
                                            {/* <small className="text-danger">{err.errorPassword}</small> */}

                                        </Row>

                                    </Form.Group>

                                    <Form.Group
                            // as={Row} className="mb-3" controlId="formPlaintextPassword"
                            >
                                <Form.Label column className="mx-4">
                                    UPLOAD IMAGE
                                </Form.Label>
                                <Col className="mx-2">

                                <input
                                onChange={e => setImg(e.target.files[0])} 
                                type="file" name='userProfileImagePath' />


                                </Col>

                            </Form.Group>

                                    <Form.Group
                                    // as={Row} className="mb-3" controlId="formPlaintextPassword"
                                    >

                                        <Row className='p-3 mx-2'>
                                            <Col className='text-center mx-4' >
                                                <Button className='mx-5 bg-danger text-light btn btn-group' type="submit" variant="contained">Save</Button>
                                                <Button variant="contained  ">Cancel</Button>

                                            </Col>
                                        </Row>

                                    </Form.Group>
                                </Form>                    </ListGroup.Item>



                        </ListGroup>
                    </Col>
                </Row>
            </Container>


        </>
    );
}
export default UserProfile;
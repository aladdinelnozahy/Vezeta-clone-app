import './userprofile.css';
import React, { Component } from 'react';
import { useState } from "react";

import { Button, Col, Form, Row ,Container,} from 'react-bootstrap';
// import { CardActions, CardContent } from '@mui/material';
import ListGroup from 'react-bootstrap/ListGroup';
// date picker import 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CountrySelect from './countryDropDown';
import Sidebar from './SideBar/sidebar';

// country drop down import 

const UserProfile = () => {
    const [startDate, setStartDate] = useState(new Date());

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

                    <Form>
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
                                        // value={user.userPassword}
                                        name="name"
                                        // onChange={(e) => inputChange(e)}
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
                                        // value={user.userPassword}
                                        name="email"

                                    // onChange={(e) => inputChange(e)}
                                    />
                                </Col>
                                {/* <small className="text-danger">{err.errorPassword}</small> */}

                            </Row>

                        </Form.Group>

                        <Form.Group
                        // as={Row} className="mb-3" controlId="formPlaintextPassword"
                        >
                            <Row className='p-3 mx-2'>
                                <Form.Label column sm="3">
                                    Mobile Number
                                </Form.Label>
                                <Col lg="9">
                                    {/* <Form.Control
                                        type="text"
                                        placeholder="Mobile"
                                        // value={user.confirmPassword}
                                        name="Mobile"
                                    // onChange={(e) => inputChange(e)}
                                    /> */}
                                    <CountrySelect />
                                </Col>
                                {/* <small className="text-danger">{err.errorConfirmation}</small> */}

                            </Row>
                        </Form.Group>
                        <Form.Group
                        >
                            <Row className='p-3 mx-2'>
                                <Form.Label column sm="3">
                                    Birth Date
                                </Form.Label>
                                <Col lg="9">
                                    {/* <Form.Control
                                        type="password"
                                        placeholder="birthday"
                                        // value={user.confirmPassword}
                                        name="birthday"
                                    // onChange={(e) => inputChange(e)}
                                    /> */}
                                    {/* <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} name="birthday" placeholder={startDate}  /> */}
                                    <Form.Group controlId="duedate">
                                        <Form.Control type="date" name="duedate" placeholder="Due date" />

                                    </Form.Group>

                                </Col>
                                {/* <small className="text-danger">{err.errorConfirmation}</small> */}
                            </Row>

                        </Form.Group>
                        <Form.Group
                        >
                            <Row className='p-3 mx-2'>
                                <Form.Label column sm="3">
                                    Area
                                </Form.Label>
                                <Col lg="9">
                                    <Form.Control
                                        type="password"
                                        placeholder="area"
                                        // value={user.confirmPassword}
                                        name="area"
                                    // onChange={(e) => inputChange(e)}
                                    />
                                </Col>
                                {/* <small className="text-danger">{err.errorConfirmation}</small> */}

                            </Row>


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
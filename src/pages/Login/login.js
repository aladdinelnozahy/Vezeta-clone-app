import React from 'react';
import './login.css'
import { Col, Form, Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Button from 'react-bootstrap/Button';
import Links from '../../components/Footer/links'
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import CountrySelect from '../../components/UserProfile/countryDropDown';

const Login = () => {


    return (
        <>
            <Col xs={3} className=" m-auto">
                <ListGroup
                    className="listStyle m-3 col" as="ul">
                    <ListGroup.Item className="aa cardhead listgroupItem" as="li">
                        <p className="text-center text-light cardhead"> Login</p>
                    </ListGroup.Item>

                    <ListGroup.Item >
                        <Form>
                            <Form.Group
                            >
                                <Form.Label column className="mx-4" >
                                    Mobile or Email
                                </Form.Label>
                                <Col className=" mx-2" >

                                    <CountrySelect />
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
                                        type="password"
                                        placeholder="Password"
                                        name="confirmation"
                                        required
                                    />

                                </Col>


                                <Col className="text-center ">
                                    <div className="d-grid gap-2 p-2">
                                        <Button href="/Home" variant="danger" className=' rounded-2' size="sm">
                                            Login
                                        </Button>

                                    </div>


                                </Col>
                                <Row className='p-2'>
                                    <Col>
                                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                                            <Col sm={{ span: 10, offset: 2 }}>
                                                <Form.Check label="Remember me" />
                                            </Col>

                                        </Form.Group>

                                    </Col>
                                    <Col>
                                        <a className="forgetpass" href="https://www.vezeeta.com/en/Account/ForgotPassword" name="Forget Password?">Forget Password?</a>
                                    </Col>

                                </Row>
                                {/* <div className='containeer'>
                                    <div className='lines'>
                                        <div className='line'>
                                            <div className='circle'>
                                                <p className='text-center m-auto'>or</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='container px-5'>
                                    <a href="#" className="fb btnn">
                                        <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                                    </a>

                                </div> */}
                                <div className='container'>
                                <Row className='mx-2'>
                                    <Col >
                                    <p>New User? </p>
                                    </Col>
                                    <Col >
                                    <a  href="https://www.vezeeta.com/en/Account/SignUp">Sign up</a>
                                    </Col>
                                </Row>

                                </div>
                            </Form.Group>
                        </Form>
                    </ListGroup.Item>
                </ListGroup>
            </Col>

        </>
    );
}
export default Login;
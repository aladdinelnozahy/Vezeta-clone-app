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
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {







    const [emil, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [Id, setId] = useState('');
    const [userToken, setuserToken] = useState('');
    const history=useHistory();



    function submitData(e) {
        e.preventDefault()
        let x = { userEmail: emil, userPassword: pass }
        console.log(x)
        axios.post('http://localhost:3000/user-login', x).then(function (response) {
            // console.log(response.headers);
            // console.log(response.data.body._id);
            // console.log(response.headers['user-token']);
            // setId(response.data.body._id)
            // setuserToken(response.headers['user-token'])
            localStorage.setItem('itemsId', JSON.stringify(response.data.body._id));
            localStorage.setItem('itemsToken', JSON.stringify(response.headers['user-token']));
            if(response.status == 200){
                history.push("/UserProfile");
        }
        },
        )
    }



    // const [userPassword, setPassword] = useState('');
    // const [userEmail, setEmail] = useState('');

    return (
        <>
            <Col xs={3} className=" m-auto">
                <ListGroup
                    className="listStyle m-3 col" as="ul">
                    <ListGroup.Item className="aa cardhead listgroupItem" as="li">
                        <p className="text-center text-light cardhead"> Login</p>
                    </ListGroup.Item>

                    <ListGroup.Item >
                        <Form onSubmit={(e) => submitData(e)}>
                            <Form.Group
                            >
                                <Form.Label column className="mx-4" >
                                    Email
                                </Form.Label>
                                <Col className=" mx-2" >
                                    <Form.Control
                                        type="email"
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


                                <Col className="text-center ">
                                    <div className="d-grid gap-2 p-2">


                                        <Button 
                                        type='submit' 
                                        variant="danger" 
                                        className=' rounded-2' 
                                        size="sm"
                                        
                                        >
                                            Login
                                        </Button>

                                    </div>


                                </Col>

                                <div className='container'>
                                    <Row className='mx-2'>
                                        <Col >
                                            <p>New User? </p>
                                        </Col>
                                        <Col >
                                            <a href="/Register">Sign up</a>
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
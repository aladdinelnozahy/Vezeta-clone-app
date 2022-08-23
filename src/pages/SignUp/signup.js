import React, { useState } from 'react';
import './signup.css'
import { Col, Form, Row } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import CountrySelect from '../../components/UserProfile/countryDropDown';
import { FormControlLabel, Radio, RadioGroup, Switch } from '@mui/material';

const SignUp = () => {
    const [user, setUser] = useState({
        userName: "",
        userPhone:"",
        userEmail: "",
        userPass: "",
        
      });
    
      const [err, setError] = useState({
        userNameError: null,
        userPhoneError: null,
        userEmailError: null,
        userPassError: null,
      });
    
      const inputChange = (evt) => {
        const passRegex = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$');
        if (evt.target.name == "userName") {
          if (evt.target.value.length < 10) {
            setUser({
              ...user,
              userName: evt.target.value,
            });
          }
    
          setError({
            ...err,
            errorName: (evt.target.value == user.userPassword) ? "" : "can't be embty"

            // userNameError:
            //   evt.target.value.length == 0
            //     ? "this field is required"
            //     : evt.target.value.length > 10
            //     ? "max length should be 10 characters"
            //     : null,
          });
        } else if (evt.target.name == "userEmail") {
          setUser({
            ...user,
            userEmail: evt.target.value,
          });
        }
    
      };
    
    const handleSubmit=(e)=>{
    
      e.preventDefault();
    
    }
    // -------------------
    const label = { inputProps: { 'aria-label': 'Switch demo' } };


    return (
        <>
        {/* sm={6} lg={3}  */}
        
        <Col className="col-lg-5 col-md-6 col-sm-9 m-auto">
                <ListGroup
                    className="listStyle m-3 col" as="ul">
                    <ListGroup.Item className="aa cardhead listgroupItem" as="li">
                        <p className="text-center text-light cardhead"> Signup</p>
                    </ListGroup.Item>

                    <ListGroup.Item >
                        <Form>
                            <Form.Group
                            >
                                <div className='container px-5 p-3'>
                                    <a href="#" className="fb btnn">
                                        <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                                    </a>
                                </div>
                                <div className='containeer'>
                                    <div className='lines'>
                                        <div className='line'>
                                            <div className='circle'>
                                                <p className='text-center m-auto'>or</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


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
                                                placeholder=" First Name and Last Name"
                                                // value={user.userPassword}
                                                name="userName"
                                                onChange={(e) => inputChange(e)}
                                                required
                                            />
                                        </Col>
                                        <small className="text-danger">{err.errorPassword}</small>

                                    </Row>
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
                                        <small className="text-danger">{err.errorConfirmation}</small>

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
                                                name="userEmail"

                                            // onChange={(e) => inputChange(e)}
                                            />
                                        </Col>
                                        <small className="text-danger">{err.errorPassword}</small>

                                    </Row>

                                </Form.Group>

                                <Form.Group
                                // as={Row} className="mb-3" controlId="formPlaintextPassword"
                                >


                                </Form.Group>
                                <Form.Group>

                                    <Row className='p-3 mx-2'>
                                        <Form.Label column sm="3">
                                            Gender
                                        </Form.Label>
                                        <Col lg="9">
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="radio-buttons-group"
                                            >
                                                <Row>
                                                    <Col>
                                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                    </Col>
                                                    <Col>
                                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                    </Col>
                                                </Row>
                                            </RadioGroup>
                                        </Col>

                                        <small className="text-danger">{err.errorConfirmation}</small>
                                    </Row>
                                    <Row className="p-3 mx-2">
                                        <Form.Label column sm="3">
                                            Password
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control
                                                type="password"
                                                placeholder="Confirm"
                                                //   value={user.confirmPassword}
                                                name="confirmation"
                                                //   onChange={(e) => inputChange(e)}
                                                required
                                            />
                                        </Col>
                                        <small className="text-danger">{err.errorConfirmation}</small>
                                    </Row>
                                </Form.Group>
                                <Form.Group
                                >

                                </Form.Group>
                                <Form.Group
                                // as={Row} className="mb-3" controlId="formPlaintextPassword"
                                >


                                </Form.Group>
                                <Row className="p-3 mx-2">
                                    <Form.Label column sm="3">

                                    </Form.Label>
                                    <Col sm="9">
                                        <FormControlLabel className='px-4' control={<Switch />} label="Label" />
                                        <span>Add insurance</span>

                                        <p className='p-2'>by signing up you agree to our terms <span><a href='https://www.vezeeta.com/en/Generic/TermsAndConditions'>Terms of use</a></span></p>
                                    </Col>
                                    <small className="text-danger">{err.errorConfirmation}</small>
                                </Row>
                                <Row >
                                    <Form.Label column sm="3">

                                    </Form.Label>
                                    <Col className='mx-3' >

                                        <Button className='px-3 bg-danger text-light btn btn-lg btn-group' type="submit" variant="contained">Join Now</Button>
                                    </Col>
                                </Row>
                                <hr />
                                <div className='container text-center'>
                                    <p >Already Registered in Vezeeta <span><a href='https://www.vezeeta.com/en/Account/SignIn'>Sign in</a></span></p>
                                </div>

                            </Form.Group>
                        </Form>
                    </ListGroup.Item>

                </ListGroup>
            </Col>

        </>
    );
}
export default SignUp;
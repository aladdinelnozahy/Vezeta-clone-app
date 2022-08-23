import './changepass.css';
// import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Sidebar from '../UserProfile/SideBar/sidebar';

const ChangePass = () => {
    const [user, ChangePass] = useState({
        Password: "",
        confirmPassword: "",
    })
    const [err, PassErr] = useState({
        errorPassword: null,
        errorConfirmPass: null
    })

    const inputChange = (e) => {
        const passRegex = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$');
        if (e.target.name === "password") {
            ChangePass({
                ...user,
                userPassword: e.target.value
            })
            PassErr({
                ...err,
                errorPassword: (passRegex.test(e.target.value)) ? "" : "invalid password"
            })
        }
        else if (e.target.name === "confirmation") {
            ChangePass({
                ...user,
                confirmPassword: e.target.value
            })
            PassErr({
                ...err,
                errorConfirmation: (e.target.value == user.userPassword) ? "" : "not match the password"
            })
        }

    };

    return (
      <>
      <Container>
          <Row>
            <Col sm={4}>
                <Sidebar />

            </Col>

           
            <Col sm={8}>
            <ListGroup className="cardheadlistStyle m-3 col-6" as="ul">
          {/* action href="/userprofile" */}
          <ListGroup.Item className="cardhead aaa listgroupItem" as="li">
            <p className="text-center text-light cardhead"> Change Pass</p>
          </ListGroup.Item>

          <ListGroup.Item >
            <Form>
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
                      value={user.userPassword}
                      name="password"
                      onChange={(e) => inputChange(e)}
                      required
                    />
                  </Col>
                  <small className="text-danger">{err.errorPassword}</small>
                </Row>
              </Form.Group>

              <Form.Group
              // as={Row} className="mb-3" controlId="formPlaintextPassword"
              >
                <Row className="p-3">
                  <Form.Label column sm="3">
                    New Password
                  </Form.Label>
                  <Col lg="9">
                    <Form.Control
                      type="password"
                      placeholder="Confirm"
                      value={user.confirmPassword}
                      name="confirmation"
                      onChange={(e) => inputChange(e)}
                      required
                    />
                  </Col>
                  <small className="text-danger">{err.errorConfirmation}</small>
                </Row>
                <Row className="p-3 ">
                  <Col className="text-center ">
                    <Button
                      className=" bg-danger mx-2"
                      type="submit"
                      variant="contained"
                      href='/'
                    >
                      Save
                    </Button>
                    <Button
                      className="bg-light text-dark mx-2"
                      variant="contained"
                    >
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </ListGroup.Item>
        </ListGroup>

            </Col>
          </Row>
        </Container>

      </>
    );
}
export default ChangePass;



// C:\Users\aladd\Desktop\ITI\Final Project\vezeeta2\src\Components\ChangePass\ChangePass.js
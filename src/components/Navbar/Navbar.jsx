import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './Navbar.css';

import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Navbar_c() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className=" "
          variant="dark"
          style={{ backgroundColor: '#0070cd' }}
        >
          <Container fluid>
            <Navbar.Brand href="#" className="NavLinkHeaderLogo">
              <img src={require('../Images/logo-vezeeta.jfif')} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-5  NavLinkHeader text-nowrap ">
                  <Nav.Link
                    href="/Register"
                    active
                    className=" border border-while "
                    id="NavLinkHeaderLinkSing"
                  >
                    Sing Up
                  </Nav.Link>
                  <Nav.Link
                    href="/"
                    active
                    className="NavLinkHeaderLink "
                  >
                    |
                  </Nav.Link>

                  <Nav.Link
                    href="/Login"
                    active
                    className="NavLinkHeaderLink"
                  >
                    log in
                  </Nav.Link>
                  <Nav.Link
                    href="#action1"
                    active
                    className="NavLinkHeaderLink"
                  >
                    |
                  </Nav.Link>

                  <Nav.Link
                    href=""
                    active
                    className="NavLinkHeaderLink"
                  >
                    vezeeta For Doctors
                  </Nav.Link>
                  <Nav.Link
                    href="#action1"
                    active
                    className="NavLinkHeaderLink"
                  >
                    |
                  </Nav.Link>

                  <Nav.Link
                    href="#action1"
                    active
                    className="NavLinkHeaderLink"
                  >
                    Contact Us
                  </Nav.Link>
                  <Nav.Link
                    href="#action1"
                    active
                    className="NavLinkHeaderLink"
                  >
                    |
                  </Nav.Link>

                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/UserProfile">User Profile</NavDropdown.Item>
                    <NavDropdown.Item href="">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

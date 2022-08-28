import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

const languages=[
  {
    code:'ar',
    name: 'العربية',
    country_code:'sa',
    dir:"rtl"
  },
  {
    code:'en',
    name: 'English',
    country_code:'gb'
  }
  

]

export default function Navbar_c() {
  const currentLanguageCode=localStorage.getItem('i18nextLng')||'en'
  const currentLanguage=languages.find((l)=> l.code == currentLanguageCode)
  const { t } = useTranslation()

  useEffect(()=>{
    console.log(currentLanguage)
    document.body.dir= currentLanguage.dir||'ltr'
  },[currentLanguage, t])
  return (
    <>
      {/* {t('welcome_message')} */}

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
                {t('canvas')}

                  
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
                {t('signup')}
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
                {t('login')}
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
                {t('vezeta_doctor')}
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
                {t('contactus')}
                  </Nav.Link>
                  







                  <NavDropdown
                    title="Language"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}>

                    {languages.map(({code,name,country_code}) =>(
                      <li key={country_code}>
                        <button className='dropdown-item' onClick={()=>i18next.changeLanguage(code)}>
                          <span className={`flag-icon flag-icon-${country_code} mx-2`}> 
                            {name}
                          </span>  
                        </button>
                      </li>

                    ))}

                    {/* <NavDropdown.Item onClick={()=>i18next.changeLanguage(code)}>العربية</NavDropdown.Item>  */}


                  </NavDropdown>














                  
                  {/* <Nav.Link
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
                  </NavDropdown> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

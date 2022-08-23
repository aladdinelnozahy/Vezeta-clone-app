// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sidebar.css';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
// import { Link } from '@mui/material';

const Sidebar = () => {
  return (
    <>
      <ListGroup className='listStyle m-3 col' as="ul">
        {/* action href="/userprofile" */}
        <Link className="text-decoration-none rounded-top" to="/userprofile">
          <ListGroup.Item className='listgroupItem' as="li"  >

            <span className='spanStyle'>profile</span>
          </ListGroup.Item>

        </Link>

        <Link className="text-decoration-none" to="/changepassword">
          <ListGroup.Item className='listgroupItem' as="li">

            <span className='spanStyle'>Change Password</span>
          </ListGroup.Item>

        </Link>

        <Link className="text-decoration-none rounded-bottom" to="/insurance">
          <ListGroup.Item className='listgroupItem' as="li" >

            <span className='spanStyle'>My Insurance</span>
          </ListGroup.Item>

        </Link>
      </ListGroup>
    </>
  );
}
export default Sidebar;
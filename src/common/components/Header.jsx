import React from 'react';
import {
  Navbar,
  Image,
  ButtonToolbar,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import user from '../assets/images/user.png';
import '../CSS/Header.scss';

const token = localStorage.getItem('user_token');
const username = localStorage.getItem('username');
export default function NavSection() {
  return (
    <header>
      <Navbar className="nav-section">
        <Navbar.Brand href="/">
          EPIC MAIL
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end nav-auth-section">
          {
            token
              ? (
                <>
                  <Navbar.Text variant="light" className="profile-photo">
                    <Image src={user} roundedCircle width="40" height="40" />
                  </Navbar.Text>
                  <ButtonToolbar>
                    <DropdownButton
                      drop="down"
                      title=""
                      id="dropdown-button-drop-down"
                      key="down"
                    >
                      <Dropdown.Item className="profile-name" eventKey="1">{username}</Dropdown.Item>
                      <Dropdown.Item eventKey="2" href="/profile">Profile</Dropdown.Item>
                      <Dropdown.Item eventKey="2" href="/profile">Dasboard</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        eventKey="4"
                        href="#"
                        onClick={() => {
                          localStorage.removeItem('user_token');
                          window.location = '/';
                        }}
                      >
                          Logout
                      </Dropdown.Item>
                    </DropdownButton>
                  </ButtonToolbar>
                </>
              )
              : (
                <>
                  <Link to="/login">
                    <Navbar.Text variant="light">
                  Login &nbsp;|
                    </Navbar.Text>
                  </Link>
                  <Link to="/signup">
                    <Navbar.Text variant="light">
                  &nbsp; Signup
                    </Navbar.Text>
                  </Link>
                </>
              )
          }
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

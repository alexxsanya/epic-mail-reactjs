import React from 'react';
import {
  Nav,
} from 'react-bootstrap';

const SideMenu = () => (
  <Nav defaultActiveKey="/home" className="flex-column">
    <Nav.Link href="/dashboard/inbox">Inbox Messages</Nav.Link>
    <Nav.Link href="/dashboard/sent">Sent Messages</Nav.Link>
  </Nav>
);
export default SideMenu;

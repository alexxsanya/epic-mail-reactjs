import React from 'react';
import {
  Container,
  Row,
  Col,

} from 'react-bootstrap';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loader from 'react-loader';
import store from '../Mainstore/Store';
import './CSS/Dashboard.scss';
import StatusLabel from '../common/components/StatusLabel';
import SideMenu from './components/SideMenu';
import InboxMessages from './components/InboxMessages';

const Dashboard = () => (

  <Provider store={store}>
    <Container className="dashboard">
      <Row>
        <Col sm={2} className="side-section">
          <SideMenu />
        </Col>
        <Col sm={10} className="content-section">
          <Router>
            <Switch>
              <Route path="/dashboard/inbox" exact component={InboxMessages} />
              <Route path="/dashboard/send" exact component={StatusLabel} />
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  </Provider>
);
export default Dashboard;

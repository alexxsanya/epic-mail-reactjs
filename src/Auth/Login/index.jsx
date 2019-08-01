import React from 'react';
import {
  Form,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import '../CSS/Auth.scss';
import loginUser from '../Redux/actions/loginAction';
import StatusLabel from '../../common/components/StatusLabel';

class Login extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('user_token');
    if(token !== null ) {
      window.location = '/dashboard/inbox'
    }
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      disabled: true
    })
    const { email, password} = this.state
    const userData = {
        email: email,
        password: password,
    }
    
    this.props.loginUser(userData);
  }

  render() {
    const { password, email, disabled } = this.state;
    const { isLoggingIn, errorOccured, isLoggedIn, response,userInfo } = this.props

    if (userInfo.status === 200) {
      localStorage.setItem("user_token", userInfo.data[0].token);
      setTimeout(() => {
        window.location = `/dashboard/inbox`;
      },
      2000);
    }

    return (
      <div className="login-component">
        <h2 className="section-title">Login Here</h2>
        <Row className="status-section">
          <Col sm={12}>
              {
                errorOccured.errorMessage === undefined
                && (
                <StatusLabel
                message={String(response)}
                tip="Check Your Network & Try Again"
                />
                )
              }
              {
                (userInfo.data === [] || userInfo.status === 400)
                && (
                <StatusLabel
                message="No user with provided credentials"
                tip="try again"
                />
                )
              }
              {
                (userInfo.status === 200)
                && <StatusLabel 
                message="You have been logged in successfully" 
                tip=" "
                variant="success"
                />
              }
          </Col>
        </Row>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicTitle">
            <Form.Control
              type="email"
              required
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicTitle">
            <Form.Control
              type="password"
              required
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Row>
            <Col sm={12} className="call-for-action">
              <Loader loaded={!isLoggingIn} color="#3379f5">
                <Button type="submit" id="submitForm" disabled={isLoggedIn}>
                    Login
                </Button>
              </Loader>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="label-action">
              <span>Create an account, click <a href='/signup'>here</a> to signup</span>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
    isLoggingIn: state.loginReducer.isLoggingIn,
    errorOccured: state.loginReducer.error,
    isLoggedIn: state.loginReducer.status,
    userInfo: state.loginReducer.item,
    response: state.loginReducer.message
  });
  
export default connect(mapStateToProps, { loginUser })(Login);
import React from 'react';
import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import '../CSS/Auth.scss';
import signupUser from '../Redux/actions/signupAction';
import StatusLabel from '../../common/components/StatusLabel';

class Signup extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      email: '',
      username: '',
      firstname: '',
      lastname: '',
      password: '',
      isSubmitted: true,
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
        isSubmitted: false
      })
    const { username, password, firstname, lastname,} = this.state
    const userData = {
        username: username,
        password: password,
        email: `${username}@epicmail.com`,
        firstname: firstname,
        lastname: lastname,
        recovery_email: `${username}_${firstname}@gmail.com`,
    }

    this.props.signupUser(userData);
  }

  render() {
    const { password, username,firstname, lastname } = this.state;
    const { errorOccured, userInfo, response, isSigningUp } = this.props;

    if (userInfo.status === 201) {
      localStorage.setItem("user_token", userInfo.data[0].token);
      localStorage.setItem("username", firstname);
      setTimeout(() => {
        window.location = `/dashboard`;
      },
      300000);
    }

    return (
      <div className="signup-component">
        <h2 className="section-title">Create Account</h2>
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
                message={userInfo.error}
                tip="try again"
                />
                )
              }
              {
                (userInfo.status === 201)
                && <StatusLabel 
                message="Account successfully created" 
                tip=" "
                variant="success"
                />
              }
          </Col>
        </Row>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicFirstname">
            <Form.Control
              type="text"
              required
              name="firstname"
              placeholder="Enter firstname"
              value={firstname}
              onChange={this.handleChange}
            />
          </Form.Group>        
        <Form.Group controlId="formBasicLastname">
            <Form.Control
              type="text"
              required
              name="lastname"
              placeholder="Enter lastname"
              value={lastname}
              onChange={this.handleChange}
            />
          </Form.Group>
          <InputGroup.Prepend className="username_section">
            <Form.Control
              type="text"
              required
              name="username"
              placeholder="Enter username"
              value={username}
              onChange={this.handleChange}
              className="username_input"
            />
            <InputGroup.Text id="inputGroupPrepend">@epicmail.com</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Group controlId="formBasicTitle">
            <Form.Control
              type="password"
              required
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Row>
            <Col sm={12} className="call-for-action">
              <Loader loaded={!isSigningUp} color="#3379f5">
                <Button type="submit" id="submitForm">
                    Create Account
                </Button>
              </Loader>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="label-action">
              <span> You have an account, click <a href='/login'>here</a> to login</span>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
    isSigningUp: state.signupReducer.isSigningUp,
    errorOccured: state.signupReducer.error,
    isSignedUp: state.signupReducer.status,
    userInfo: state.signupReducer.item,
    response: state.signupReducer.message
  });
  
export default connect(mapStateToProps, { signupUser })(Signup);
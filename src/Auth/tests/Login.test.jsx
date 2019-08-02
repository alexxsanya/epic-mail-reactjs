/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Login } from '../Login';

const props = {
  isLoggingIn: false,
  errorOccured: {
    errorMessage: 'No Message',
  },
  isLoggedIn: false,
  userInfo: {},
  response: 'Login Failed',
  loginUser: jest.fn(),
};

describe('Login Component', () => {
  it('should match the snapshot', () => {
    localStorage.setItem('user_token', 'sjkdfhjksdjkashlfjksfas');
    const component = shallow(<Login {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });


  it('should text input Change for title', () => {
    const event = {
      target: {
        email: '',
        password: '',
      },
    };
    const wrapper = shallow(<Login {...props} />);
    const instance = wrapper.instance();

    instance.handleChange(event);

    expect(instance.state.email).toBe('');
    expect(instance.state.password).toBe('');
  });

  it('should handle login form submit', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    const wrapper = shallow(<Login {...props} />);
    const instance = wrapper.instance();

    instance.handleSubmit(event);

    expect(instance.props.loginUser).toBeCalled();
  });

  it('should redirect user when login is success', () => {
    props.userInfo.status = 200;
    props.userInfo.data = [{
      token: 'new token set',
    }];
    const wrapper = shallow(<Login {...props} />);
    wrapper.contains('You have been logged in successfully');
  });

  it('should show No user with provided credentials when login fails', () => {
    props.userInfo.status = 400;
    props.userInfo.data = [{
      token: 'new token set',
    }];
    const wrapper = shallow(<Login {...props} />);
    wrapper.contains('No user with provided credentials');
  });

  it('should show Check Your Network when no network', () => {
    props.errorOccured.errorMessage = undefined;
    const wrapper = shallow(<Login {...props} />);
    wrapper.contains('Check Your Network');
  });
});

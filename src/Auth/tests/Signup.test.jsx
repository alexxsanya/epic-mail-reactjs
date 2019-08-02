/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Signup } from '../Signup';

const props = {
  isSigningUp: false,
  errorOccured: {
    errorMessage: 'No Message',
  },
  isSignedUp: false,
  userInfo: {},
  response: 'Signup Failed',
  signupUser: jest.fn(),
};

describe('Signup Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<Signup {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should text input Change for title', () => {
    const event = {
      target: {
        email: '',
        username: '',
        firstname: '',
        lastname: '',
        password: '',
      },
    };
    const wrapper = shallow(<Signup {...props} />);
    const instance = wrapper.instance();

    instance.handleChange(event);

    expect(instance.state.email).toBe('');
    expect(instance.state.password).toBe('');
  });

  it('should handle signup form submit', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    const wrapper = shallow(<Signup {...props} />);
    const instance = wrapper.instance();

    instance.handleSubmit(event);

    expect(instance.props.signupUser).toBeCalled();
  });

  it('should redirect user when signup is success', () => {
    props.userInfo.status = 201;
    props.userInfo.data = [{
      token: 'new token set',
    }];
    const wrapper = shallow(<Signup {...props} />);
    wrapper.contains('Account successfully created');
  });

  it('should show No user with provided credentials when signup fails', () => {
    props.userInfo.status = 400;
    props.userInfo.data = [{
      token: 'new token set',
    }];
    const wrapper = shallow(<Signup {...props} />);
    wrapper.contains('try again');
  });

  it('should show Check Your Network when no network', () => {
    props.errorOccured.errorMessage = undefined;
    const wrapper = shallow(<Signup {...props} />);
    wrapper.contains('Check Your Network');
  });
});

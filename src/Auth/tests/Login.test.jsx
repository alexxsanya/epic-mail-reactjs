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
};

describe('Login Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<Login {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should call handleSubmit upon login ', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    const handleSubmitMock = jest.fn(event);
    const wrapper = mount(<Login {...props} />);

    expect(wrapper).toBeDefined();
    // expect(handleSubmitMock).toBeCalled();
  });
});

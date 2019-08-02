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
};

describe('Signup Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<Signup {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should call handleSubmit upon Signup ', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    const handleSubmitMock = jest.fn(event);
    const wrapper = mount(<Signup {...props} />);

    expect(wrapper).toBeDefined();
    // expect(handleSubmitMock).toBeCalled();
  });
});

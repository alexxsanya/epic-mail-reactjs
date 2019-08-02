/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

const props = {
  token: localStorage.getItem('user_token'),
  username: localStorage.getItem('username'),
};

describe('App Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<Header {...props} />);
    expect(component).toMatchSnapshot();
  });
});

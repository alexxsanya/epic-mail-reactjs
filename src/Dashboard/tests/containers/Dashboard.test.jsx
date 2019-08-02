/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dashboard from '../../index';

describe('Dashboard Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<Dashboard />);
    expect(toJson(component)).toMatchSnapshot();
  });
});

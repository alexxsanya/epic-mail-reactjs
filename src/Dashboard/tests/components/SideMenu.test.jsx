/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SideMenu from '../../components/SideMenu';

describe('SideMenu Component', () => {
  const component = shallow(<SideMenu />);

  it('should match the snapshot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});

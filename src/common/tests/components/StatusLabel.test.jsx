import React from 'react';
import { shallow } from 'enzyme';
import StatusLabel from '../../components/StatusLabel';

describe('App Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<StatusLabel />);
    expect(component).toMatchSnapshot();
  });
});

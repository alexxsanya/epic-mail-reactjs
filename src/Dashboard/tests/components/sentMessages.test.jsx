/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SentMessages } from '../../components/SentMessages';

const props = {
  isFetching: false,
  errorOccured: {
    errorMessage: 'No Message',
  },
  sentFetched: false,
  response: 'No Message',
  messages: [],
  fetchtOutboxMessages: jest.fn(),
};

describe('SentMessages Component', () => {
  const component = shallow(<SentMessages {...props} />);

  it('should match the snapshot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

//   it('should call fetchtOutboxMessages on Component Will mount', () => {
//     const wrapper = mount(<SentMessages />);
//     wrapper.setProps(props);
//     expect(wrapper).toBeDefined();
//     expect(this.props.fetchtOutboxMessages()).toHaveBeenCalled();
//   });
});

/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { InboxMessages } from '../../components/InboxMessages';

const props = {
  isFetching: false,
  errorOccured: {
    errorMessage: 'No Message',
  },
  inboxFetched: false,
  response: 'No Message',
  messages: [],
  fetchInboxMessages: jest.fn(),
};

describe('InboxMessages Component', () => {
  const component = shallow(<InboxMessages {...props} />);

  it('should match the snapshot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  // it('should call fetchInboxMessage on Component Will mount', () => {
  //   const wrapper = mount(<InboxMessages />);
  //   wrapper.setProps(props);
  //   expect(wrapper).toBeDefined();
  //   expect(props.fetchInboxMessages()).toHaveBeenCalled();
  // });
});

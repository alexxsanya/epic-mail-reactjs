/* eslint-disable no-undef */
/* eslint-disable no-console */
import InboxMessagesReducer from '../../Redux/reducers/InboxMessagesReducer';
import { types } from '../../Redux/constants';

const initialState = {
  items: [],
  status: false,
  isFetching: false,
  message: 'No Messages',
};

const FetchInboxAction = {
  type: types.FETCH_INBOX_SUCCESS,
  payload: [],
  status: true,
  isFetching: true,
};

const FetchInboxFailedAction = {
  type: types.FETCH_INBOX_FAILED,
  items: [],
  status: false,
  isFetching: false,
  message: 'No Messages',
};

const fetchInboxStarted = {
  type: types.FETCH_INBOX_STARTED,
};

describe(' InboxMessagesReducer initial state', () => {
  it('should return the initial state', () => {
    expect(InboxMessagesReducer(undefined, {})).toEqual(
      initialState,
    );
  });

  it('should handle successfully fetch of inbox', () => {
    expect(InboxMessagesReducer(initialState, FetchInboxAction)).toEqual({
      items: [],
      status: true,
      isFetching: false,
      message: 'Inbox messages fetched',
    });
  });

  it('should handle FETCH INBOX Failed reducer', () => {
    expect(InboxMessagesReducer(initialState, FetchInboxFailedAction)).toEqual({
      message: 'No Messages',
      items: [],
      status: false,
      isFetching: false,
      error: undefined,
    });
  });

  it('should handle Fetching Inbox has started reducer', () => {
    expect(InboxMessagesReducer(initialState, fetchInboxStarted)).toEqual({
      message: 'No Messages',
      isFetching: true,
      items: [],
      status: false,
    });
  });
});

/* eslint-disable no-undef */
/* eslint-disable no-console */
import SentMessagesReducer from '../../Redux/reducers/SentMessagesReducer';
import { types } from '../../Redux/constants';

const initialState = {
  items: [],
  status: false,
  isFetching: false,
  message: 'No Messages',
};

const FetchoutboxAction = {
  type: types.FETCH_OUTBOX_SUCCESS,
  payload: [],
  status: true,
  isFetching: true,
};

const FetchoutboxFailedAction = {
  type: types.FETCH_OUTBOX_FAILED,
  items: [],
  status: false,
  isFetching: false,
  message: 'No Messages',
};

const fetchoutboxStarted = {
  type: types.FETCH_OUTBOX_STARTED,
};

describe(' SentMessagesReducer initial state', () => {
  it('should return the initial state', () => {
    expect(SentMessagesReducer(undefined, {})).toEqual(
      initialState,
    );
  });

  it('should handle successfully fetch of sent messages', () => {
    expect(SentMessagesReducer(initialState, FetchoutboxAction)).toEqual({
      items: [],
      status: true,
      isFetching: false,
      message: 'Outbox messages fetched',
    });
  });

  it('should handle FETCH INBOX Failed reducer', () => {
    expect(SentMessagesReducer(initialState, FetchoutboxFailedAction)).toEqual({
      message: 'No Messages',
      items: [],
      status: false,
      isFetching: false,
      error: undefined,
    });
  });

  it('should handle Fetching Inbox has started reducer', () => {
    expect(SentMessagesReducer(initialState, fetchoutboxStarted)).toEqual({
      message: 'No Messages',
      isFetching: true,
      items: [],
      status: false,
    });
  });
});

import { types } from '../constants';

const initialState = {
  items: [],
  status: false,
  isFetching: false,
  message: 'No Messages',
};

const InboxMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_INBOX_SUCCESS:
      return {
        ...state,
        items: action.payload,
        status: true,
        isFetching: false,
        message: 'Inbox messages fetched',
      };
    case types.FETCH_INBOX_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_INBOX_FAILED:
      return {
        ...state,
        error: action.payload,
        status: false,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default InboxMessagesReducer;

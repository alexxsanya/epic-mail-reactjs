import { types } from '../constants';

const initialState = {
  items: [],
  status: false,
  isFetching: false,
  message: 'No Messages',
};

const OutboxMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_OUTBOX_SUCCESS:
      return {
        ...state,
        items: action.payload,
        status: true,
        isFetching: false,
        message: 'Outbox messages fetched',
      };
    case types.FETCH_OUTBOX_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_OUTBOX_FAILED:
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

export default OutboxMessagesReducer;

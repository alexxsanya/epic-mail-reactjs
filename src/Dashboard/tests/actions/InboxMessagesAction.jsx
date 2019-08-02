/* eslint-disable no-undef */
/* eslint-disable no-console */
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';

import fetchInboxMessages from '../../Redux/actions/InboxMessagesAction';
import { types, API_URL } from '../../Redux/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const API = `${API_URL}messages`;
const EXPECTED_INBOX = {
  data: {
    results: [],
  },
};

describe('', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should start signup and end with success', () => {
    moxios.stubRequest(API, {
      status: 200,
      response: {
        data: {
          results: [],
        },
      },
    });

    const expectedActions = [
      {
        type: types.FETCH_INBOX_STARTED,
      },
      {
        type: types.FETCH_INBOX_SUCCESS,
        payload: EXPECTED_INBOX,
      },
    ];
    const store = mockStore();
    return store.dispatch(fetchInboxMessages()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

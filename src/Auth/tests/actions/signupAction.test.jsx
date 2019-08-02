/* eslint-disable no-undef */
/* eslint-disable no-console */
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';

import signupUser from '../../Redux/actions/signupAction';
import { types, API_URL } from '../../Redux/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const API = `${API_URL}auth/signup`;
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
        type: types.SIGNUP_STARTED,
      },
      {
        type: types.SIGNUP_SUCCESS,
        payload: EXPECTED_INBOX,
      },
    ];
    const store = mockStore();
    return store.dispatch(signupUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

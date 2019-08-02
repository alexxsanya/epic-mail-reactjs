/* eslint-disable no-undef */
/* eslint-disable no-console */
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';

import loginUser from '../../Redux/actions/loginAction';
import { types, API_URL} from '../../Redux/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const API = `${API_URL}auth/login`;
const EXPECTED_INBOX = {
  data: {
    results: [],
  },
};

describe('', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should start login and end with success', () => {
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
        type: types.LOGIN_STARTED,
      },
      {
        type: types.LOGIN_SUCCESS,
        payload: EXPECTED_INBOX,
      },
    ];
    const store = mockStore();
    return store.dispatch(loginUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

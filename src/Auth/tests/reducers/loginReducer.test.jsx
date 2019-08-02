/* eslint-disable no-undef */
/* eslint-disable no-console */
import loginReducer from '../../Redux/reducers/loginReducer';
import { types, API_URL} from '../../Redux/constants';

const initialState = {
  isLoggingIn: false,
  status: false,
  item: {
    error: '',
    status: 0,
    data: [],
  },
  message: 'Login Failed',
  error: {
    errorMessage: 'No Message',
  },
};

const LoginSuccessAction = {
  type: types.LOGIN_SUCCESS,
  payload: [{ user: ['1'] }],
  status: true,
  isLoggingIn: true,
};

const LoginFailedAction = {
  type: types.LOGIN_FAILED,
  message: 'Login Failed',
  item: [],
  error: {
    errorMessage: 'Error Message',
  },
  status: false,
  isLoggingIn: false,
};

const startLoginAction = {
  type: types.LOGIN_STARTED,
};

describe('loginReducer initial state', () => {
  it('should return the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual(
      initialState,
    );
  });

  it('should handle successfully Login', () => {
    expect(loginReducer(initialState, LoginSuccessAction)).toEqual({
      isLoggingIn: false,
      status: true,
      item: [{ user: ['1'] }],
      message: 'Logged in',
      error: {
        errorMessage: 'No Message',
      },
    });
  });

  it('should handle login failed reducer', () => {
    expect(loginReducer(initialState, LoginFailedAction)).toEqual({
      message: 'Login Failed',
      item: {
        error: '',
        status: 0,
        data: [],
      },
      error: undefined,
      status: false,
      isLoggingIn: false,
    });
  });

  it('should handle login has started reducer', () => {
    expect(loginReducer(initialState, startLoginAction)).toEqual({
      isLoggingIn: true,
      status: false,
      item: {
        error: '',
        status: 0,
        data: [],
      },
      message: 'Login Failed',
      error: {
        errorMessage: 'No Message',
      },
    });
  });
});

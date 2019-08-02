/* eslint-disable no-undef */
/* eslint-disable no-console */
import signupReducer from '../../Redux/reducers/signupReducer';
import { types } from '../../Redux/constants';

const initialState = {
  isSigningUp: false,
  status: false,
  item: {
    error: '',
    status: 0,
    data: [],
  },
  message: 'Signup Failed',
  error: {
    errorMessage: 'No Message',
  },
};

const SignupSuccessAction = {
  type: types.SIGNUP_SUCCESS,
  payload: [{ user: ['1'] }],
  status: true,
  isSigningUp: true,
};

const SignupFailedAction = {
  type: types.SIGNUP_FAILED,
  message: 'Signup Failed',
  item: [],
  error: {
    errorMessage: 'Error Message',
  },
  status: false,
  isSigningUp: false,
};

const startSignupAction = {
  type: types.SIGNUP_STARTED,
};

describe(' signupReducer initial state', () => {
  it('should return the initial state', () => {
    expect(signupReducer(undefined, {})).toEqual(
      initialState,
    );
  });

  it('should handle successfully Login', () => {
    expect(signupReducer(initialState, SignupSuccessAction)).toEqual({
      isSigningUp: false,
      status: true,
      item: [{ user: ['1'] }],
      message: 'Signed up',
      error: {
        errorMessage: 'No Message',
      },
    });
  });

  it('should handle Signup Failed reducer', () => {
    expect(signupReducer(initialState, SignupFailedAction)).toEqual({
      message: 'Signup Failed',
      item: {
        error: '',
        status: 0,
        data: [],
      },
      error: undefined,
      status: false,
      isSigningUp: false,
    });
  });

  it('should handle login has started reducer', () => {
    expect(signupReducer(initialState, startSignupAction)).toEqual({
      isSigningUp: true,
      status: false,
      item: {
        error: '',
        status: 0,
        data: [],
      },
      message: 'Signup Failed',
      error: {
        errorMessage: 'No Message',
      },
    });
  });
});

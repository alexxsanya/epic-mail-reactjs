import { types } from '../constants';

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

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        item: action.payload,
        status: true,
        isLoggingIn: false,
        message: 'Logged in',
      };
    case types.LOGIN_STARTED:
      return {
        ...state,
        isLoggingIn: true,
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
        status: false,
        isLoggingIn: false,
      };
    default:
      return state;
  }
};

export default LoginReducer;

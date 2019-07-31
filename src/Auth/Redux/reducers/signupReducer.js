import { types } from '../constants';

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

const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        item: action.payload,
        status: true,
        isSigningUp: false,
        message: 'Logged in',
      };
    case types.SIGNUP_STARTED:
      return {
        ...state,
        isSigningUp: true,
      };
    case types.SIGNUP_FAILED:
      return {
        ...state,
        error: action.payload,
        status: false,
        isSigningUp: false,
      };
    default:
      return state;
  }
};

export default SignupReducer;

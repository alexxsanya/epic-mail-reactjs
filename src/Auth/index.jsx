/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import Login from './Login';
import Signup from './Signup';
import signupReducer from './Redux/reducers/signupReducer';
import loginReducer from './Redux/reducers/loginReducer';

export const Auth = {
  login: Login,
  signup: Signup,
};

export const AuthReducers = {
  signup: signupReducer,
  login: loginReducer,
};

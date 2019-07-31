import axios from 'axios';
import { types, API_URL } from '../constants';

export const signupStarted = () => ({
  type: types.SIGNUP_STARTED,
});

export const signupFail = error => ({
  type: types.SIGNUP_FAILED,
  payload: {
    errorMessage: error.response,
  },
});

const signupUser = userData => (dispatch) => {
  dispatch(signupStarted());
  const API = `${API_URL}auth/signup`;
  return axios.post(
    API,
    userData,
  )
    .then(res => dispatch({
      type: types.SIGNUP_SUCCESS,
      payload: res.data,
    }))
    .catch((error) => {
      dispatch(signupFail(error));
    });
};

export default signupUser;

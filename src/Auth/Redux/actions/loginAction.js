import axios from 'axios';
import { types, API_URL } from '../constants';

export const loginStarted = () => ({
  type: types.LOGIN_STARTED,
});

export const loginFail = error => ({
  type: types.LOGIN_FAILED,
  payload: {
    errorMessage: error.response,
  },
});

const loginUser = userData => (dispatch) => {
  dispatch(loginStarted());
  const API = `${API_URL}auth/login`;
  return axios.post(
    API,
    userData,
  )
    .then((res) => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch(loginFail(error));
    });
};

export default loginUser;

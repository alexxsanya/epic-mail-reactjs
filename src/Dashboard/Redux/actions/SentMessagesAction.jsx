/* eslint-disable no-console */
import axios from 'axios';
import { types, API_URL } from '../constants';
import setAuthorizationToken from '../../../common/Util/setRequestHeaders';

export const startFetchingOutbox = () => ({
  type: types.FETCH_OUTBOX_STARTED,
});

export const fetchingOutboxFail = error => ({
  type: types.FETCH_OUTBOX_FAILED,
  payload: {
    status: false,
    isFetching: false,
    error: error.response.status,
  },
});

const fetchOutboxMessages = () => (dispatch) => {
  const API = `${API_URL}messages/sent`;

  dispatch(startFetchingOutbox());

  setAuthorizationToken();

  return axios.get(API)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.FETCH_OUTBOX_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      dispatch(fetchingOutboxFail(error));
      if (String(error) === 'Error: Request failed with status code 401') {
        localStorage.removeItem('username');
        localStorage.removeItem('user_token');
        alert('Session Timed out, click okay to login again');
        window.location = '/login';
      }
    });
};

export default fetchOutboxMessages;

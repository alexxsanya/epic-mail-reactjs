import axios from 'axios';

const setAuthorizationToken = () => {
  const token = localStorage.getItem('access_token');
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export default setAuthorizationToken;
import axios from 'axios';
import setAuthorizationToken from '../../Util/setRequestHeaders';

test('should test that auth header is set with token', () => {
  const token = 'fdksjfgljskhgjkashlgjksd';
  localStorage.setItem('user_token', token);
  const ExpectedHeader = `Bearer ${token}`;
  setAuthorizationToken();
  expect(axios.defaults.headers.common.Authorization).toBe(ExpectedHeader);
});

test('should test that auth header is set with token if no token is set', () => {
  localStorage.removeItem('user_token');
  setAuthorizationToken();
  expect(axios.defaults.headers.common.Authorization).toBe(undefined);
});

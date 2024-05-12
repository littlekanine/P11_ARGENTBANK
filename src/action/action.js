import { STORE_TOKEN } from './actionTypes';
import { LOGOUT } from './actionTypes';

export const storeToken = (token) => {
  return {
    type: STORE_TOKEN,
    payload: token
  };
};

export const logout = () => ({
    type: LOGOUT
  });
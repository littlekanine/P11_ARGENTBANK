import { STORE_TOKEN } from './ActionTypes';
import { LOGOUT } from './ActionTypes';

export const storeToken = (token) => {
  return {
    type: STORE_TOKEN,
    payload: token
  };
};

export const logout = () => ({
    type: LOGOUT
  });
  
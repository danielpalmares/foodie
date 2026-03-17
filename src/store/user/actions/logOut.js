import { LOG_OUT_USER } from '../types';

export function logOutAction() {
  localStorage.removeItem('foodie_token');

  return {
    type: LOG_OUT_USER,
    payload: {
      user: null,
      authenticatedUser: false,
    },
  };
}

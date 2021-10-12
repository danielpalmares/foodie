import { LOGOUT_USER } from '../types';

export function logoutAction() {
  sessionStorage.removeItem('token');

  return {
    type: LOGOUT_USER,
    payload: {
      loggedUser: null,
      isAuthenticated: false,
    },
  };
}

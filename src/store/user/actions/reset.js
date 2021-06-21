import { RESET_USER_STATE } from '../types';

export function resetAction() {
  return {
    type: RESET_USER_STATE,
    payload: {
      status: '',
      errorStatus: '',
      authenticatedUser: false,
      user: null,
    },
  };
}

import { LOG_OUT_USER } from '../types';
import { getItemFromLS, setItemFromLS } from '../../../utils';

export function logOutAction(username) {
  const usersList = getItemFromLS('users');
  usersList.map(user => {
    return user.username === username ? (user.remember = false) : user;
  });

  setItemFromLS('users', usersList);
  return {
    type: LOG_OUT_USER,
    payload: {
      user: null,
      authenticatedUser: false,
    },
  };
}

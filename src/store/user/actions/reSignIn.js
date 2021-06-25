import { RE_SIGN_IN } from '../types';
import { getItemFromLS } from '../../../utils';

export const reSignInAction = () => dispatch => {
  const usersList = getItemFromLS('users');

  if (usersList.length === 0) return;

  const userRememberIndex = usersList.findIndex(user => user.remember === true);

  // error
  if (userRememberIndex === -1) {
    return dispatch({
      type: RE_SIGN_IN,
      payload: {
        user: null,
        authenticatedUser: false,
      },
    });
  }

  // success
  if (userRememberIndex !== -1) {
    return dispatch({
      type: RE_SIGN_IN,
      payload: {
        user: usersList[userRememberIndex],
        authenticatedUser: true,
      },
    });
  }
};

import { RE_SIGN_IN } from '../types';
import { getItemFromLS } from '../../../utils';

export const reSignInAction = () => dispatch => {
  const usersList = getItemFromLS('users');

  if (usersList.length === 0) return;

  const userRememberIndex = usersList.findIndex(user => user.remember === true);

  if (userRememberIndex !== undefined) {
    dispatch({
      type: RE_SIGN_IN,
      payload: {
        user: usersList[userRememberIndex],
        authenticatedUser: true,
      },
    });
  }
};

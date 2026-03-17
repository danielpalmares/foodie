import {
  USER_SUCCESSFULLY_SIGNED_IN,
  ERROR_WRONG_ACCOUNT_DATA,
  USER_LOADING,
} from '../types';
import { apiSignIn, apiGetUser } from '../../../services/foodie/api';

export function signInAction(account) {
  return async dispatch => {
    dispatch({ type: USER_LOADING });

    try {
      const { data: tokenData } = await apiSignIn({
        username: account.username,
        password: account.password,
      });

      const { token } = tokenData;
      localStorage.setItem('foodie_token', token);

      const { data: userData } = await apiGetUser(account.username);

      const avatarKey = `foodie_avatar_${userData.user_id}`;
      const avatar = parseInt(localStorage.getItem(avatarKey) || '1', 10);

      const user = { ...userData, avatar, token };

      return dispatch({
        type: USER_SUCCESSFULLY_SIGNED_IN,
        payload: {
          status: 'User signed in successfully!',
          errorStatus: '',
          authenticatedUser: true,
          user,
        },
      });
    } catch (err) {
      const message =
        err?.response?.data?.message || 'Wrong credentials, please try again.';

      return dispatch({
        type: ERROR_WRONG_ACCOUNT_DATA,
        payload: {
          status: '',
          errorStatus: message,
          authenticatedUser: false,
          user: null,
        },
      });
    }
  };
}

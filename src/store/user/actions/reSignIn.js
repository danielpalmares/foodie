import { RE_SIGN_IN, RE_SIGN_IN_FAILED } from '../types';
import { apiGetUser } from '../../../services/foodie/api';

export const reSignInAction = () => async dispatch => {
  const token = localStorage.getItem('foodie_token');

  if (!token) {
    return dispatch({
      type: RE_SIGN_IN_FAILED,
      payload: { user: null, authenticatedUser: false },
    });
  }

  try {
    // decode username from JWT payload (no secret needed on client)
    const payload = JSON.parse(atob(token.split('.')[1]));
    const { username } = payload;

    const { data: userData } = await apiGetUser(username);

    const avatarKey = `foodie_avatar_${userData.user_id}`;
    const avatar = parseInt(localStorage.getItem(avatarKey) || '1', 10);

    const user = { ...userData, avatar, token };

    return dispatch({
      type: RE_SIGN_IN,
      payload: { user, authenticatedUser: true },
    });
  } catch {
    localStorage.removeItem('foodie_token');

    return dispatch({
      type: RE_SIGN_IN_FAILED,
      payload: { user: null, authenticatedUser: false },
    });
  }
};

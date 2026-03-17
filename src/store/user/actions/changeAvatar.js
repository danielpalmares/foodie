import { AVATAR_CHANGED } from '../types';

export const changeAvatarAction = (avatarID, userId) => dispatch => {
  if (userId) {
    localStorage.setItem(`foodie_avatar_${userId}`, String(avatarID));
  }

  return dispatch({
    type: AVATAR_CHANGED,
    payload: { avatar: avatarID },
  });
};

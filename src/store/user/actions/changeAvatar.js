import { AVATAR_CHANGED } from '../types';

export const changeAvatarAction = avatarID => dispatch => {
  console.log(avatarID);
  return dispatch({
    type: AVATAR_CHANGED,
    payload: {
      avatar: avatarID,
    },
  });
};

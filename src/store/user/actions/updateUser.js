import { foodieMulti, foodie } from '../../../config/axios';
import { UPDATED_USER, ERROR_IN_UPDATE_USER } from '../types';

export async function updateUserAction(user, formData) {
  try {
    const response = await foodieMulti.put(`/user/${user.id}`, formData);

    if (response.status === 201) {
      const getUpdatedUser = await foodie.get(`/user/${user.username}`);

      const updatedUser = {
        id: getUpdatedUser.data.user_id,
        name: getUpdatedUser.data.name,
        username: getUpdatedUser.data.username,
        profilePhoto: getUpdatedUser.data.image,
        biography: getUpdatedUser.data.biography,
        gender: getUpdatedUser.data.gender,
      };

      return {
        type: UPDATED_USER,
        payload: updatedUser,
      };
    }
  } catch (error) {
    return {
      type: ERROR_IN_UPDATE_USER,
      payload: {
        message: error.response.data.message,
      },
    };
  }
}

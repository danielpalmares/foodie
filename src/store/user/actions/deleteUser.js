import { foodie } from '../../../config/axios';
import { logoutAction } from './logout';
import { ERROR_IN_DELETE_USER } from '../types';

export async function deleteUserAction(userId) {
  try {
    const response = await foodie.delete(`/user/${userId}`);

    if (response.status === 200) {
      return function (dispatch) {
        return dispatch(logoutAction());
      };
    }
  } catch (error) {
    return {
      type: ERROR_IN_DELETE_USER,
      payload: error.response.data.message,
    };
  }
}

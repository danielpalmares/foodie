import { foodieNoAuth, foodie } from '../../../config/axios';
import { LOGGED_USER, ERROR_IN_LOGIN } from '../types';

export async function loginAction(formData) {
  try {
    const response = await foodieNoAuth.post(
      '/authenticate',
      JSON.stringify(formData)
    );
    sessionStorage.setItem('token', response.data.token);

    const getUser = await foodie.get(`user/${formData.username}`);

    const user = {
      id: getUser.data.user_id,
      name: getUser.data.name,
      username: getUser.data.username,
      profilePhoto: getUser.data.image,
      biography: getUser.data.biography,
      gender: getUser.data.gender,
    };

    return {
      type: LOGGED_USER,
      payload: user,
    };
  } catch (error) {
    return {
      type: ERROR_IN_LOGIN,
      payload: error.response.data.message,
    };
  }
}

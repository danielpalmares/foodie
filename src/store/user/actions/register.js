import { foodieMulti } from '../../../config/axios';
import { loginAction } from './login';
import { ERROR_IN_REGISTER } from '../types';

export async function registerAction(formData) {
  const user = {
    username: formData.get('username'),
    password: formData.get('password'),
  };

  try {
    const response = await foodieMulti.post('/user', formData);

    if (response.status === 201) {
      return function (dispatch) {
        return dispatch(loginAction(user));
      };
    }
  } catch (error) {
    return {
      type: ERROR_IN_REGISTER,
      payload: {
        message: error.response.data.message,
      },
    };
  }
}

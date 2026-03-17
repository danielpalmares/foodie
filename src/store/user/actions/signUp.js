import {
  ACCOUNT_SUCCESSFULLY_CREATED,
  ERROR_CREATING_ACCOUNT,
  USER_LOADING,
} from '../types';
import { apiCreateUser, apiSignIn, apiGetUser } from '../../../services/foodie/api';

export const signUpAction = newAccount => async dispatch => {
  dispatch({ type: USER_LOADING });

  try {
    // Backend stores gender as integer: 1 = male, 2 = female
    const genderInt = newAccount.gender === 'female' ? 2 : 1;

    await apiCreateUser({
      name: newAccount.name,
      username: newAccount.username,
      email: newAccount.email,
      password: newAccount.password,
      gender: genderInt,
      profile_photo: '',
    });

    // auto sign-in after registration
    const { data: tokenData } = await apiSignIn({
      username: newAccount.username,
      password: newAccount.password,
    });

    const { token } = tokenData;
    localStorage.setItem('foodie_token', token);

    const { data: userData } = await apiGetUser(newAccount.username);

    const user = { ...userData, avatar: 1, token };
    localStorage.setItem(`foodie_avatar_${userData.user_id}`, '1');

    return dispatch({
      type: ACCOUNT_SUCCESSFULLY_CREATED,
      payload: {
        status: 'Account successfully created!',
        errorStatus: '',
        authenticatedUser: true,
        user,
      },
    });
  } catch (err) {
    const message =
      err?.response?.data?.message || 'Error creating account, please try again.';

    return dispatch({
      type: ERROR_CREATING_ACCOUNT,
      payload: {
        status: '',
        errorStatus: message,
        authenticatedUser: false,
        user: null,
      },
    });
  }
};

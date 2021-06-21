import {
  USER_SUCCESSFULLY_SIGNED_IN,
  ERROR_NO_USERS_FOUND,
  ERROR_WRONG_ACCOUNT_DATA,
} from '../types';
import { getItemFromLS } from '../../../utils';

export function signInAction(account) {
  const usersArr = getItemFromLS('users');

  // if there is no user in the LS then return payload error
  if (usersArr.length === 0) {
    return {
      type: ERROR_NO_USERS_FOUND,
      payload: {
        status: '',
        errorStatus: 'No users found, please create an account.',
        authenticatedUser: false,
        user: null,
      },
    };
  }

  // if there is one user or more in the LS then check the data and do authentication
  if (usersArr.length !== 0) {
    // check if the data exists
    const username = usersArr.some(user => user.username === account.username);
    const password = usersArr.some(user => user.password === account.password);

    // find the account index
    const userAccountIndex =
      password &&
      usersArr.findIndex(accInLS => accInLS.password === account.password);

    // error messages
    const usernameErrorMessage =
      !username && 'Wrong username, please try again.';
    const passwordErrorMessage =
      !password && 'Wrong password, please try again.';

    // if the account data is wrong then return payload error
    if (!username || !password) {
      return {
        type: ERROR_WRONG_ACCOUNT_DATA,
        payload: {
          status: '',
          errorStatus: !username ? usernameErrorMessage : passwordErrorMessage,
          authenticatedUser: false,
          user: null,
        },
      };
    }

    // if the account data is ok then return payload success
    if (username && password) {
      return {
        type: USER_SUCCESSFULLY_SIGNED_IN,
        payload: {
          status: 'User signed in successfully!',
          errorStatus: '',
          authenticatedUser: true,
          user: usersArr[userAccountIndex],
        },
      };
    }
  }
}

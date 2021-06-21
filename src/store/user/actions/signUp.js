import { ACCOUNT_SUCCESSFULLY_CREATED, ERROR_CREATING_ACCOUNT } from '../types';
import { getItemFromLS, setItemFromLS } from '../../../utils';

export const signUpAction = newAccount => {
  const usersArr = getItemFromLS('users');

  // if there are users then check if the user has already created an account with this email or username
  if (usersArr.length !== 0) {
    // check if some of the data received already exists
    const isUsernameInLS = usersArr.some(
      user => user.username === newAccount.username
    );
    const isEmailInLS = usersArr.some(user => user.email === newAccount.email);

    // error messages
    const usernameErrorMessage =
      isUsernameInLS && 'An account with this username already exists.';
    const emailErrorMessage =
      isEmailInLS && 'An account with this email already exists.';

    // if the data already exists then return error
    if (isUsernameInLS || isEmailInLS) {
      return {
        type: ERROR_CREATING_ACCOUNT,
        payload: {
          status: '',
          errorStatus: isUsernameInLS
            ? usernameErrorMessage
            : emailErrorMessage,
          authenticatedUser: false,
          user: null,
        },
      };
    }
  }

  // if the data is ok then create the account plus ID
  newAccount.id = usersArr.length + 7;
  const newUsersArr = usersArr;
  newUsersArr.push(newAccount);

  // send the data to LS and return payload
  setItemFromLS('users', newUsersArr);

  return {
    type: ACCOUNT_SUCCESSFULLY_CREATED,
    payload: {
      status: 'Account successfully created!',
      errorStatus: '',
      authenticatedUser: true,
      user: newAccount,
    },
  };
};

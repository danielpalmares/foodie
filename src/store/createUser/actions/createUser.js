import {
  checkEmailExists,
  getItemFromLS,
  setItemFromLS,
} from '../../../helpers';

const USER_SUCCESSFULLY_CREATED = 'USER_SUCCESSFULLY_CREATED';
const ERROR_CREATING_USER = 'ERROR_CREATING_USER';

export const createUser = newUser => {
  // checking LS
  const usersArr = getItemFromLS('users');

  // checking if user has already created an account with this email
  if (usersArr.length !== 0) {
    const isEmailInLS = checkEmailExists(usersArr, newUser.userEmail);

    if (isEmailInLS) {
      // error while trying to create an account
      return {
        type: ERROR_CREATING_USER,
        payload: {
          status: 'error',
          authenticatedUser: false,
          data: null,
        },
      };
    }
  }

  // account successfully created! creating ID
  newUser.userID = usersArr.length + 1;
  const newUsersArr = usersArr;
  newUsersArr.push(newUser);

  // sending data to LS and state
  setItemFromLS('users', newUsersArr);

  return {
    type: USER_SUCCESSFULLY_CREATED,
    payload: {
      status: 'success',
      authenticatedUser: true,
      data: newUser,
    },
  };
};

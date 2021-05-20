const checkEmailExists = (arr, userEmail) => {
  const isEmailAlreadyExists = arr.some(obj => obj.userEmail === userEmail);
  return isEmailAlreadyExists;
};

export const createUser = newUser => {
  // checking localstorage
  const users = localStorage.getItem('users');
  const usersParsed = JSON.parse(users);
  const usersArr = usersParsed === null ? [] : usersParsed;

  // checking if user has already created an account with this email
  if (usersArr.length !== 0) {
    const isEmailInLS = checkEmailExists(usersArr, newUser.userEmail);

    if (isEmailInLS) {
      // error while trying to create an account
      return {
        type: 'ERROR_CREATING_USER',
        payload: {
          status: 'error',
          authenticatedUser: false,
        },
      };
    }
  }

  // account successfully created!
  newUser.userID = usersArr.length + 1;
  const newUsersArr = usersArr;
  newUsersArr.push(newUser);

  // sending data to ls and state
  localStorage.setItem('users', JSON.stringify(newUsersArr));
  return {
    type: 'USER_SUCCESSFULLY_CREATED',
    payload: {
      status: 'success',
      authenticatedUser: true,
      data: newUser,
    },
  };
};

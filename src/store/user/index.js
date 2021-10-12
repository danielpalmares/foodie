import {
  ERROR_IN_REGISTER,
  LOGGED_USER,
  ERROR_IN_LOGIN,
  LOGOUT_USER,
  ERROR_IN_UPDATE_USER,
  UPDATED_USER,
  ERROR_IN_DELETE_USER,
} from './types';

import {
  registerAction,
  loginAction,
  logoutAction,
  updateUserAction,
  deleteUserAction,
} from './actions';

const initialState = {
  loggedUser: null,
  isAuthenticated: false,
  errorMessage: '',
};

function user(state = initialState, action) {
  switch (action.type) {
    case ERROR_IN_REGISTER:
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    case LOGGED_USER:
      return {
        ...state,
        loggedUser: action.payload,
        isAuthenticated: true,
      };
    case ERROR_IN_LOGIN:
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    case LOGOUT_USER:
      return {
        ...state,
        loggedUser: action.payload.loggedUser,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case UPDATED_USER:
      return {
        ...state,
        loggedUser: action.payload,
      };
    case ERROR_IN_UPDATE_USER:
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    case ERROR_IN_DELETE_USER:
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    default:
      return state;
  }
}

export {
  registerAction,
  loginAction,
  logoutAction,
  updateUserAction,
  deleteUserAction,
  user,
};

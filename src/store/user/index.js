import {
  ACCOUNT_SUCCESSFULLY_CREATED,
  ERROR_CREATING_ACCOUNT,
  USER_SUCCESSFULLY_SIGNED_IN,
  ERROR_WRONG_ACCOUNT_DATA,
  ERROR_NO_USERS_FOUND,
  RESET_USER_STATE,
} from './types';
import { signInAction, signUpAction, resetAction } from './actions';

const initialState = {
  status: '',
  errorStatus: '',
  authenticatedUser: false,
  user: null,
};

function user(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_SUCCESSFULLY_CREATED:
      return {
        ...state,
        status: action.payload.status,
        errorStatus: action.payload.errorStatus,
        authenticatedUser: action.payload.authenticatedUser,
        user: action.payload.user,
      };
    case ERROR_CREATING_ACCOUNT:
      return {
        ...state,
        status: action.payload.status,
        errorStatus: action.payload.errorStatus,
        authenticatedUser: action.payload.authenticatedUser,
        user: action.payload.user,
      };
    case USER_SUCCESSFULLY_SIGNED_IN:
      return {
        ...state,
        status: action.payload.status,
        errorStatus: action.payload.errorStatus,
        authenticatedUser: action.payload.authenticatedUser,
        user: action.payload.user,
      };
    case ERROR_WRONG_ACCOUNT_DATA:
      return {
        ...state,
        status: action.payload.status,
        errorStatus: action.payload.errorStatus,
        authenticatedUser: action.payload.authenticatedUser,
        user: action.payload.user,
      };
    case ERROR_NO_USERS_FOUND:
      return {
        ...state,
        status: action.payload.status,
        errorStatus: action.payload.errorStatus,
        authenticatedUser: action.payload.authenticatedUser,
        user: action.payload.user,
      };
    case RESET_USER_STATE:
      return {
        ...state,
        status: action.payload.status,
        errorStatus: action.payload.errorStatus,
        authenticatedUser: action.payload.authenticatedUser,
        user: action.payload.user,
      };
    default:
      return state;
  }
}

export { signInAction, signUpAction, user, resetAction };

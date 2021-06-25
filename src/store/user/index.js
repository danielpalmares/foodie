import {
  ACCOUNT_SUCCESSFULLY_CREATED,
  ERROR_CREATING_ACCOUNT,
  USER_SUCCESSFULLY_SIGNED_IN,
  ERROR_WRONG_ACCOUNT_DATA,
  ERROR_NO_USERS_FOUND,
  LOG_OUT_USER,
  RE_SIGN_IN,
  AVATAR_CHANGED,
} from './types';
import {
  signInAction,
  signUpAction,
  logOutAction,
  reSignInAction,
  changeAvatarAction,
} from './actions';

const initialState = {
  user: null,
  authenticatedUser: false,
  status: '',
  signInErrorStatus: '',
  signUpErrorStatus: '',
};

function user(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_SUCCESSFULLY_CREATED:
      return {
        ...state,
        status: action.payload.status,
        signUpErrorStatus: action.payload.errorStatus,
        authenticatedUser: action.payload.authenticatedUser,
        user: action.payload.user,
      };
    case ERROR_CREATING_ACCOUNT:
      return {
        ...state,
        status: action.payload.status,
        signUpErrorStatus: action.payload.errorStatus,
        authenticatedUser: action.payload.authenticatedUser,
        user: action.payload.user,
      };
    case USER_SUCCESSFULLY_SIGNED_IN:
      return {
        ...state,
        status: action.payload.status,
        signInErrorStatus: action.payload.errorStatus,
        authenticatedUser: action.payload.authenticatedUser,
        user: action.payload.user,
      };
    case ERROR_WRONG_ACCOUNT_DATA:
      return {
        ...state,
        status: action.payload.status,
        signInErrorStatus: action.payload.errorStatus,
        authenticatedUser: action.payload.authenticatedUser,
        user: action.payload.user,
      };
    case ERROR_NO_USERS_FOUND:
      return {
        ...state,
        status: action.payload.status,
        signInErrorStatus: action.payload.errorStatus,
        authenticatedUser: action.payload.authenticatedUser,
        user: action.payload.user,
      };
    case LOG_OUT_USER:
      return {
        ...state,
        authenticatedUser: action.payload.authenticatedUser,
        user: action.payload.user,
      };
    case RE_SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
        authenticatedUser: action.payload.authenticatedUser,
      };
    case AVATAR_CHANGED:
      return {
        ...state,
        [user.avatar]: action.payload.avatar,
      };

    default:
      return state;
  }
}

export {
  signInAction,
  signUpAction,
  user,
  logOutAction,
  reSignInAction,
  changeAvatarAction,
};

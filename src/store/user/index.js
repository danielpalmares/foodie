import {
  ACCOUNT_SUCCESSFULLY_CREATED,
  ERROR_CREATING_ACCOUNT,
  USER_SUCCESSFULLY_SIGNED_IN,
  ERROR_WRONG_ACCOUNT_DATA,
  LOG_OUT_USER,
  RE_SIGN_IN,
  RE_SIGN_IN_FAILED,
  AVATAR_CHANGED,
  USER_LOADING,
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
  loading: false,
  status: '',
  signInErrorStatus: '',
  signUpErrorStatus: '',
};

function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return { ...state, loading: true, signInErrorStatus: '', signUpErrorStatus: '' };

    case ACCOUNT_SUCCESSFULLY_CREATED:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        signUpErrorStatus: action.payload.errorStatus,
        authenticatedUser: action.payload.authenticatedUser,
        user: action.payload.user,
      };
    case ERROR_CREATING_ACCOUNT:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        signUpErrorStatus: action.payload.errorStatus,
        authenticatedUser: action.payload.authenticatedUser,
        user: action.payload.user,
      };
    case USER_SUCCESSFULLY_SIGNED_IN:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        signInErrorStatus: action.payload.errorStatus,
        authenticatedUser: action.payload.authenticatedUser,
        user: action.payload.user,
      };
    case ERROR_WRONG_ACCOUNT_DATA:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        signInErrorStatus: action.payload.errorStatus,
        authenticatedUser: action.payload.authenticatedUser,
        user: action.payload.user,
      };
    case LOG_OUT_USER:
      return {
        ...state,
        loading: false,
        authenticatedUser: action.payload.authenticatedUser,
        user: action.payload.user,
      };
    case RE_SIGN_IN:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        authenticatedUser: action.payload.authenticatedUser,
      };
    case RE_SIGN_IN_FAILED:
      return { ...state, loading: false, user: null, authenticatedUser: false };

    case AVATAR_CHANGED:
      return {
        ...state,
        user: { ...state.user, avatar: action.payload.avatar },
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

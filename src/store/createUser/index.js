import { createUser } from './actions/createUser';

const USER_SUCCESSFULLY_CREATED = 'USER_SUCCESSFULLY_CREATED';
const ERROR_CREATING_USER = 'ERROR_CREATING_USER';

// actions area
export const createUserAction = createUser;

// reducers area
export function createUserReducer(state, action) {
  switch (action.type) {
    case USER_SUCCESSFULLY_CREATED:
      return {
        ...state,
        user: action.payload,
      };
    case ERROR_CREATING_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return null;
  }
}

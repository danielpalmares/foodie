import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  signedUp: function (state, action) {
    switch (action.type) {
      case 'USER_SUCCESSFULLY_CREATED':
        return {
          ...state,
          user: action.payload,
        };
      case 'ERROR_CREATING_USER':
        return {
          ...state,
          user: action.payload,
        };
      default:
        return null;
    }
  },
});

export default function storeConfig() {
  return createStore(reducers);
}

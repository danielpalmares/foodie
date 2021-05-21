import { createStore, combineReducers } from 'redux';
import { light } from '../styles/themes/_index';

const initialState = {
  theme: light,
};

const reducers = combineReducers({
  signedUp: function (state = initialState, action) {
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

import { combineReducers } from 'redux';

import { createUserReducer } from './createUser';
import { switchThemeReducer } from './switchTheme';

export const rootReducer = combineReducers({
  createUserReducer,
  switchThemeReducer,
});

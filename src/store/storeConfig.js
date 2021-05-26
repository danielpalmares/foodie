import { createStore, combineReducers } from 'redux';

import { createUserReducer } from './createUser/index';
import { switchThemeReducer } from './switchTheme/index';

const reducers = combineReducers({
  createUserReducer,
  switchThemeReducer,
});

export const storeConfig = () => createStore(reducers);

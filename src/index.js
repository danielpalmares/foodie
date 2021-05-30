import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import promise from 'redux-promise';

import App from './App';
import { rootReducer } from './store/storeConfig';
const store = applyMiddleware(promise)(createStore)(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

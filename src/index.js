import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/storeConfig';

const store = applyMiddleware(promise)(createStore)(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

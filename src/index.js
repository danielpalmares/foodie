import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './store/storeConfig';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import dotenv from 'dotenv';
import App from './App';

dotenv.config();
const store = createStore(rootReducer, applyMiddleware(promise, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js');
  });
}

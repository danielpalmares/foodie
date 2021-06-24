import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/storeConfig';

const store = createStore(rootReducer, applyMiddleware(promise, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

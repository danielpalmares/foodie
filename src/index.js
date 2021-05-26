import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { storeConfig } from './store/storeConfig';

ReactDOM.render(
  <Provider store={storeConfig()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './views/containres/App';
import { configureStore } from './redux/store';
import { GlobalStyle } from './views/styles/';

const store = configureStore();

const app = (
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);


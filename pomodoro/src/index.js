import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './containers/App/';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { pomodoroReducers } from './redux';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
const store = createStore(
  pomodoroReducers,
  applyMiddleware( loggerMiddleware )
);

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();

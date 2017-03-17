import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import FirebaseService from './firebase';

const rootEl = document.getElementById('root');

FirebaseService.initDatabase();

ReactDOM.render(
  <App />,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}
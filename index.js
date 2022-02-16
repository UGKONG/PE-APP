/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Provider } from 'react-redux';
import store from './modules/store.js';
import App from './App.js';

export default function () {
  console.log('index.js');
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
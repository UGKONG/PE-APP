import React from 'react';
import { createStore, combineReducers } from 'redux';
import reducers from './reducers.js';

export const staticState = {
  dbUrl: 'http://localhost:9092'
}

export default createStore(combineReducers(reducers));

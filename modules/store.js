import React from 'react';
import { createStore, combineReducers } from 'redux';
import reducers from './reducers.js';

export default createStore(combineReducers(reducers));
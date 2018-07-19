import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore } from 'redux';
import * as ACTIONS from './redux/actionTypes';

const columnHeightLimit = 12;

const initialState = [7, 3, 5];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.INCREASE:
      return state.map((content, index) => index === action.index ? Math.min(content + 1, columnHeightLimit) : content)
    case ACTIONS.DECREASE:
      return state.map((content, index) => index === action.index ? Math.max(content - 1, 0) : content)
    case ACTIONS.SET_HEIGHT:
      return state.map((content, index) => index === action.index ? Math.max(Math.min(action.height, columnHeightLimit), 0) : content)
    case ACTIONS.ADD_COLUMN:
      return [...state, 0];
    case ACTIONS.REMOVE_COLUMN:
      return state.slice(0, -1);
    default:
      return state;
  }
}

const store = createStore(
  myReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(
  () => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
  }
);
ReactDOM.render(<App store={store} />, document.getElementById('root'));

registerServiceWorker();

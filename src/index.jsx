import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {  Provider } from 'react-redux';
import { createStore } from 'redux';


const defaultState = {
  num: 0
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "increment":
      return {...state, num: state.num += 1}
      case "decrement": 
      return {...state, num: state.num -= 1}
      case "reset":
        return {...state, num: state.num = 0}
      default: return state
  }
}


const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

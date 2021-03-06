import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css';
import galleryReducer from './Reducers/galleryReducer.js';
import artsReducer from './Reducers/artsReducer.js';
import { combineReducers } from 'redux'
import { BrowserRouter } from 'react-router-dom';

const allReducers = combineReducers({
  galleryReducer,
  artsReducer,
})
const store = createStore(allReducers, applyMiddleware(thunk)) 
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import items from './reducers/itemsReducer'
import vissibleReducer from "./reducers/vissibleReducer";
import filteredStingReducer from "./reducers/filteredStingReducer";
import dayReducer from "./reducers/dayReducer";

const ping = (store) => next => action => {
     setTimeout(() => {
        console.log('ping')
    }, 1000);
    return next(action)
};

const ping2 = store => next => action => {
    console.log('ping2');
    return next(action)
};

const store = createStore(combineReducers({
    items: items,
    filter: vissibleReducer,
    filteredString: filteredStingReducer,
    day: dayReducer,
}),
    applyMiddleware(thunk, ping2));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

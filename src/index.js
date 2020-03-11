import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import items from './reducers/itemsReducer'
import vissibleReducer from "./reducers/vissibleReducer";
import filteredStingReducer from "./reducers/filteredStingReducer";
import dayReducer from "./reducers/dayReducer";
import tasksLoad from "./reducers/tasksLoadReducer";
import taskLoad from "./reducers/taskLoadReducer";
import ChangeTask from "./components/changeTask";
import changeTaskReducer from "./reducers/changeTaskReducer";
import errorReducer from "./reducers/errorReducer";
import taskUpdateReducer from "./reducers/taskUpdateReducer";

const store = createStore(combineReducers({
    items: items,
    filter: vissibleReducer,
    filteredString: filteredStingReducer,
    day: dayReducer,
    tasksLoad,
    taskLoad,
    changeTaskReducer,
    taskUpdate: taskUpdateReducer,
    er: errorReducer,
}),
    applyMiddleware(thunkMiddleware, promiseMiddleware));

ReactDOM.render(
  <Provider store={store}>
      <Router>
         <Switch>
           <Route path="/change-task/:id" component={ChangeTask} />
           <Route path="/" exact component={App} />
         </Switch>
      </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

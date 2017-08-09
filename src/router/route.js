/**
 *
 * title: route.js
 *
 * description: react-router的控制路由功能组件；负责所有的页面跳转
 *
 * author: liyang
 *
 * date: 2017/05/15
 */

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

const helloWorld = require('containers/HelloWorld');
const NotFoundPage = require('component/Common/404');
const Counter = require('containers/Counter');
const configureStore = require('store/configureStore');

// const store = configureStore(window.__INITIAL_STATE__)
const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__());

const AppRoute = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" >
        <IndexRoute component={helloWorld} />
        <Route path="counter" component={Counter} />
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  </Provider>
);

export default AppRoute;

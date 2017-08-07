/**
 *
 * title: entry.js
 *
 * description: 项目启动访问的主文件
 *
 * author: liyang
 *
 * date: 2017/05/15
 */

/**
 * CANNOT use `import` to import `es5-shim`,
 * because `import` will be transformed to `Object.defineProperty` by babel,
 * `Object.defineProperty` doesn't exists in IE8,
 * (but will be polyfilled after `require('es5-shim')` executed).
 */

require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('es6-promise');
require('fetch-ie8');
/**
 * CANNOT use `import` to import `react` or `react-dom`,
 * because `import` will run `react` before `require('es5-shim')`.
 */
// import React from 'react';
// import ReactDOM from 'react-dom';

const React = require('react');
const ReactDOM = require('react-dom');

const AppRoute = require('./router/route');
const configureStore = require('./js/store/configureStore');


// const store = configureStore(window.__INITIAL_STATE__)
const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const browserHistory = require('react-router');

ReactDOM.render(
        <AppRoute store={store} history={browserHistory} />,
  document.getElementById('app')
);


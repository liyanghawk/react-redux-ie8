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

require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const helloWorld = require("containers/HelloWorld");
const NotFoundPage = require("component/Common/404");

export default class AppRoute extends React.Component {

    requireAuth (nextState, replace) {
        // todo 书写组件进入前的逻辑处理
    }

    render() {

        return(
            <Router history={browserHistory}>
                <Route path="/" >
                    <IndexRoute component={helloWorld} onEnter={this.requireAuth}/>

                    {/*<Route path="/" component={helloWorld} onEnter={this.requireAuth}/>*/}
                    <Route path="*" component={NotFoundPage} onEnter={this.requireAuth}/>
                </Route>
            </Router>
        )

    }
}
# react-redux-ie8-boilerplate

## 程序安装
### Node Version
```
nodejs 4.4.4
```
### 准备
```
npm install
// 设置淘宝镜像
npm config set registry https://registry.npm.taobao.org

// 设置显示npm安装进度
npm config set loglevel=http
```
### 开发
```
npm start #启动服务开发。
npm start:prod #启动服务生产环境开发（IE8调试）。
```
### 访问地址
http://localhost:3000
## 特性
* [react](https://github.com/facebook/react)
* [react-router](https://github.com/rackt/react-router)
* [webpack](https://github.com/webpack/webpack)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel](https://github.com/babel/babel)
## 程序目录
```
build               打包生成文件位置
│
│      
doc                 说明文档
│       
│
node_modules        依赖包
│       
│
src                 源码目录
├── js           react组件目录
│   │
│   ├── component 开发组件目录
│   │
│   └── containers 页面用于显示的组件（复合组件）
│
├── router       react-router项目路由配置
│
├── images       公共图片文件夹
│
├── json         静态数据json文件夹
│
└── entry.js     项目进入的初始文件
│
│
.babelrc            babel配置文件
│
│
.gitignore          git提交ignore配置文件
│
│
package.json        项目依赖以及启动的配置文件
│
│
webpack.config.dev.js            开发配置文件
│
│
webpack.config.production.js     生产配置文件
```
## 兼容性

* [react](https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html) react@0.14.x支持IE8
* [react-router](https://github.com/ReactTraining/react-router) react-router@2.3.0支持IE8
* [react-redux](https://github.com/reactjs/react-redux) 官方推荐React与Redux绑定推荐使用
* [redux](https://github.com/reactjs/redux) Redux is a predictable state container for JavaScript apps.
* [redux-thunk](https://github.com/reactjs/redux) Redux异步的中间件
* [redux-logger](https://github.com/reactjs/redux) Redux日志中间件
* [webpack](https://github.com/webpack/webpack) 打包工具：webpack@1.12.9支持IE8
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server) nodejs的express服务器：webpack-dev-server@1.14.0支持IE8（只用于开发环境）
* [console-polyfill](https://github.com/paulmillr/console-polyfill) 浏览器兼容console命令(使浏览器兼容的方案console.log=function(){})
* [es5-shim](https://github.com/es-shims/es5-shim) 
* [es5-sham](https://github.com/es-shims/es5-shim) 
* [es6-promise](https://github.com/es-shims/es5-shim) es6 promise使用在ie9以下的polyfill
* [fetch-ie8](https://github.com/camsong/fetch-ie8) es5-shim, es5-sham and es6-promise搭配使用可以支持ie8浏览器的fetch
* [echarts](https://github.com/ecomfe/echarts) 使用echarts@2.2.8可以IE8浏览器（图片下载不支持IE8）

## 其它
- 该项目用于测试i8性能，可以当做脚手架使用

## 参考
* [react-ie8](https://github.com/xcatliu/react-ie8)
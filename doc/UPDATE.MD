#### 更新日志
* webpack.config.dev.js文件中添加devServer支持，可代理请求，解决fetch的ie8跨域问题
* 在entry.js中添加es6-promise、fetch-ie8，实现ie8的fetch兼容（ie8实际还是使用的ActiveXObject来实现XMLHttpRequest对象）
* 添加webpack的css提取，可以用于ie8，也可提前预加载样式文件
* console在ie里面不识别，只有开启F12开发模式才可以，所以将console放入整体的ie8-pollyfill种
* 开发模式添加热加载
```
if(installedModules[request].parents.indexOf(moduleId) < 0)
原因：
IE8不支持数组的indexOf方法
解决方案：
shim/ie8-compatible-pollyfill.js
```
* console-polyfill@0.2.3更新到console-polyfill@0.3.0，主要更新为解决console对IE8的console判断的bug，即
```
typeof con[method] !== 'function'
in IE8
typeof con[method] 为object
```
参考[FYI: Doesn't abstract console.log differences between IE & Chrome #8](https://github.com/paulmillr/console-polyfill/issues/8)
* 添加eslint-import-resolver-webpack解决webpack中alias问题，提供eslint的解析
参考https://stackoverflow.com/questions/41476397/eslint-webpack-resolver-doesnt-work
* 在webpack.config.production.js文件中添加UglifyJsPlugin@2.7.5+Es3ifyPlugin兼容压缩后的文件，文件命名混淆、压缩、去除注释等，压缩比大约4:1
参考
    * [阿里巴巴UED](http://www.aliued.com/?p=3240)
    * [webpack@2.7.5-UglifyJsPlugin]http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
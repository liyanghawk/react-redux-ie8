//配置参考地址 http://webpack.github.io/docs/webpack-dev-server.html

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackCfg = require('./webpack.config.dev.js');

var compiler = webpack(webpackCfg);

//init server
var app = new webpackDevServer(compiler, {
    // //注意此处publicPath必填
    publicPath: webpackCfg.output.publicPath,
    // 使用Html5 router需要配置此项
    historyApiFallback: true,
    // 配置开启gzip压缩
    compress: true,
    // 不检测hostname
    disableHostCheck: true
});

app.listen(3030, function (err) {
    if (err) {
        console.log(err);
    }
});

console.log("listen at http://localhost:3030");
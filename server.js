// 配置参考地址 http://webpack.github.io/docs/webpack-dev-server.html

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackCfg = require('./webpack.config.dev.js');

const compiler = webpack(webpackCfg);

// init server
const app = new WebpackDevServer(compiler, {
  // //注意此处publicPath必填
  publicPath: webpackCfg.output.publicPath,
  // 使用Html5 router需要配置此项
  historyApiFallback: true,
  // 配置开启gzip压缩
  compress: true,
  // 不检测hostname
  disableHostCheck: true,
});

app.listen(3030, (err) => {
  if (err) {
    console.log(err);
  }
});

console.log('listen at http://localhost:3030');

const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
// css分离
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Es3ifyPlugin = require('es3ify-webpack-plugin');

module.exports = {
  entry: {
    entry: './src/entry.js',
    /*vendor: ['console-polyfill', 'es5-shim', 'es5-shim/es5-sham', 'es6-promise', 'fetch-ie8', 'es3ify-loader', 'react', 'react-dom', 'react-router'],*/
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[hash].bundle.js',
    publicPath: '/build/',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    // 压缩js文件，ie8支持使用Es3ifyPlugin
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        screw_ie8: false,
      },
      compress: {
        warnings: false,
        screw_ie8: false,
      },
      comments: false, // 去除注释
    }),
    new Es3ifyPlugin(),
    // 定义全局环境变量为生产环境
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new AssetsPlugin({
      filename: 'build/webpack-assets.js',
      processOutput(assets) {
        return `window.WEBPACK_ASSETS = ${JSON.stringify(assets)}`;
      },
    }),
    new ExtractTextPlugin('css.all.css'),
    /*new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),*/
  ],
  resolve: {
    // 实际就是自动添加后缀，默认是当成js文件来查找路径
    // 空字符串在此是为了resolve一些在import文件时不带文件扩展名的表达式
    extensions: ['', '.js', 'jsx'],

    // 路径别名
    alias: {
      containers: path.resolve(__dirname, 'src/js/containers'),
      component: path.resolve(__dirname, 'src/js/component'),
      // 以前你可能这样引用 import { Nav } from '../../containers'
      // 现在你可以这样引用 import { Nav } from 'app/containers'
      actions: path.resolve(__dirname, 'src/js/actions'),
      images: path.resolve(__dirname, 'src/images'),
      store: path.resolve(__dirname, 'src/js/store'),

      // 注意：别名只能在.js文件中使用。
    },
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?modules&localIdentName=[local]!less-loader'),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /(fontawesome-webfont|glyphicons-halflings-regular)\.(woff|woff2|ttf|eot|svg)($|\?)/,
        loader: 'url?limit=1024&name=fonts/[name].[hash].[ext]',
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=100000',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
    postLoaders: [
      {
        test: /\.js$/,
        loaders: ['es3ify-loader'],
      },
    ],
  },
  // 代理服务器，作用类似nginx
  devServer: {
    proxy: {
      '/test1': {
        target: 'http://192.168.31.8:9000',
        secure: false,
      },
    },
  },
};

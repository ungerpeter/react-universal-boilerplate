const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const mode = 'development';

const clientConfig = merge(common.client, {
  mode: mode,
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.RUNTIME_ENV': JSON.stringify('client')
    }),
  ]
});

const serverConfig = merge(common.server, {
  mode: mode,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.RUNTIME_ENV': JSON.stringify('server')
    }),
  ]
});

module.exports = [
  clientConfig,
  serverConfig
];

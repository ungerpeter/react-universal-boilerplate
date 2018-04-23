const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

const app = require('../config/express.common');
const config = require('./webpack.dev');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  serverSideRender: true,
}));
app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

module.exports = app;

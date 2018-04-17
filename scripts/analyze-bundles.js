const chalk = require('chalk');
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('../config/webpack.prod.js');

//config.output.path = path.join(__dirname, '../.analyze');
//config[1].output.path = path.join(__dirname, '../.analyse');

const compiler = webpack(config, (err) => {
  if(err) {
    console.log(chalk.red(err));
  }
});

new BundleAnalyzerPlugin({
  analyzerMode: 'server',
  analyzerPort: 8008,
  openAnalyzer: true,
  generateStatsFile: false,
  logLevel: 'warn'
}).apply(compiler);
console.log(chalk.cyan('Bundle Analyzer for Clientbundle is started at http://127.0.0.1:8008'));

/*
new BundleAnalyzerPlugin({
  analyzerMode: 'server',
  analyzerPort: 8081,
  openAnalyzer: false,
  generateStatsFile: false,
  logLevel: 'warn'
}).apply(compiler.compilers.find(compiler => compiler.name === 'server'));
console.log(chalk.cyan('Bundle Analyzer for Serverbundle is started at http://127.0.0.1:8081'));
*/

['SIGINT', 'SIGTERM'].forEach((sig) => {
  process.on(sig, () => {
    process.exit();
  });
});

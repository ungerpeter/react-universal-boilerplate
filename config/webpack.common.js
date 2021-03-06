const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

const projectRootPath = path.join(__dirname, '..', '/');


const clientConfig =  {
  name: 'client',
  target: 'web',
  entry: {
    app: './src/client.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: [/(node_modules)/, /(dist)/],
        use: ['eslint-loader'],
      },
      {
        test: /\.js$/,
        exclude: [/(node_modules)/, /(dist)/],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: projectRootPath,
      verbose: true,
      dry: false,
    }),
    new HtmlWebpackPlugin({
      cache: true,
      title: 'React Boilerplate',
      themeColor: '#353535',
      reactDom: '${reactDom}',
      preloadedState: '${preloadedState}',
      testLiteral: '${testLiteral}',
      template: 'src/index.html',
      alwaysWriteToDisk: true
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[hash:10].css',
      chunkFilename: 'assets/[name].[chunkhash:10].css',
    }),
    new WebpackPwaManifest({
      name: 'React Universal Boilerplate',
      short_name: 'RUB',
      description: 'foo bar foobar',
      background_color: '#efefef',
      display: 'standalone',
      theme_color: '#353535',
      start_url: '/?utm_source=homescreen',
      filename: 'manifest.json',
      icons: [
        {
          src: path.resolve(projectRootPath, 'src/static/logo.png'),
          sizes: [96, 128, 192, 256, 384],
        },
        {
          src: path.resolve(projectRootPath, 'src/static/logo.png'),
          size: '1024x1024',
        },
      ],
    }),
    new GenerateSW({
      swDest: './service-worker.js',
      cacheId: 'react-boilerplate-cache',
      directoryIndex: 'index.html',
      exclude: [/\.html$/],
      runtimeCaching: [{
        urlPattern: new RegExp('http://localhost:8080/'),
        handler: 'networkFirst',
      }],
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(projectRootPath, 'dist/views'),
    }),
    new IgnoreEmitPlugin(/\.html$/)
  ],
  output: {
    filename: 'assets/[name].[hash:10].js',
    chunkFilename: 'assets/[name].[chunkhash:10].js',
    path: path.resolve(__dirname, '../', 'dist', 'public'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial'
        },
      },
    },
    runtimeChunk: {
      name: "manifest",
    },
  },
};

const serverConfig =  {
  name: 'server',
  target: 'node',
  entry: './src/server.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules)/, /(dist)/],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
        ],
      },
    ],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../', 'dist', 'server'),
    libraryTarget: 'commonjs2'
  },
};

module.exports = {
  client: clientConfig,
  server: serverConfig
};

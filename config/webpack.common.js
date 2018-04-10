const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');

const projectRootPath = path.join(__dirname, '..', '/');


module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules)/, /(dist)/],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([
      'dist/*.*'
    ], {
      root: projectRootPath,
      exclude:  ['dist/manifest.json'],
      verbose:  true,
      dry:      false
    }),
    new HtmlWebpackPlugin({
      cache: true,
      title: 'React Boilerplate',
      themeColor: '#353535',
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].[hash:16].css",
      chunkFilename: "assets/[name].[id].[chunkhash:16].css"
    }),
    new WebpackPwaManifest({
      name: 'React Universal Boilerplate',
      short_name: 'RUB',
      description: 'foo bar foobar',
      background_color: '#efefef',
      display: "standalone",
      theme_color: "#353535",
      start_url: "/?utm_source=homescreen",
      filename: "manifest.json",
      icons: [
        {
          src: path.resolve(projectRootPath, 'src/static/logo.png'),
          sizes: [96, 128, 192, 256, 384]
        },
        {
          src: path.resolve(projectRootPath, 'src/static/logo.png'),
          size: '1024x1024' // you can also use the specifications pattern
        }
      ]
    }),
    new GenerateSW({
      swDest: './service-worker.js',
      cacheId: 'react-boilerplate-cache',
      directoryIndex: 'index.html',
      exclude: [/\.html$/],
      runtimeCaching: [{
        urlPattern: new RegExp('http://localhost:8080/'),
        handler: 'networkFirst'
      }]
    })
  ],
  output: {
    filename: 'assets/[name].[hash:16].js',
    chunkFilename: 'assets/[name].[id].[chunkhash:16].js',
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  }
};
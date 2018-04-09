const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
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
    new HtmlWebpackPlugin({
      hash: true,
      cache: true,
      title: 'React Boilerplate',
      themeColor: '#353535',
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: "assets/style.[name].css",
      chunkFilename: "assets/style.[id].css"
    })
  ],
  output: {
    filename: 'assets/[name].bundle.js',
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
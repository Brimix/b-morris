const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const APP_DIST_PATH = path.resolve(__dirname, './dist');

module.exports = {
  entry: ['babel-polyfill', './src/app'],
  output: {
    path: APP_DIST_PATH,
    filename: '[name].js',
  },
  resolve: {
    modules: ['./node_modules'],
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: APP_DIST_PATH,
      staticOptions: {},
      publicPath: '/',
      serveIndex: true,
      watch: true,
    },
    open: true,
    host: 'localhost',
    port: '8001',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|svg|pdf)$/,
        use: ['file-loader'],
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: `./src/app.html`,
      filename: `${APP_DIST_PATH}/index.html`,
      // favicon: `./src`,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  mode: 'none',
};
/* eslint no-var: off */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
/* eslint global-require: 0 */
/* eslint import/no-unresolved: [2, { ignore: ['\local.json$'] }]*/

var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './js/app.js',
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react'] } },
      { test: /\.css$/, loader: 'style!css' },
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
  ],

};

const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: './src/index.jsx',

  output: {
    path: path.resolve('../../dist/js'),
    filename: '[name]-[hash].js',
  },

  plugins: [
    new BundleTracker({ filename: './webpack-stats.json' }),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }, // to transform JSX into JS
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx'],
  },
};

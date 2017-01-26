const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/index',
  ],

  output: {
    path: path.resolve('dist'),
    filename: '[name]-[hash].js',
    publicPath: 'http://127.0.0.1:3000/static/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BundleTracker({ filename: './webpack-stats.json' }),
    new webpack.DllReferencePlugin({
      // An absolute path of your application source code
      context: path.join(__dirname, "src"),
      // The path to the generated vendor-manifest file
      manifest: require(path.join(__dirname, "./vendor/vendor-manifest.json"))
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx'],
  },
  watchOptions: {
    poll: true,
  },
};

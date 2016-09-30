var webpack = require('webpack');
var path = require('path');

// Represents the directory path of the bundle file output
var BUILD_DIR = path.resolve(__dirname, 'src/public');
// Holds the directoty path of React application's codebase
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  // Specifies the entry file using which the building process starts (main -> Java)
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      }
    ]
  }
};

module.exports = config;
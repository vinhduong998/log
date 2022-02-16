const path = require('path');

module.exports = {
  mode: 'development',
  entry: "./src/socket.js",
  output: {
    filename: "bundle.js",
    path: __dirname + '/public'
  }
};

// command auto webpack: webpack -w

const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require( "terser-webpack-plugin" );
const path = require('path');

module.exports = [{
  entry: ['./src/socket.js'],
  externals: [
    nodeExternals({
    }),
  ],
  watch: false,
  mode: "production",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      'src': path.resolve(process.cwd(), './src/') /** <<< DO NOT REMOVE THIS LINE ... */
    },
    symlinks: false,
  },
  output: {
    filename: "bundle.js",
    path: __dirname + '/public'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
        },
      }),
    ],
  },
}]

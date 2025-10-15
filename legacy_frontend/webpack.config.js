const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',       // your JS entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,                 // cleans dist before build
  },
  plugins: [
    new HtmlWebpackPlugin()      // no template provided
  ],
};
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'minishader.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'MS',
    libraryTarget: 'umd',
  },
  devtool: 'source-map'
};
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 2000,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});

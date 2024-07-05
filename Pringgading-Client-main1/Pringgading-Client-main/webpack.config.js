const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: "./src/scripts/index.js",
    profile: "./src/scripts/profile.js",
    kegiatan: "./src/scripts/kegiatan.js",
    detailkegiatan: "./src/scripts/detailkegiatan.js",
    program: "./src/scripts/program.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer(),
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img',
              publicPath: 'assets/img',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      firebase: path.resolve(__dirname, "node_modules/firebase"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: 'profile.html',
      template: path.resolve(__dirname, 'src/templates/profile.html'),
      chunks: ['profile'],
    }),
    new HtmlWebpackPlugin({
      filename: 'kegiatan.html',
      template: path.resolve(__dirname, 'src/templates/kegiatan.html'),
      chunks: ['kegiatan'],
    }),
    new HtmlWebpackPlugin({
      filename: 'detailkegiatan.html',
      template: path.resolve(__dirname, 'src/templates/detailkegiatan.html'),
      chunks: ['detailkegiatan'],
    }),
    new HtmlWebpackPlugin({
      filename: 'program.html',
      template: path.resolve(__dirname, 'src/templates/program.html'),
      chunks: ['program'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'public/'),
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/public/assets/img', to: 'assets/img' }
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
  },
};

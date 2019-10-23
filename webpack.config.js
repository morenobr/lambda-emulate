/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const packageJson = require('./package.json');

const plugins = [new webpack.optimize.ModuleConcatenationPlugin()];

const commonWebpackConfig = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  externals: [],
  resolve: {
    extensions: ['.js'],
  },
  plugins,
};

module.exports = {
  entry: {
    logger: './src/logger',
    parsers: './src/parsers',
  },
  output: {
    path: path.resolve(__dirname, ''),
    filename: '[name].js',
    library: packageJson.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  ...commonWebpackConfig,
};

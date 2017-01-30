import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import data from './app/data.js';

const production = process.env.NODE_ENV === 'production';

const config = {
  entry: './app',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate',
          'babel?presets[]=es2015',
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!postcss'),
      },
      {
        test: /\.woff$/,
        loader: 'url?mimetype=application/font-woff',
      },
      {
        test: /\.png$/,
        loader: 'file?name=/assets/[name].[ext]',
      },
      {
        test: /\.(ico|htaccess)$/,
        loader: 'file?name=/[name].[ext]',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.html$/,
        loader: 'raw',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: './app/index.ejs',
      title: data.title,
      hash: true,
    }),
  ],
};

if (production) {
  config.plugins = [
    ...config.plugins,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ];
  config.devtool = false;
}

module.exports = config;

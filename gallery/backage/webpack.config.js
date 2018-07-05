const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
  	app : './js/index.js',
    blog : './js/blog.js'
  },
  devServer : {
  	contentBase : './dist',
  	hot : true
  },

  plugins : [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
       title: 'Output Management'
     })
  ],
  output: {
    filename: '[name]bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module : {
    rules : [
      {
        test : /\.css$/,
        use : [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test : /\.(png|svg|jpg|gif)$/,
        use : [
          'file-loader'
        ]
      },
      {
        test : /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      }
    ]
  },
  mode : "development"
};
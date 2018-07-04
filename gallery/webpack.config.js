const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
  	app : './js/index.js'
  },
  devServer : {
  	contentBase : './dist',
  	hot : true
  },

  plugins : [
    new CleanWebpackPlugin(['dist']),
  	new webpack.NamedModulesPlugin(),
  	new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
       title: 'Output Management'
     })
  ],
  output: {
    filename: 'bundle.js',
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
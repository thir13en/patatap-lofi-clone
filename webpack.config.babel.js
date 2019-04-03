const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const projectName = 'LoFi Patatap clone';
const indexPath = 'src/js/Paper.js';
const templatePath = 'src/circles.html';

module.exports = {
  entry: path.join(__dirname, indexPath),
  output: {
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: projectName,
      template: path.join(__dirname, templatePath)
    })
  ],
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  }
};

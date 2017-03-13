const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin('css/style.css');
const extractHTML = new ExtractTextPlugin('index.html');

module.exports = {
  entry:"./src/entry.js",
  output:{path:"./website/", filename:"js/memory.js"},
  module:{
    rules:[
      {test:/\.(js|jsx)$/, use: "babel-loader"},
      {test:/\.css$/, use:extractCSS.extract({use:"css-loader"})},
      {test:/\.html$/, use:extractHTML.extract({use:"html-loader"})}
    ]
  },
  plugins:[
    extractCSS,
    extractHTML,
    new UglifyJSPlugin({comments:false})
  ]
};

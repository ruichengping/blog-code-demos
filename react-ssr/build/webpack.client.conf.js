const path = require('path');
module.exports = {
  entry:{
    index:path.resolve(__dirname,'../src/index.js')
  },
  mode:'development',
  devtool: 'cheap-module-eval-source-map',
  output:{
    filename:'[name].js',
    path:path.resolve(__dirname,'../dist/client')
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'../src')
    },
    extensions:['.js']
  },
  module:{
    rules:[{
      test:/\.js$/,
      use:'babel-loader',
      exclude:/node_modules/
    }]
  }
}
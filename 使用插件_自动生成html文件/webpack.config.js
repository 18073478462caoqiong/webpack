const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.js',  //修改入口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  //修改出口
  },
  plugins: [new HtmlWebpackPlugin({  //plugins插件配置
    template: "./public/index.html"  //告诉webpack使用插件时,以我们自己的html文件作为模板去生成dist/html文件
  })],
};
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
  module: { //加载器配置
    rules: [ // 规则
      {  //具体规则对象
        test: /\.css$/i,  //匹配.css结尾的文件 i忽略大小写
        use: ["style-loader", "css-loader"], //让webpack使用这两个loader处理css文件
        // 从右到左  不能颠倒顺序
      },
      // css-loader:webpack解析css文件-把css代码一起打包
      // style-loader:css代码插入到DOM上(style标签)
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
};
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
      {
        // 图片文件的配置(仅适用于webpack5版本)
        test: /\.(gif|png|jpg|jpeg)/,
        type: 'asset', //匹配上面的文件后,webpack会把他们当作静态资源处理打包
        // 如果你设置的是asset模式,以8kb大小区分图片文件,
        // 小于8kb的, 把图片文件转成base64, 打包进js中
        // 大于8kb的,直接把图片文件输出到dist下
      }
    ],
  },
};
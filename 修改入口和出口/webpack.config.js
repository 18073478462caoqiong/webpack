const path = require('path');

module.exports = {
  entry: './src/main.js',  //修改入口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  //修改出口
  },
};
//yarn add jquery
// public / index.html
// 入口引入jquery

import $ from 'jquery'
// 编写隔行变色的代码
$("#myLi>li:odd").css("color", "pink")
$("#myLi>li:even").css("color", "skyblue")

// 引入css文件
import './css/index.css'

// 引入less文件
import './less/index.less'
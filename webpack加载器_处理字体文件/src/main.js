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

// 手动引入图片文件
import imgObj from './assets/1.gif'
let theImg = document.createElement('img')
theImg.src = imgObj
document.body.appendChild(theImg)

// 引入字体图标样式文件
import './assets/fonts/iconfont.css'
const theI = document.createElement('i')
theI.className = 'iconfont icon-qq'
document.body.appendChild = theI
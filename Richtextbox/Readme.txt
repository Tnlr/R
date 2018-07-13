--Richtextbox
  --css
    Richtextbox.css // 富文本框渲染文件，运行必要文件
    Richtextbox.css.map // scss转css配置文件，非运行必要文件
    Richtextbox.scss // 富文本框渲染初始文件，非运行必要文件
    --base
        _R.scss // 基础引用文件，非运行必要文件
	normalize.css // 同一化诸多浏览器部分表现差异，非运行必要文件
  --js
    --richbox.js // 符文框初始化及获取内容文件，运行必要文件
    --base 
        R_0.2.js // 基础引用文件，运行必要文件
        vue.js // 基础引用文件，运行必要文件
    --component
        richobox.html.js // 富文本框组件
  Richtextbox.html // 富文本框demo, 非运行必要文件



引用说明：
    1.在一个div（自己设定css）中引入写入<rich-box></rich-box>
    2.在body底部引入richbox.js文件即可


需要更改地方：
1.图片功能
2.链接功能
3.同一个页面多次引入无效，只有第一处无效。原因：用的id。
4. 自己选择改变颜色字体与背景。
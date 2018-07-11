
// 可以使用的函数


var Rm = {
	getStyle : function (e, i) { // 获取css文件中的样式，兼容ie
		if (e.currentStyle) {
			return e.currentStyle[i];
		} else {
			return window.getComputedStyle(e, null)[i];
		}
	}
};
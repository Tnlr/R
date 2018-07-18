
function addcss (url) { // 动态添加css
	var css = document.createElement('link');
	css.rel = 'stylesheet';
	css.type = 'text/css';
	css.href = url;
	document.getElementsByTagName('head')[0].appendChild(css);
}

function addScript (url, callback) { // 动态添加js
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
}

// 添加前置css与js
addcss('./css/Richtextbox.css');
addcss('./css/base/normalize.css');
addScript('./js/base/vue.js');
addScript('./js/base/R_0.2.js');


// 判断vue.js与R_0.2.js加载完成后再加载richbox.html.js

var addRichBox_html_js = function () {
	if (typeof(Vue) !== 'undefined' && typeof(R) !== 'undefined') {
		addScript('./js/component/richbox.html.js');
	} else {
		setTimeout(addRichBox_html_js, '10');
	}
};

// 判断richbox.html.js加载完成后再运行当前页面函数
var addVm = function () {
	if (typeof(RrichTextBoxVariable) != 'undefined') {
		vm();
		getRichTextBoxContent();
	} else {
		setTimeout(addVm, '10');
	}
};


// 当前页面函数

// vue初始化
function vm () {
	new Vue({
		el : 'rich-box',
	});
}

// 获取富文本框内容
function getRichTextBoxContent () {
	var code = R('#R-richTextBoxContent').html();
	code = code.replace(/<p>/g, '<code>').replace(/<\/p>/g, '</code>');
	code = code.replace(/<div>/g, '<p>').replace(/<\/div>/g, '</p>');
	return code;
	// return code.replace(/<\/div>/g, '</p>').replace(/<\/div>/g, '</p>');
}

addRichBox_html_js();
addVm();
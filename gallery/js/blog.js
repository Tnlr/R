

var vm = new Vue({
	el : '#body',
	data : {
		navlists : [
			{ content : '主页', href : '#all' },
			{ content : '第一章：Javascript简介', href : '#first' },
			{ content : '第二章：在HTML中使用Javascript', href : '#all' },
			{ content : '轮播', href : '#all' }
		]
	}
});

window.onload = fsetNavHeight;
window.onresize = fsetNavHeight;

// version : 0.2
// 无法应用与动态添加的标签

function c () {
	setTimeOut(function () {
		c();
	}, 1000);
}


// 定义构造函数

var r = function (i, s) {
	this.length = 0;

	for(var item in i) {

		if(item === 'length') {
			break;
		}
		this[this.length++] = i[item];
	}
};
// 定义构造函数原型

r.prototype = {

	// 给所有元素加上事件
	on : function (c, callback) {
		for (var item in this) {
			if(item === 'length') {
				break;
			}
			this[item].addEventListener(c, callback);
		}
	},

};


// 选择器函数
// document.querySelectorAll()用于静态？ 使用时注意
var R = function (i) {

	// 判断i是否给出
	if (!i) {
		console.error('R:: need parameter!');
		return false;
	}

	return new r(document.querySelectorAll(i), i);
	// var t = i.split(' ');
};


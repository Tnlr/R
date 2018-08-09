

// 对象模式，多次复用需要使用不同的变量名

var varPageing = {
	number : [], // 按钮节点
	prebutton : '',
	nextbutton : '',
	totalpage : 14,
	nowpage : 1,
	

	init : function (callback) {
		this.getElement();

		this.number[this.number.length - 1].innerHTML = this.totalpage; // 赋值给最后一页
		this.number[0].classList.add('nowpageing'); // 给第一个加样式
		this.nextPage();
		this.prePage();
		this.numberPage();
		if (callback instanceof Function) {
		    this.varPageingRequest = callback;
		}
	},
	// 获取按钮
	getElement : function () {
		var e = document.querySelectorAll('.pageing li');
		for(var item = 0; item < e.length; item++) {
			if (item === 0) { // 上一页按钮赋给prebutton
				this.prebutton = e[item];
			} else if (item === e.length - 1) { // 下一页按钮赋给nextbutotn
				this.nextbutton = e[item];
			}  else {
				this.number[this.number.length++] = e[item];
			}
		}
	},

	// 下一页操作
	nextPage : function () {

		this.nextbutton.onclick = function () {
			if (varPageing.nowpage === varPageing.totalpage) { // 最大页时返回
				return false;
			}

			varPageing.nowpage++; // 增加当前页

			if (varPageing.nowpage <= 4 || varPageing.nowpage > varPageing.totalpage - 3) { // 小于第四页时变背景
				varPageing.nowpageStyle();
			} else if (varPageing.nowpage === varPageing.totalpage - 3) { // 最后四页时变按钮
				varPageing.changeValue('...', varPageing.totalpage - 4, varPageing.totalpage - 3,  varPageing.totalpage - 2, varPageing.totalpage - 1);
			} else { // 大于第四页，小于最后四页时变数字
				varPageing.changeValue('...', Number(varPageing.number[2].innerHTML) + 1, Number(varPageing.number[3].innerHTML) + 1,  Number(varPageing.number[4].innerHTML) + 1, '...');
			}

			if (varPageing.varPageingRequest) {
				varPageing.varPageingRequest();
			}
		};
	},

	// 上一页操作
	prePage : function () {
		this.prebutton.onclick = function () {

			if (varPageing.nowpage === 1) { // 为第一页时返回
				return false;
			}

			varPageing.nowpage--;

			if (varPageing.nowpage < 4 || varPageing.nowpage >= varPageing.totalpage - 3) {
				varPageing.nowpageStyle();
			} else if (varPageing.nowpage === 4) {
				varPageing.changeValue(2, 3, 4, 5, '...');
			} else {
				varPageing.changeValue('...', Number(varPageing.number[2].innerHTML) - 1, Number(varPageing.number[3].innerHTML) - 1,  Number(varPageing.number[4].innerHTML) - 1, '...');
			}

			if (varPageing.varPageingRequest) {
				varPageing.varPageingRequest();
			}
		};
	},

	// 点击数字翻页 
	numberPage : function () {
		for (var item = 0; item < this.number.length; item++) {
			this.number[item].onclick = function () {
				if (this.innerHTML === '...') { // 点击时为非数字，返回
					return false;
				}

				varPageing.nowpage = Number(this.innerHTML); //将当前点击数字赋值给当前页

				if (varPageing.nowpage <= 4) {
					varPageing.changeValue(2, 3, 4, 5, '...');
				} else if (varPageing.nowpage >= varPageing.totalpage - 3) {
					varPageing.changeValue('...', varPageing.totalpage - 4, varPageing.totalpage - 3,  varPageing.totalpage - 2, varPageing.totalpage - 1);
				} else {
					varPageing.changeValue('...', varPageing.nowpage - 1, varPageing.nowpage,  varPageing.nowpage + 1, '...');
				}

				varPageing.nowpageStyle();

				if (varPageing.varPageingRequest) {
					varPageing.varPageingRequest();
				}

			};
		}
	},

	// 改变所有值
	changeValue : function (a, b, c, d, e) {
		this.number[1].innerHTML = a;
		this.number[2].innerHTML = b;
		this.number[3].innerHTML = c;
		this.number[4].innerHTML = d;
		this.number[5].innerHTML = e;
	},

	// 当前页变样式 
	nowpageStyle : function () {
		for(var item = 0; item < this.number.length; item++) {
			this.number[item].classList.remove('nowpageing');
			if(this.nowpage === Number(this.number[item].innerHTML)) {
				this.number[item].classList.add('nowpageing');
			}
		}
	},

	request : function (callback) {
	}
};


window.onload = function () {

	varPageing.init(function () {
		
	});

};


window.onload = function () {
	pageing.init();
};

var pageing = {
	data : [1, 2, 3, 4, 5],
	upButton : '', //上一页按钮
	nextButton : '', // 下一页按钮
	firstButton : '', // 最后一页
	lastButton : '', // 第一页
	numberButton : '', //数字按钮
	nowpage : 1, // 当前页
	totalpage : 15, // 总页数

	//初始化
	init : function () {
		this.upButton = document.getElementById('pageing').children[0].children[1]; // 获取上一页按钮
		this.nextButton = document.getElementById('pageing').children[0].children[7]; // 获取下一个按钮
		this.firstButton = document.getElementById('pageing').children[0].children[0]; // 获取第一页按钮
		this.lastButton = document.getElementById('pageing').children[0].children[8]; // 获取最后一页按钮

		// 获取数字按钮
		var e = document.getElementById('pageing').children[0];
		var t = [];
		for (var item = 2; item <= e.children.length - 3; item++ ) {
			t[item - 2] = e.children[item];
		}
		this.numberButton = t;

		document.getElementById('pageing').children[0].children[2].classList.add('pageingColor'); // 给第一页加上背景

		this.getElement();
		this.nextPageing();
		this.upPageing();
		this.firstPageing();
		this.lastPageing();
		this.numberPageing();
	},

	// 改变data的值，并将数据填入按钮中
	getElement : function (boll, a, b, c, e, f) {
		var t = [a, b, c, e, f];

		for (var item = 0; item < this.numberButton.length; item++) {
			if(t[0] != '' && t[0] != null && boll === 3) {
				this.data[item] = t[item];
			} else if (boll === 1) {
				this.data[item]++;
			} else if (boll ===2) {
				this.data[item]--;
			}
			this.numberButton[item].innerText = this.data[item];
		}
	},

	// 将背景色调到当前页  
	bgc : function () {
		for (var item = 0; item < this.numberButton.length; item++) {
			this.numberButton[item].classList.remove('pageingColor');
			if(this.nowpage === Number(this.numberButton[item].innerText)) {
				this.numberButton[item].classList.add('pageingColor');
			}
		}
	},

	// 下一页
	nextPageing : function () {
		this.nextButton.onclick = function () {
			if(pageing.nowpage === pageing.totalpage) { // 当前页与总页数相等时返回false
				return false;
			}
			pageing.nowpage++;
			if(pageing.nowpage > 3 && pageing.nowpage < pageing.totalpage - 1) {
				pageing.getElement(1);
			}
			pageing.bgc();

		};
	},

	// 上一页
	upPageing : function () {
		this.upButton.onclick = function () {
			if(Number(pageing.nowpage) === 1) { // 当前页为第一页时返回false
				return false;
			}

			pageing.nowpage--;
			if(pageing.nowpage > 2 && pageing.nowpage < pageing.totalpage - 2) {
				pageing.getElement(2);
			}
			pageing.bgc();
		};
	},

	// 跳转第一页
	firstPageing : function () {
		this.firstButton.onclick = function () {
			if(Number(pageing.nowpage) ===1) { // 如果本身就是第一页无反应
				return false;
			}
			pageing.nowpage = 1;
			pageing.getElement(3, 1, 2, 3, 4, 5);
			pageing.bgc();
		};
	},

	// 跳转最后一页 
	lastPageing : function () {
		this.lastButton.onclick = function () {
			if(Number(pageing.nowpage) === Number(pageing.totalpage)) { // 如果本身就是最后一页无反应
				return false;
			}
			pageing.nowpage = pageing.totalpage;
			pageing.getElement(3, pageing.totalpage - 4, pageing.totalpage - 3, 
				pageing.totalpage - 2, pageing.totalpage - 1,pageing.totalpage);
			pageing.bgc();
		};
	},

	// 点击数字按钮跳转
	numberPageing : function () {
		for (var item in this.numberButton) {

			this.numberButton[item].onclick = function () {
				pageing.nowpage = Number(this.innerText);

				if(pageing.nowpage <= 3) {
					pageing.getElement(3, 1, 2, 3, 4, 5);
				} else if (pageing.nowpage > 3 && pageing.nowpage < pageing.totalpage - 2) {
					pageing.getElement(3, pageing.nowpage - 2, pageing.nowpage - 1, pageing.nowpage, pageing.nowpage + 1, pageing.nowpage + 2);
				} else {
					pageing.getElement(3, pageing.totalpage - 4, pageing.totalpage - 3, 
						pageing.totalpage - 2, pageing.totalpage - 1,pageing.totalpage);
				}

				pageing.bgc();
			};
		}
	},
};
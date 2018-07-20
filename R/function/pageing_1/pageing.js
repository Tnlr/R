
var pageing ={

	number : [],
	prebutton : '',
	nextbutton : '',
	// firstbutton : '',
	// lastbutton : '',
	totalpage : '14',
	nowpage : 1,


	init : function () {
		this.getElement();
		
		this.number[this.number.length - 1].innerHTML = this.totalpage; // 赋值给最后一页
		this.number[0].classList.add('nowpageing'); // 给第一个加样式
		this.nextpage();
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
	nextpage : function () {
		this.nextbutton.onclick = function () {
			pageing.nowpage++; // 增加当前页

			// if (this.nowpage <= 4) {
				pageing.nowpageStyle();
			// }
		};
	},

	// 改变所有值
	changeValue : function (a, b, c, d, e) {
		number[1].innerHTML = a;
		number[2].innerHTML = b;
		number[3].innerHTML = c;
		number[4].innerHTML = d;
		number[5].innerHTML = e;
	},

	// 当前页变样式 
	nowpageStyle : function () {
		for(var item = 0; item < this.number.length; item++) {
			this.number[item].classList.remove('nowpageing');
			console.log(this.nowpage, Number(this.number[item].innerHTML));
			if(this.nowpage === Number(this.number[item].innerHTML)) {
				this.number[item].classList.add('nowpageing');
			}
		}
	}
};

window.onload = function () {
	pageing.init();
};
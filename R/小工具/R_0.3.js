

// version : 0.3
// 无法应用与动态添加的标签

/* Rm{
        getStyle(); 获取css样式
		fireKeyEvent; 模拟键盘事件
		addCss(); 添加css
		addScript(); 添加js
	}

	r{
		on(); 绑定事件
		css(); 获取或修改css
		html(); 获取或修改html代码
		parents(); 获取父级节点
		children(); 获取子节点
		
		changer(); 非对外函数
	}

*/

var Rm = {
	// 获取css文件中的样式，兼容ie
	getStyle : function (e, i) { 
		if (e.currentStyle) { // 处理ie
			return e.currentStyle[i];
		} else { // 非ie
			return window.getComputedStyle(e, null)[i];
		}
	},

	// 模拟键盘事件
	// （安卓浏览器未接触，先不加入）
	fireKeyEvent : function (el, evtType, keyCode){  
	    var doc = el.ownerDocument,  
	        win = doc.defaultView || doc.parentWindow,  
	        evtObj;  

	    if (doc.createEvent) {
	        if (win.KeyEvent) { // firefox 
	            evtObj = doc.createEvent('KeyEvents');  
	            evtObj.initKeyEvent( evtType, true, true, win, false, false, false, false, keyCode, 0 );  
	        } else {  // chrome,safari,opera
	            evtObj = doc.createEvent('UIEvents');  
	            // Object.defineProperty(evtObj, 'keyCode', {  
	            //     get : function() { return this.keyCodeVal; }  
	            // });       // 兼容安卓浏览器 
	            // Object.defineProperty(evtObj, 'which', {  
	            //     get : function() { return this.keyCodeVal; }  
	            // });  // 兼容安卓浏览器 
	            evtObj.initUIEvent( evtType, true, true, win, 1 );  
	            // evtObj.keyCodeVal = keyCode; // 兼容安卓浏览器 
	            if (evtObj.keyCode !== keyCode) {  
	                console.log("keyCode " + evtObj.keyCode + " 和 (" + evtObj.which + ") 不匹配");  
	            }  
	        }  
	        el.dispatchEvent(evtObj);  
	    } else if (doc.createEventObject){ // ie
	        evtObj = doc.createEventObject();  
	        evtObj.keyCode = keyCode;  
	        el.fireEvent('on' + evtType, evtObj);  
	    }  
	},

	// 动态添加css文件
	addCss : function (url) {
		var css = document.createElement('link');
		css.rel = 'stylesheet';
		css.type = 'text/css';
		css.href = url;
		document.getElementsByTagName('head')[0].appendChild(css);
	},

	// 动态添加css文件 
	// 引入需要前置文件时，先检测前置文件是否存在。使用setTimeout()
	addScript : function (url) { // 动态添加js
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url;
		document.getElementsByTagName('head')[0].appendChild(script);
	}
};

// 定义构造函数

var r = function (i) {
	this.length = 0;
	if (i.nodeName) {
		this[this.length++] = i;
	} else {
		for (var item in i) {
			if(item === 'length') {
				break;
			}
			this[this.length++] = i[item];
		}
	}

	

};
// 定义构造函数原型

r.prototype = {

	// 给所有元素加上事件
	// c：事件名。 callback：事件函数
	on : function (c, callback) {
		for (var item = 0; item < this.length; item++) {
			this[item].addEventListener(c, callback);
		}
	},

	// 获取或修改css样式
	// 1. a表示需要查找的样式
	// 2. a表示样式名，b表示样式值
	// 3. a为对象，表示样式
	css : function (a, b) {
		var item;
		if (a && typeof(a) !== "object" && !b) { // 返回第一个匹配元素的相应样式
			return  Rm.getStyle(this[0], a);
		}
		if (a && b) { // 添加单个css样式
			for (item = 0; item < this.length; item++) {
				this[item].setAttribute('style', a + ':' + b);
			}        
		}
		if (typeof(a) === "object" && !b) { // 添加多个css样式
			for (item = 0; item < this.length; item++) {
				this[item].setAttribute('style', JSON.stringify(a).replace(/\{|}|"/g, '').replace(/\,/g, ';'));
			}
		}
	},

	// 获取或修改标签内的html
	// a表示html代码
	html : function (a) {	
		if(!a) { // 返回第一个匹配标签内的html
			return this[0].innerHTML; 
		} else { // 修改所有匹配标签内的html
			for (var item = 0; item < this.length; item++) {
				this[item].innerHTML = a;
			}
		}
	},

	// a表示需要查找的父级节点的标签或者类
	parents : function (a) {
		var t = {length: 0},
		    item,
		    control,
		    c;

		if (a.split('').splice(0, 1).join('') === '.') { // 类
			c = 'className';
			a = a.split('').splice(1).join(''); 
		} else { // 标签
			c = 'nodeName';
		}

		for (item = 0; item < this.length; item++) { // 获取所有节点匹配的节点
			control = this[item];
			while (control !== document.body) {
				if(control.parentNode[c].toLowerCase() === a) {
					t[t.length++] = control.parentNode;
					break;
				}
				control = control.parentNode;
			}
		}

		return this.changer(t);
	},

	// 查找孩子
	// a为查找的标签，类，id
	children : function (a) {
		var item,
		    t = {length : 0};

		for (item = 0; item < this.length; item++) {
			var e = this[item].querySelectorAll(a);
			for(jtem = 0; jtem < e.length; jtem++) {
				t[t.length++] = e[jtem];
			}
		}

		return this.changer(t);
	},

	// // 获取他的指定的同胞节点
	// siblings : function (a) {
	// 	var item,
	// 	    jtem,
	// 	    e,
	// 	    c,
	// 	    t = {length : 0};

	// 	c = a.split('').splice(0, 1).join('');

	// 	for (item = 0; item < this.length; item++) {

	// 		for (jtem = 0; jtem < e.length; jtem++) {
	// 			t[t.length++] = e[jtem];
	// 		}
	// 	}
	// 	return this.changer(t);
	// },

	// 用于对r属性的更换
	changer : function (t) {

		for (var item in t) { // 将同一节点删除
			for (var jtem in t) {
				if (item === jtem) {
					continue;
				}

				if (t[item] === t[jtem]) {
					delete t[jtem];
					t.length--;
					continue;
				}
			}
		}

		for (item = 0; item < this.length; item++) { // 将this中属性删掉
			delete this[item];
		}
		this.length = 0;

		for (item = 0; item < t.length; item ++ ) { // 将t对象赋值给this
			this[this.length++] = t[item];
		}

		return this;
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

	if(typeof(i) === 'object') { // 传入R对象时
		return new r(i);
	} else {
		return new r(document.querySelectorAll(i));
	}
};

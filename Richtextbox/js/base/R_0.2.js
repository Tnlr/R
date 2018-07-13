

// version : 0.2
// 无法应用与动态添加的标签

var Rm = {
	// 获取css文件中的样式，兼容ie
	getStyle : function (e, i) { 
		if (e.currentStyle) { // 处理ie
			return e.currentStyle[i];
		} else { // 非ie
			return window.getComputedStyle(e, null)[i];
		}
	},
	fireKeyEvent : function (el, evtType, keyCode){  
    var doc = el.ownerDocument,  
        win = doc.defaultView || doc.parentWindow,  
        evtObj;  
    if(doc.createEvent){  
        if(win.KeyEvent) {  
            evtObj = doc.createEvent('KeyEvents');  
            evtObj.initKeyEvent( evtType, true, true, win, false, false, false, false, keyCode, 0 );  
        }  
        else {  
            evtObj = doc.createEvent('UIEvents');  
            Object.defineProperty(evtObj, 'keyCode', {  
                get : function() { return this.keyCodeVal; }  
            });       
            Object.defineProperty(evtObj, 'which', {  
                get : function() { return this.keyCodeVal; }  
            });  
            evtObj.initUIEvent( evtType, true, true, win, 1 );  
            evtObj.keyCodeVal = keyCode;  
            if (evtObj.keyCode !== keyCode) {  
                console.log("keyCode " + evtObj.keyCode + " 和 (" + evtObj.which + ") 不匹配");  
            }  
        }  
        el.dispatchEvent(evtObj);  
    }   
    else if(doc.createEventObject){  
        evtObj = doc.createEventObject();  
        evtObj.keyCode = keyCode;  
        el.fireEvent('on' + evtType, evtObj);  
    }  
	},
};

// 定义构造函数

var r = function (i, s) {
	this.length = 0;
	for(var item = 0; item < i.length; item++) {
		this[this.length++] = i[item];

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
	html : function (a) {	
		if(!a) { // 返回第一个匹配标签内的html
			return this[0].innerHTML; 
		} else { // 修改所有匹配标签内的html
			for (var item = 0; item < this.length; item++) {
				this[item].innerHTML = a;
			}
		}
	},

	parent : function (a) {
		for (var item = 0; item < this.length; item++) {
			return this[item].parentNode;
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

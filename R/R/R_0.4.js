

// version : 0.3
// 只是函数库，将类js删除

/* R{	
		showUploadImg(); 上传文件后改变文字，如果由img标签，显示图片。
		（用法：div.r-upload>input+span+img)：上传框，文字描述，显示图片
		estUpload({e: e, size: number, type: []})：判断上传文件的大小与类型：目标，大小，类型

		-----------------------------------------------
		getDate(type, date); 获取当前年月日：连接符，时间对象（没有时返回当前日期）
		lmtNum(input, bool)： 限制只能数字输入：目标，第一位是否可以为0
		lmtLength(input, length)：限制输入的长度：目标，长度
		estIdcard(input)：判断身份证：目标
		estPhone(input)：判断电话号码：目标
		estEmail(input)：判断邮箱：目标
		estEmpty(input)：判断是否为空：目标
		----------------------------------------------
        getStyle(e, i)：获取css样式：目标，样式名
		fireKeyEvent(el, evtType, keyCode)：模拟键盘事件：目标，事件类型，触发按键代码
		addCss(url)：添加css：链接
		addScript(url)：添加js：链接
		----------------------------------------------
		addHandler(element, type, handler)：添加事件函数：元素，事件类型，事件
		removeHandler(element, type, handler)：移除事件函数：元素，事件类型，移除的事件
		getEvent(event)：获取事件对象：事件对象
		getTarget(event)：获取事件目标：事件对象
		preventDefault(event)：取消事件默认行为：事件对象
		stopPropagation(event)：取消事件冒泡：事件对象
		getRelatedTarget(event)：获取相关元素：事件对象
		getWheelDelta()：获取鼠标滚轮增量值
		getCharCode(event)：获取字符编码
	}

*/

var R = {

// 与css由交互的UI函数

	// 显示上传的图片
    showUploadImg : function () {
    	var eInput = document.querySelectorAll('.r-upload input');
    	for (var item in eInput ) {
    		if (item === 'length') {
    			break;
    		}
    		this.addHandler(eInput[item], 'change', function () {
    			this.parentNode.querySelector('span').innerHTML = '已上传'; // 改变文字内容
    			var url = window.URL.createObjectURL(this.files[0]); // 获取上传文件的路径
    			if (this.parentNode.querySelector('img') instanceof Object) { // 同级有img图片标签时，将上传的图片显示粗来
    				this.parentNode.querySelector('img').setAttribute('src', url);
    			}
    		});
    	}
    },

    // 判断上传的文件的大小类型
    // e, size,type：目标，大小,类型
    estUpload : function (upload) {
    	if(!(upload instanceof Object)) { // 判断传入的是否是对象
    		console.error('TypeError：Object parameter required');
    		return false;
    	}

    	if(upload.e.files[0] instanceof Object) { // 不上传时跳过判断
    	    var eUpload = upload.e.files[0];
    	} else {
    	    return true;
    	}

		if(typeof upload.size === 'number' && eUpload.size > upload.size) { // 判断大小
			return false;
		}

		if (upload.type instanceof Object) { // 判断是否传入了类型限制
			var t = eUpload.type.split('/'); // 将上传文件的类型分离
			for(var item in upload.type) {
				if (upload.type[item] === t[0]) { // 当文件类型与要求类型相同时返回true
					return true;
				}
			}
			return false;
		}
    	return true;	
    },

//------------------------------------------------
//js库

	// 返回年月日
	// type为需要返回的时间连接符, date为时间对象, date为空时返回当前日期
	getDate : function (type, date) {
		var time;
		var month,day;

		time = date instanceof Object ? new Date(date) : new Date();
		month = time.getMonth() < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1;
		day = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();

	    return time.getFullYear() + type + month + type + day;
	},

	// 限制只能数字输入：目标，第一位是否可以为0
	lmtNum : function(input, bool) {

		var reg = bool === true ? /\D|/g : /\D|^0/g;

		var temp = function () {
			var pagetingtext = input.value;
			input.value = pagetingtext.replace(reg, '');
		};

		this.addHandler(input, 'input', temp); // 输入时
		this.addHandler(input, 'paste', temp); // 粘贴时
		input.setAttribute('ime-mode', 'disabled');
	},

	// 限制输入的长度：目标，长度
	lmtLength : function (input, length) {
		var temp = function () {
			if(input.value.length > length) {
				input.value = input.value.slice(0, length);
			}
		};
		this.addHandler(input, 'input', temp);
		this.addHandler(input, 'propertychange', temp); // 兼容ie
	},

	// 判断身份证：目标
	estIdcard : function (input) {
    	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    	return reg.test(input.value);
	},

	// 判断电话号码：目标
	estPhone : function (input) {
		var reg = /^1\d{10}$/;
		return reg.test(input.value);
	},

	// 判断邮箱：目标
	estEmail : function (input) {
    	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    	return reg.test(input.value);
	},

	// 判断是否为空
	estEmpty : function (input) {
		if(input.value === null || input.value ==='') {
			return false;
		} else {
			return true;
		}
	},

//------------------------------------------------
// 兼容js函数，来自网络

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
	// el:标签，evtType:事件类型,keyCode：模拟按键
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
	},

//------------------------------------------------
// 兼容js库，来自《javascript高级教程》

	// 添加事件函数
	addHandler : function (element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) { // 兼容ie8及以前
			element.attachEvent('on' + type, handler);
		} else {
			element['on' + type] = handler;
		}
	},

	// 移除事件函数
	removeHandler : function (element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent) {
			element.detachEvent('on' + type, handler);
		} else {
			element['on' + type] = null;
		}
	},

	// 获取事件对象
	getEvent : function (event) {
		return event ? event : window.event;
	},

	// 获取目标
	getTarget : function (event) {
		return event.target || event.srcElement;
	},

	// 取消事件默认行为
	preventDefault : function (event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},

	// 取消事件冒泡
	stopPropagation : function (event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},

	// 获取相关元素
	getRelatedTarget : function (event) {
		if (event.relatedTarget) {
			return event.relatedTarget;
		} else if (event.toElement) {
			return event.toElement;
		} else if (event.fromElement) {
			return fromElement;
		} else {
			return null;
		}
	},

	// 获取鼠标滚轮增量值
	getWheelDelta : function () {
		if (event.wheelDelta) {
			return (client.engine.opera && client.engine.opera < 9.5 ? - event.wheelDelta : event.wheelDelta);
		} else {
			return - event.detail * 40;
		}
	},

	// 获取字符编码
	getCharCode : function (event) {
		if(typeof event.charCode == 'number') {
			return event.charCode;
		} else {
			return event.keyCode;
		}
	}


};
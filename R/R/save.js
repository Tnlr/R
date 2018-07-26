
// 事件处理函数

var EventUtil = {
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
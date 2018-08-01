var Rajax = {

	type : 'post',
	data : '',
	url : '',
	async : true,
	contentType : false,

	ar : function (c) {
		
		var item;

		// 循环遍历
		for(item in c) {
			for (var jtem in Rajax) {
				if(item === jtem) {
					this[jtem] = c[item];
				}
			}
		}

		if(c.data) { // 对数据进行处理
			 //formdata方式
			if(c.data instanceof FormData) {
				this.data = c.data;
			} else {
			 // 对象方式
				for (item in c.data) {
					this.data += '&' + item + '=' + c.data[item];
				}
				this.data = this.data.substr(1);
				this.contentType = 'application/x-www-form-urlencoded';
			}
		}

		this.requestfunction(c.success);
	},

	requestfunction : function (success) {
		var xmlhttp;

		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else {
			xmlhttp = new ActiveXObject('Microsoft.XMLHPPT');
		}

		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
				success(evil(xmlhttp.responseText));
			}
		};

		xmlhttp.open(this.type, this.url, this.async);

		if(this.contentType) {
			xmlhttp.setRequestHeader("Content-type", this.contentType);
		}
		xmlhttp.send(this.data);

	}
};

// 用于替换eval函数
function evil(fn) {
	var Fn = Function;
	return new Fn('return' + fn)();
}
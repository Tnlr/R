var Rajax = {

	type : 'post',
	data : '',
	url : '',
	async : true,
	contentType : false,

	ar : function (c) {
		
		var item;

		// 将传入的对象属性赋值给Rajax的属性
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

// 表单序列化
function serialize (form) {
	var parts = [],
	    field = null,
        i,
        len,
        j,
        optLen,
        option,
        optValue;

    for (i = 0, len = form.elements.length; i < len; i++) {
    	field = form.elements[i];

    	switch(field.type) {
    		case "select-one" :
    		case "select-multiple" :

    		if (field.name.length) {
    			for (j = 0, optLen = field.options.length; j < optLen; j++) {
    				option = field.options[j];
    				if (option.selected) {
    					optValue = "";
    					if (option.hasAttribute) {
    						optValue = (option.hasAttribute('value') ? option.value : option.text);
    					} else {
    						optValue = (option.hasAttributes['value'].specified ? option.value : option.text);
    					}
    					parts.push(encodeURIComponent(field.name) + '=' + encodeURIComponent(optValue));
    				}
    			}
    		}
    		    break;

    		case undefined :
    		case 'file' :
    		case 'submit' :
    		case 'reset' :
    		case 'button' :
    			break;

    		case 'radio' :
    		case 'checkbox' :
    		    if (!field.checked) {
    		    	break;
    		    };

    		default :
    		    if (field.name.length) {
    		    	parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
    		    }
    	}
    }
    return parts.join('&');
}
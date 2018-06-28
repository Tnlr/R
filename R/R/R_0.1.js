

/* m:必需参数 o:可选参数 */

var R = {

    // 节点操作开始: n(i); pn(p, c); an(i, a, v);

	/*
	*  判断传入的节点
	*  i(m): #id .class tag
	*/
    n: function(i) {
    	var c, e = []; //c用于判断，e返回的节点
    	var item; //循环
        // 判断i是否为空
        if (!i) {
            console.log('R.n():: need node Id!');
            return false;
        }

        // 判断传入是否为id
        c = i.split('').splice(0, 1).join('');
        if (c === '#') {
	        if (document.getElementById(i.split('').splice(1).join(''))) {
	        	return document.getElementById(i.split('').splice(1).join(''));
	        } else {
				console.log("R.n():: id [" + i + "] can't find node!");
				return false; 	
	        }
        }

        // 的判断传入的是否是class
        if (c === '.') {
        	c = document.getElementsByClassName(i.split('').splice(1).join(''));
        	if (c.length !== 0) {
        		for (item in c) {
        			if(item === 'length') {
        				return e;
        			}
        			e.push(c[item]);
        		}
        	} else {
        		console.log("R.n():: class [" + i + "] can't find node!");
        		return false;
        	}
        	
        }

        // 判断传入是否是标签
        c = document.getElementsByTagName(i);
        if (c.length !== 0) {
        	for (item in c) {
        		if(item === 'length') {
        			return e;
        		}
        		e.push(c[item]);
        	}
        } else {
        	console.log("R.n():: tag [" + i +"] can't find node!");
        	return false;
        }


    },

    /*
	*  获取后代节点
    *  p(m):父级节点
    *  c(m):要查找的子节点[id, class, tag]
    */
    pn : function (i, ch) {
        // var i, e; 
        var c, e; // c:存放标识符，e:存放id||class名
    	var t = []; // 存放i切割开的数组
    	var  item;

        c = ch.split('').splice(0, 1).join('');
        e = ch.split('').splice(1).join('');

        // 寻找的子元素为id时
        if (c === '#') {
            for (item in i.children) {
                if(i.children[item].id === e) {
                    return i.children[item];
                }
            }
            console.log("R.pn():: id [" + i +"] can't find node!");
            return false;
        }

        // 寻找子元素为class时
        if (c === '.') {
            for (item in i.children) {
                if(i.children[item].className === e) {
                    t.push(i.children[item]);
                }
            }
            if (t.length !== 0) {
                return t;
            } else {
                console.log("R.pn():: class [" + i +"] can't find nodes!");
                return false;
            }
        }

        // 寻找的子元素为标签时
    	for (item in i.children) {
            if (i.children[item].tagName === ch.toUpperCase()) {
                t.push(i.children[item]);
            }
    	}
        if (t.length !== 0) {
            return t;
        } else {
            console.log("R.pn():: tag [" + i +"] can't find nodes!");
            return false;
        }
    },

    /*
    *  获取指定属性和属性值的节点
	*  i(m):标签名
	*  a(m):要获取的属性
	*  v(m):要获取属性的值
    */
    an : function (i, a, v) {
    	if (!a || !v) {
    		console.log('R.an():: need attribute or value!');
    		return false;
    	}

        var e, t = []; // 节点，数组
        var item;

        // 对象标签
        if (typeof i === 'object') {
            for (item in i) {
                if(i[item].getAttribute(a) === v) {
                    t.push(i[item]);
                }
            }

            if (t.length !== 0) {
                return t;
            } else {
                console.log("R.an():: object [" + i +"] can't find node!");
                return false;
            }

        }

        e = this.n(i);

    	for (item in e) {
    		if(e[item].getAttribute(a) === v) {
    			t.push(e[item]);
    		}
    	}

    	return t;
    },

    // 节点操作结束


    /* 
    *  绑定事件函数
    *  ev: 要绑定的事件
    *  i: [id, class, tag]
    *  f: 要执行的函数
    */
    nf : function (ev, i, f) {

        if (!ev || !i || !f) {
            console.log("R.nf():: Need parameters!");
            return false;
        }

        var c, e; // 标识符，id || class || tag，事件
        var item;

        // 对象标签事件绑定
        if(typeof i === 'object') {
            try{
                for (item in i) {
                    i[item].addEventListener(ev, f);
                }
                return true;
            } catch (ex) {
                console.log(ex);
                console.log("R.nf()::The provided " + i + " is not a node!");
                return false;
            }
        }

        c = i.split('').splice(0, 1).join('');
        e = this.n(i.split('').splice(0).join(''));

        if(!e) {
            return false;
        }

        if (c === '#') { // id事件绑定
            e.addEventListener(ev, f);
        } else if (c === '.') { // class事件绑定
            for (item in e) {
                e[item].addEventListener(ev, f);
            }
        } else { // tag事件绑定
            e = this.n(i);

            if(!e) {
                return false;
            }

            for (item in e) {
                e[item].addEventListener(ev, f);
            }
        }

        

    },


    // 功能函数开始：lmt(i, f, l); est(i, f); Date(t, f);

    /* 
     *  限制函数：可以限制只输入数字或字母，限制长度
     *  i(m):传入id，id前必需加#
     *  f(m):输入要限制的类型[num, length, alphabet]
     *  l(m):f为"length"时必需，控制限制的长度
     */
    lmt: function(i, f, l) {

    	var e = this.n(i);
    	// 无法找到节点时返回
    	if(!e) {
    		return false;
    	}

        // 先判断传入的参数
        if (!f) {
            console.log("R.lmt():: need implementation rules(num || length || alphabet)!");
            return false;
        } else if (f == 'length' && !l) {
            console.log('R.lmt():: need length value!');
            return false;
        }

        // 限制只能输入数字
        e.oninput = function() {
            if (f == 'num') {
                e.value = e.value.replace(/\D|^0/g, '');
            } else if (f == 'length') {
                if (e.value.length > l) {
                    e.value = e.value.slice(0, l);
                }
            } else if (f == 'alphabet') {
                e.value = e.value.replace(/[^a-zA-Z]/g, '');
            } else {
                console.log("R.lmt():: type error!");
            }
        };
    },

    /*
    *  i(m):id
    *  f(m):类型[idcard, phone, email]
    */
    est : function (i, f) {
    	
    	var e = this.n(i);
    	var reg;
    	if(!e) {
    		return false;
    	}

    	if(!f) {
    		console.log('R.est():: need type!');
    		return false;
    	}

    	// 确定正则表达式
    	if(f === 'idcard') {
    		reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    	} else if (f === 'phone') {
    		reg = /^1\d{10}$/;
    	} else if (f === 'email') {
    		reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    	} else {
    		console.log('R.est():: type error!');
    	}

    	if(!reg.test(e.value, reg)) {
    		return false;
    	} else {
    		return true;
    	}
    },

    /* 
     *  获取时间：获取当前时间格式，传入UNIX时间戳输出格式化时间格式
     *  t(o):传入UNIX时间戳
     *  f(o,['-','/']):时间输出格式
     */
    Date: function(t, f) {
        var tm = new Date();
        var m, d;
        if (t) {
            tm = new Date(t);
        }
        if (tm.getMonth() < 10) {
            m = '0' + (tm.getMonth() + 1);
        } else {
            m = tm.getMonth() + 1;
        }

        if (tm.getDate() < 10) {
            d = '0' + tm.getDate();
        } else {
            d = tm.getDate();
        }
        if (f == '/') {
            return tm.getFullYear() + '/' + m + '/' + d;
        } else if (f == '-' || f == null || f == '') {
            return tm.getFullYear() + '-' + m + '-' + d;
        } else {
            console.log('R.nowDate():: type error!');
            return false;
        }
    },

    // 功能函数结束

    // input标识开始

    irs : function () {
        this.ir.init();
    },

    ir : {
        re : [],
        init : function () {
            // console.log(document.getAttribute('reb'));
            console.log(document.getElementsByTagName('button'));
        },

        isnull : function () {

        }
    }

    // input标识结束

};

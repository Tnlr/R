

var vm = new Vue({
	el : '#subpage',
	data : {
		// 导航
		navlists : [
			{ content : '主页', href : '#all' },
			{ content : '第一章：Javascript简介', href : '#introduction' },
			{ content : '第二章：在HTML中使用Javascript', href : '#useJs' },
			{ content : '第三章：基本概念', href : '#basicConcept' }
		],

		// 第一章

		introduction_unorder_1 : ['语法', '类型', '语句', '关键字', '保留字', '操作符', '对象'],
		introduction_order_1 : [
			'支持ECMA-262描述的所有“类型，值，对象，属性，函数以及程序句法与语义”',
			'支持Unicode字符标准。',
			'添加ECMA-262没有描述的“更多类型，值，对象，属性和函数”, ECMA-262所说的这些新增特性，主要是指该标准中没有规定的新对象和对象的新属性。（扩展）',
			'支持ECMA-262没有定义的“程序与正则表达式语法”。（也就是说，可以修改和扩展内置的正则表达式语法）（扩展）'
		],
		introduction_table_1 : {
			th : ['模块', '描述'],
			tr : [
				['DOM视图(DOM Views)', '定义了跟踪不同文档(例如，应用css之前与之后的文档)视图的接口'],
				['DOM事件(DOM Events)', '定义了事件和事件处理的接口。'],
				['DOM样式(DOM Style)', '定义了基于CSS为元素应用样式的接口。'],
				['DOM遍历与范围(DOM Traversal and Range)', '定义了遍历和操作文档树的接口。']
			]
		},
		introduction_unorder_2 : [
			'弹出新浏览器窗口的功能。',
			'移动，缩放和关闭浏览器窗口的功能。',
			'提供浏览器详细信息的navigator对象。',
			'提供浏览器所加载页面的详细信息的location对象。',
			'提供用户显示分辨率详细信息的screen对象。',
			'对cookies的支持。',
			'像XMLHttpRequest和IE的ActiveXObject这样的自定义对象。'
		],

		// 第二章

		useJs_table_1 : {
			th : ['属性', '描述'],
			tr : [
				['async', '可选，表示应该立即下载脚本，但不应妨碍页面中的其他操作。只对外部脚本文件有效。'],
				['charset', '可选，表示通过src属性指定的代码的字符集。（很少人使用）'],
				['defer', '可选，表示脚本可延迟到文档完全被解析和显示之后执行。'],
				['src', '可选，表示包含要执行代码的外部文件。'],
				['type', '可选，表示编写代码使用的脚本语言的内容类型（也称为MIME类型）。'],
				['language', '已废弃'],
			]
		},
		useJs_table_2 : {
			th : ['模式类型', '代码'],
			tr : [
				['HTML 4.01严格型', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/htm14/strict.dtd">'],
				['XHTML 1.0严格型', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'],
				['HTML 5', '<!DOCTYPE html>'],
			]
		},
		useJs_table_3 : {
			th : ['模式类型', '代码'],
			tr : [
				['HTML 4.01过渡型', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/htm14/loose.dtd">'],
				['HTML 4.01框架集型', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/htm14/frameset.dtd">'],
				['XHTML 1.0过渡型', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'],
				['XHTML 1.0框架集型', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-Frameset.dtd">']
			]
		},

		// 第三章 

		basicConcept_unorder_1 : [
			'区分大小写',
			'标识符：指变量名、函数、属性的名字，或者函数参数。（第一个字符必须为字母、下划线_、美元符号$；其他字符可以是字母、下划线、美元符号、数字）',
			'// 单行注释',
			'/* 多行注释 */',
			'严格模式：user strict（可全局声明，也可以单独一个函数声明）',
			'每一句最后的分号(;)不是必须的，但是建议都加上'

		],
		basicConcept_table_1 : {
			th : ['类型', '值'],
			tr : [
				['ECMAScript关键字（*为第五版新增）', 'break、 do、 instanceof、 typeof、 case、 else、 new、 var、 catch、 finally、 return、 vold、 debugger*、 function、 this、 with、 default、 if、 throw、 delete、 in、 try'],
				['ECMA-262第三版定义的全部保留字', 'abstract、 enum、 int、 short、 boolean、 export、 interface、 static、 byte、 extends、 long、 super、 char、 final、 native、 synchronized、 class、 float、 package、 throws、 const、 goto、 private、 transient、 debugger、 implements、 protected、 volatile、 double、 import、 public'],
				['第五版非严格模式缩减之后的保留字', 'class、 enum、 extends、 super、 const、 export、 import'],
				['第五版严格模式额外添加的保留字', 'implements、 package、 public、 interface、 private、 static、 let、 protected、 yield']
			]
		},
		basicConcept_unorder_2 : [
			'用var声明变量。(非严格模式下不加var将会声明全局变量)',
			'在函数体外声明为全局变量，在任何位置都能访问。',
			'在函数内声明为局部变量，只有在该函数内能访问。'

		],

		contentform_unorder_1 : ['lorem', 'lorem', 'lorem'],
		contentform_order_1 : ['lorem', 'lorem', 'lorem'],
		cotentform_table_1 : {
			th : ['lorem', 'lorem'],
			tr : [
				['lorem-1', 'lorem_1'],
				['lorem-2', 'lorem_2'],
				['lorem-3', 'lorem_3']
			]
		}
	}
});

window.onload = fsetNavHeight;
window.onresize = fsetNavHeight;
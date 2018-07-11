

var range;

Vue.component('rich-box', {
	data : function() {

		// name:按钮名, bgi:按钮背景, method:按钮事件(document.execCommand的参数)
		// parameter:（document.execCommand的参数）

		var lists = [ 
			{ bgi : './src/img/010-left-alignment.png', method : 'justifyLeft' }, // 左对齐
			{ bgi : './src/img/008-center-alignment.png', method : 'justifyCenter' }, // 居中
			{ bgi : './src/img/009-right-alignment.png', method : 'justifyRight' }, // 右对齐
			{ bgi : './src/img/007-bold.png', method : 'bold' }, // 加粗
			{ bgi : './src/img/006-italic.png', method : 'italic' }, // 斜体
			{ bgi : './src/img/005-underline.png', method : 'underline' }, // 下划线
			{ bgi : './src/img/003-hr.png' , method : 'inserthorizontalrule'}, // 分隔线
			{ bgi : './src/img/001-numbered-list.png', method : 'insertorderedlist'}, // 有序列表
			{ bgi : './src/img/002-list.png', method : 'insertunorderedlist'}, // 无序列表
			// { bgi : './src/img/002-picture.png', method : 'insertimage', Parameter : 'http://files.cnblogs.com/files/xiaohuochai/zan.gif'}, // 插入图片
			// { bgi : './src/img/001-search.png' , method : 'createlink', Parameter : 'www.cnblogs.com/xiaohuochai'}, // 插入链接
			{ bgi : './src/img/004-back-arrow.png', method : 'undo'}, // 上一步
			{ bgi : './src/img/003-share.png', method : 'redo'}, // 下一步
		];

		var headerlists = [ // 标题
			{ name : 'H1', method : 'formatBlock', Parameter : 'H1' },
			{ name : 'H2', method : 'formatBlock', Parameter : 'H2'  },
			{ name : 'H3', method : 'formatBlock', Parameter : 'H3'  },
			{ name : 'H4', method : 'formatBlock', Parameter : 'H4'  },
			{ name : 'H5', method : 'formatBlock', Parameter : 'H5'  },
			{ name : 'H6', method : 'formatBlock', Parameter : 'H6'  },
		];

		var fontlists = [ // 字体大小
			{ name : '1', method : 'fontSize', Parameter : '1' },
			{ name : '2', method : 'fontSize', Parameter : '2' },
			{ name : 'F', method : 'fontSize', Parameter : '3' },
			{ name : '4', method : 'fontSize', Parameter : '4' },
			{ name : '5', method : 'fontSize', Parameter : '5' },
			{ name : '6', method : 'fontSize', Parameter : '6' },
			{ name : '7', method : 'fontSize', Parameter : '7' },

		];

		return {
			lists : lists,
			fontlists : fontlists,
			headerlists : headerlists
		};
	},
	methods : {
		richboxBlur : function () {
			console.log(this);
			var e = R('#R-richTextBoxContent');
			e.nf('blur', function () {
				range = document.getSelection().getRangeAt(0);
			});
		},

		cycleEvent : function () {
			var es = document.getElementById('R-richTextBoxFeatures').getElementsByTagName('button'); // 获取所有button

			for (var e = 0; e < es.length; e++) { // 遍历
				es[e].onclick = function () { // 为每个按钮添加不同的点击事件
					document.getElementById('R-richTextBoxContent').focus(); // 先聚焦到富文本框内

					var t = this.getAttribute('data-parameter').split(' '); //将属性分成数组
					document.execCommand(t[0], false, t[1]); // 附加富文本框事件

					document.getElementById('R-richTextBoxContent').focus(); // 让富文本框事件执行完后聚焦文本框
				};

				var c = es[e].getAttribute('data-bgi'); // 给特定的按钮加上背景图
				if (c) {
					es[e].setAttribute('style', 'background-image: url(' + c + '); height: 30px; width: 30px;');
				}
			}
		},

	},
	mounted : function () {
		this.cycleEvent();
	},
	template : 
		'<div class="R-richTextBox">' +
			'<div class="R-richTextBoxFeatures" id="R-richTextBoxFeatures">' +
				'<div class="R-richTextBoxFeaturesCommon">' + 
					'<button v-for="list in lists" v-bind:data-parameter="list.method + \' \' + list.Parameter" ' +
					'v-bind:data-bgi="list.bgi">{{ list.name}}</button>' +
				'</div>' + // 一般功能框

				'<div class="R-richTextBoxHeader">' +
					'<a type="button" id="R-richTextBoxHeaderButton">' +
						'<b>H</b>' +
					'</a>' +
					'<div id="R-richTextBoxHeaderContent">' +
						'<button v-for="list in headerlists" v-bind:data-parameter="list.method + \' \' + list.Parameter" >{{ list.name }}</button>' +
					'</div>' +
				'</div>' + // 标题功能框

				'<div class="R-richTextBoxFontSize">' +
					'<a type="button" id="R-richTextBoxFontSizeButton">' +
						'<b>F</b>' +
					'</a>' +

					'<div id="R-richTextBoxFontSizeContent">' +
						'<button v-for="list in fontlists" v-bind:data-parameter="list.method + \' \' + list.Parameter" >{{ list.name }}</button>' +
					'</div>' +
				'</div>' + // 字体大小功能框


			'</div>' + // 功能框

			'<div style="height: 54px; margin-top: 24px;"></div>' + // 用于补距离

			'<div contenteditable="true" class="R-richTextBoxContent" id="R-richTextBoxContent">' +
				'<br />' +
			'</div>' +  // 文本输入框
		'</div>'
});


var range;

var RrichTextBoxVariable
 = Vue.component('rich-box', {
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
			{ name : 'code', Parameter : 'code'},
			{ name : 'TB', method : 'enableInlineTableEditing'}
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

		var fontcolorlists = [
			{method : 'foreColor', Parameter : 'red'},
			{method : 'foreColor', Parameter : 'green'},
			{method : 'foreColor', Parameter : 'blue'},
			{method : 'foreColor', Parameter : 'yellow'},
			{method : 'foreColor', Parameter : '#ffffff'},
			{method : 'foreColor', Parameter : '#000000'},
		];

		var bgclists = [
			{method : 'backColor', Parameter : 'red'},
			{method : 'backColor', Parameter : 'green'},
			{method : 'backColor', Parameter : 'blue'},
			{method : 'backColor', Parameter : 'yellow'},
			{method : 'backColor', Parameter : '#ffffff'},
			{method : 'backColor', Parameter : '#000000'},
		];

		return {
			lists : lists,
			fontlists : fontlists,
			headerlists : headerlists,
			fontcolorlists : fontcolorlists,
			bgclists : bgclists
		};
	},
	methods : {
		cycleEvent : function () {
			var es = document.getElementById('R-richTextBoxFeatures').getElementsByTagName('button'); // 获取所有button

			for (var e = 0; e < es.length; e++) { // 遍历
				es[e].onclick = function () { // 为每个按钮添加不同的点击事件

					document.getElementById('R-richTextBoxContent').focus(); // 让富文本框事件执行前聚焦文本框

					var t = this.getAttribute('data-parameter').split(' '); //将属性分成数组

					if (t[1] === 'code') {
						document.execCommand('formatBlock', false, 'p');
						return false;	
					}


					document.execCommand(t[0], false, t[1]); // 附加富文本框事件

					// 需要带行内样式时加上
					// if (t[0] === 'insertunorderedlist') { // 给无序列表加上样式

					// 	R('#R-richTextBoxContent ul:last-child').css({'list-style' : 'disc', 'margin-left' : '20px'});
					// }

					// if (t[0] === 'insertorderedlist') { // 给有序列表加上样式
					// 	R('#R-richTextBoxContent ol:last-child').css({'margin-left' : '20px'});
					// }

					// if (t[0] === 'inserthorizontalrule') { // 给hr加上样式
					// 	R('#R-richTextBoxContent hr:last-child').css('margin', '10px 0');
					// }



					document.getElementById('R-richTextBoxContent').focus(); // 让富文本框事件执行完后聚焦文本框
				};

				var c = es[e].getAttribute('data-bgi'); // 给特定的按钮加上背景图
				if (c) {
					es[e].setAttribute('style', 'background-image: url(' + c + '); height: 30px; width: 30px;');
				}

				c = es[e].getAttribute('data-bgc'); // 给颜色加上背景色
				if (c) {
					es[e].setAttribute('style', 'background-color: ' + c);
				}
			}
		},
		// 设置输入框高度
		setRichTextBoxContentHeight : function () {
			var c = document.getElementById('R-richTextBoxContent');
			var cHeight = Rm.getStyle(c.parentNode, 'height').split('');
			cHeight.splice(-2, 2);
			cHeight = cHeight.join('');
			c.setAttribute('style', 'height:' + (cHeight - 104) + 'px;');
		},
		
		setCodeArea : function () {
			R('#R-richTextBoxContent').on('keydown', function (e) {
				if (e.keyCode == 13 && e.ctrlKey) {
					document.execCommand('formatBlock', false, 'div');
				}
			});
		},

		output : function () {
			return R('#R-richTextBoxContent').html();
		}

	},
	mounted : function () {
		this.setRichTextBoxContentHeight();
		this.cycleEvent();
		this.setCodeArea();
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

				'<div class="R-richTextBoxFontColor">' +
					'<a type="button" id="R-richTextBoxFontColorButton">' +
						'<b>FC</b>' +
					'</a>' +

					'<div id="R-richTextBoxFontColorContent">' +
						'<button v-for="list in fontcolorlists" v-bind:data-parameter="list.method + \' \' + list.Parameter" '+
						'v-bind:data-bgc="list.Parameter">{{ list.name }}</button>' +
					'</div>' +
				'</div>' + // 字体颜色功能框

				'<div class="R-richTextBoxBgc">' +
					'<a type="button" id="R-richTextBoxBgcButton">' +
						'<b>BC</b>' +
					'</a>' +

					'<div id="R-richTextBoxBgcContent">' +
						'<button v-for="list in bgclists" v-bind:data-parameter="list.method + \' \' + list.Parameter" '+
						'v-bind:data-bgc="list.Parameter">{{ list.name }}</button>' +
					'</div>' +
				'</div>' + // 背景颜色功能框

			'</div>' + // 功能框

			'<div style="margin-top: 24px;"></div>' + // 用于补距离

			'<div contenteditable="true" class="R-richTextBoxContent" id="R-richTextBoxContent">' +
				'<br />' +
			'</div>' +  // 文本输入框
		'</div>'
});

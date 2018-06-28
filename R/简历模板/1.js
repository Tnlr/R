$(function() {
	var c = new Coder("style-text");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*hi,鎴戠殑鍚嶅瓧鍙檲杈帮紝鏄笂娴蜂竴瀹朵簰鑱旂綉鍒涗笟鍏徃鐨勮蒋浠跺伐绋嬪笀</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*鎴戠殑涓昏宸ヤ綔鏄В鍐崇敤鎴风殑浜や簰浣撻獙</div>",2000);
	c.load("<div class='bef_comment writecode'>&nbsp;*璁╂垜浠潵鐐瑰疄闄呯殑锛岀湅鐪嬫垜鑳藉仛浜涗粈涔�</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*璁╂垜浠紑濮嬪惂,鎴戜滑鍏堟潵璁╂墍鏈夌殑鍙樺寲閮戒互鍔ㄧ敾鐨勬晥鏋滄潵鏄剧ず</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>*</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>-webkit-transition</span>: <span class='bef_value'> all 1s</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*鐪嬭捣鏉ヤ技涔庢病浠€涔堝彉鍖栵紝涓嶈鐫€鎬ワ紝鎺ヤ笅鏉ヤ綘灏变細鐪嬪埌</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*浣犳槸涓嶆槸鍘屽€︿簡鐧藉簳榛戝瓧</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*閭ｄ箞璁╂垜浠潵鍋氫竴浜涙敼鍙�</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>html</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>background</span>: <span class='bef_value'>rgb(63, 82, 99)</span>;</div>");
	c.setClass("html", [{
		"name": "background",
		"val": "rgb(63, 82, 99)"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*绋嶇瓑锛屾垜浠潵鏀瑰彉涓€涓嬪瓧浣撶殑棰滆壊</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>pre,a</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>color</span>: <span class='bef_value'>white</span>;</div>");
	c.setClass("pre,a", [{
		"name": "color",
		"val": "white"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*鐜板湪鐪嬭捣鏉ュソ澶氫簡</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*鍦ㄨ繖鏁翠釜椤甸潰閲屽啓浠ｇ爜璁╀汉鏈変簺涓嶈垝鏈�</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*鎴戝噯澶囧垱寤轰竴涓尯鍩熸潵鏇村ソ鐨勬樉绀烘垜鐨勪唬鐮�</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>pre</span><span class='bef_key'>:not(:empty)</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>overflow</span>: <span class='bef_value'>hidden</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "overflow",
		"val": "hidden"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>background</span>: <span class='bef_value'>rgb(48, 48, 48)</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "background",
		"val": "rgb(48, 48, 48)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>border</span>: <span class='bef_value'>1px solid #ccc</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "border",
		"val": "1px solid #ccc"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>max-height</span>: <span class='bef_value'>44.6%</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "max-height",
		"val": "44.6%"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>width</span>: <span class='bef_value'>49%</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "width",
		"val": "49%"
	}]);
	$('#pre:not(:empty)').addClass("toarea");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>font-size</span>: <span class='bef_value'>14<span class='bef_px'>px</span></span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "font-size",
		"val": "14px"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>font-family</span>: <span class='bef_value'>monospace</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "font-family",
		"val": "monospace"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>padding</span>: <span class='bef_value'>10<span class='bef_px'>px</span> 10<span class='bef_px'>px</span> 20<span class='bef_px'>px</span></span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "padding",
		"val": "10px 10px 20px"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>box-shadow</span>: <span class='bef_value'>-4<span class='bef_px'>px</span> 4<span class='bef_px'>px</span> 2<span class='bef_px'>px</span> 0 rgba(0,0,0,0.3)</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "box-shadow",
		"val": "-4px 4px 2px 0 rgba(0,0,0,0.3)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>white-space</span>: <span class='bef_value'>pre-wrap</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "white-space",
		"val": "pre-wrap"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>outline</span>: <span class='bef_value'>0</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "outline",
		"val": "0"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*OK锛岀幇鍦ㄨ鎴戜滑鏉ユ崲涓€涓嬩綅缃�</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*璁╂垜浠噯澶囨潵鍐嶅仛涓€浜涙敼鍙�</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>#style-text</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>-webkit-transform</span>: <span class='bef_value'>translateX(95%)</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform",
		"val": "translateX(95%)"
	}]);
  	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>position</span>: <span class='bef_value'>absolute</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "position",
		"val": "absolute"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*鐜板湪鐪嬭捣鏉ュソ澶氫簡锛屼絾鏄墍鏈夌殑鏂囧瓧棰滆壊閮芥槸鐧借壊鐨�</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*璁╂垜浠潵璁╀粬鐨勫彲璇绘€ф洿濂戒竴鐐瑰惂</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>.comment</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#857F6B</span>; <span class='bef_key'>font-style</span>: <span class='bef_value'>italic</span>; }</div>");
	c.addClass(".bef_comment","comment");
	c.load("<div class='code writecode'><span class='bef_selector'>.selector</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#E69F0F</span>; }</div>");
	c.addClass(".bef_selector","selector");
	c.load("<div class='code writecode'><span class='selector'>.selector .key</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#64D5EA</span>; }</div>");
	c.addClass(".bef_key","key");
	c.load("<div class='code writecode'><span class='selector'>.key</span>&nbsp;{ <span class='key'>color</span>: <span class='bef_value'>#64D5EA</span>; }</div>");
	c.load("<div class='code writecode'><span class='selector'>.value</span>&nbsp;{ <span class='key'>color</span>: <span class='bef_value'>#BE84F2</span>; }</div>");
	c.addClass(".bef_value","value");
	c.load("<div class='code writecode'><span class='selector'>.value.px</span>&nbsp;{ <span class='key'>color</span>: <span class='value'>#F92772</span>; }</div></p>");
	c.addClass(".value .bef_px","px");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*鐜板湪鎴戜滑宸笉澶氶兘鍑嗗濂戒簡</div>");
	c.load("<div class='comment writecode'>&nbsp;*璁╂垜浠渶鍚庡啀鏉ュ仛涓€浜�3D鏃嬭浆</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#content</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-perspective</span>: <span class='value'>1000<span class='px'>px</span></span>;</div>");
  	c.setClass("#content", [{
		"name": "-webkit-perspective",
		"val": "1000px"
	}]);
  	c.load("<div class='code writecode'>}</div></p>");
  	c.load("<p><div class='code writecode'><span class='selector'>#style-text</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>translateX(98.5%) rotateY(-10deg)</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform",
		"val": "translateX(98.5%) rotateY(-10deg)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform-origin</span>: <span class='value'>right</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform-origin",
		"val": "right"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='key'>max-height</span>: <span class='value'>94.5%</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "max-height",
		"val": "94.5%"
	}]);
  	c.load("<div class='code writecode'>}</div></p>");
  	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*鐜板湪鎴戜滑宸笉澶氬彲浠ュ紑濮嬪啓鎴戠殑绠€鍘嗕簡</div>");
	c.load("<div class='comment writecode'>&nbsp;*鎴戠浉淇′綘鏉ヨ繖涓嶅彧鏄负浜嗙湅杩欎簺婕備寒鐨勯鑹�</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.addClass("#work-text","pre_work-text");
	c.load("<p><div class='code writecode'><span class='selector'>pre</span><span class='key'>:not(#style-text)</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateY(10deg)</span>;</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform-origin</span>: <span class='value'>left</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	var r = new Coder("work-text");
	r.load("<div id='md'></div>");
	var w = new Coder("md");
	w.load("<h1 class='writecode'>绠€鍘�</h1>");
	w.load("<p><div class='writecode'>闄堣景</div>");
	w.load("<div class='writecode'>杞欢宸ョ▼甯�(涓婃捣鑽熼偖缃戠粶绉戞妧鏈夐檺鍏徃)</div>");
	w.load("<div class='writecode'>鍓嶇/NodeJS 寮€鍙戝伐绋嬪笀</div></p>");
	w.load("<h1 class='writecode'>鑱旂郴鎴�</h1>");
	w.load("<ul>");
	w.load("<li class='writecode'>mail:114413511@qq.com</li>");
	w.load("<li class='writecode'>blog:<a href='http://blog.youlunshidai.com' target='_blank'>blog.youlunshidai.com</a></li>");
	w.load("<li class='writecode'>github:<a href='https://github.com/ccfromstar' target='_blank'>https://github.com/ccfromstar</a></li>");
	w.load("</ul>");
	w.load("<h1 class='writecode'>鎶€鑳�</h1>");
	w.load("<ul>");
	w.load("<li class='writecode'>绮鹃€歀otus/Domino寮€鍙戞妧鏈紝鏈夎繃7骞存枃妗ｅ瀷鏁版嵁搴撳紑鍙戠鐞嗙粡楠�</li>");
	w.load("<li class='writecode'>鐔熺粌Nodejs鎶€鏈�,鐔熺粌杩愮敤express,sails,meteor妗嗘灦</li>");
	w.load("<li class='writecode'>鐔熺粌鍚勭Web鍓嶇寮€鍙戞妧鏈疕5,CSS3,jQuery,React,Angular</li>");
	w.load("<li class='writecode'>鐔熺粌涓庡悇骞冲彴鍜岀‖浠剁殑鎶€鏈鎺ワ紙濡�: 寰俊鎺ュ彛锛屼笁鏂规敮浠橈紝绯荤粺鏁村悎锛�</li>");
	w.load("<li class='writecode'>鐔熺粌Mysql,redis,mongodb鍜屾枃妗ｅ瀷鏁版嵁搴�(domino)</li>");
	w.load("<li class='writecode'>鐔熺粌windows server,linux鏈嶅姟鍣ㄩ儴缃插拰绠＄悊锛屽強甯歌闂鐨勫鐞�</li>");
	w.load("<li class='writecode'>鐔熺粌svn,git绛夊父鐢ㄧ増鏈鐞嗗伐鍏�</li>");
	w.load("<li class='writecode'>鏈夎繃BPM鍔炲叕鑷姩鍖栨祦绋嬪紩鎿庣殑寮€鍙戠粡楠�</li>");
	w.load("</ul>");
	w.load("<h1 class='writecode'>椤圭洰</h1>");
	w.load("<ul>");
	w.load("<li class='writecode'><a href='http://www.huiyoulun.com' target='_blank'>www.huiyoulun.com</a></li>");
	w.load("<li class='writecode'><a href='http://www.youlunshidai.com' target='_blank'>www.youlunshidai.com</a></li>");
	w.load("<li class='writecode'><a href='http://wap.huiyoulun.com' target='_blank'>wap.huiyoulun.com</a></li>");
	w.load("<li class='writecode'><a href='http://www.4000191177.com' target='_blank'>www.4000191177.com</a></li>");
	w.load("<li class='writecode'><a href='http://jianianhua.youlunshidai.com/' target='_blank'>jianianhua.youlunshidai.com</a></li>");
	w.load("</ul>");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*宸﹂潰鐨勭畝鍘嗙湅璧锋潵涓嶆槸澶护浜烘弧鎰忥紝璁╂垜浠厛缁欎粬鏉ョ偣鍔ㄦ€佹覆鏌�</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#work-text</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateX(0deg) rotateY(190deg) rotateZ(180deg)</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#work-text #md</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateY(190deg) rotateZ(180deg)</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*濂戒簡锛岃鎴戜滑鍑嗗</div>");
	c.load("<div class='comment writecode'>&nbsp;*</div>");
	c.load("<div class='comment writecode'>&nbsp;*3....</div>");
	c.load("<div class='comment writecode'>&nbsp;*2....</div>");
	c.load("<div class='comment writecode'>&nbsp;*1....</div>");
	c.load("<div class='comment writecode'>&nbsp;*</div>");
	c.load("<div class='comment writecode'>&nbsp;*.</div>");
	c.load("<div class='comment writecode'>&nbsp;*</div>");
	c.load("<div class='comment writecode'>&nbsp;*宸笉澶氫簡锛岃鎴戜滑鐨勭畝鍘嗗姩璧锋潵锛�</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.setClass("#work-text", [{
		"name": "-webkit-transform",
		"val": "rotateX(0deg) rotateY(190deg) rotateZ(180deg)"
	}]);
	c.setClass("#work-text #md", [{
		"name": "-webkit-transform",
		"val": "rotateY(190deg) rotateZ(180deg)"
	}]);
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*瀵逛簬鏂囨湰锛屾垜浠彲浠ュ啀鍋氫竴鐐瑰井璋�</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>font-family</span>: <span class='value'>'Helvetica Neue', Helvetica, sans-serif</span>;</div>");
	c.setClass("#md", [{
		"name": "font-family",
		"val": "'Helvetica Neue', Helvetica, sans-serif"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md h1</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>border-bottom</span>: <span class='value'>1px solid #ccc</span>;</div>");
	c.setClass("#md h1", [{
		"name": "border-bottom",
		"val": "1px solid #ccc"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='key'>padding-bottom</span>: <span class='value'>5px</span>;</div>");
	c.setClass("#md h1", [{
		"name": "padding-bottom",
		"val": "5px"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md li</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>margin</span>: <span class='value'>5<span class='px'>px</span> 0</span>;</div>");
	c.setClass("#md li", [{
		"name": "margin",
		"val": "5px 0"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md h1,#md ul</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>margin</span>: <span class='value'>0</span>;</div>");
	c.setClass("#md h1,#md ul", [{
		"name": "margin",
		"val": "0"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*杩欐牱鍩烘湰涓婂氨宸笉澶氫簡</div>");
	c.load("<div class='comment writecode'>&nbsp;*");
	c.load("<div class='comment writecode'>&nbsp;*濡傛灉浣犳兂鍜屾垜鑱旂郴</div>");
	c.load("<div class='comment writecode'>&nbsp;*QQ/寰俊:114413511</div>");
	c.load("<div class='comment writecode'>&nbsp;*mobile:13611847679</div>");
	c.load("<div class='comment writecode'>&nbsp;*鏈€鍚庨潪甯告劅璋㈡偍鎰挎剰鑺�3鍒嗛挓鐪嬪畬鎴戠殑绠€鍘嗭紒</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");

});

var m = 0;

var Coder = function(dom) {
	this._dom = dom;
};

Coder.prototype = {
	constructor: Coder,
	load: function(code, second) {
		var dom = this._dom;
		var o = this;
		var _second = second ? second : 1000;
		_second = m + _second;
		setTimeout(function() {
			$('#' + dom).scrollTop( $('#' + dom)[0].scrollHeight );
			$("#" + dom).append(code);
		}, _second);
		m = _second;
	},
	setClass: function(dom, styles,second) {
		var _second = second ? second : 0;
		_second = m + _second;
		for (var i in styles) {
			setTimeout(function() {
				$(dom).css(styles[i].name, styles[i].val);
			}, _second);
		}
		m = _second;
	},
	addClass:function(dom,className){
		var second = m;
		setTimeout(function() {
			$(dom).addClass(className);
		}, second);
	}
}
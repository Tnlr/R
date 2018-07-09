
// 定义头部与导航栏

Vue.component('subpage', {
	props : ['lists'],
	template :
		'<div>' +
			'<div class="header-nav">' + // 固定部分：头部与导航
				'<div class="top"><span>R</span></div>' +
				'<div class="nav">' +
					'<div><ul>' +
						'<li v-for="list in lists">' +
							'<a href="" v-bind:href="list.href">' +
								'{{ list.content }}' +
							'</a>' +
						'</li>' +
					'</ul></div>' +
				'</div>' +
			'</div>' +
			'<div class="all">' + // 内容部分
				'<div class="content">' +
					'<slot></slot>' +
				'</div>' +
			'</div>' +
		'</div>'
});
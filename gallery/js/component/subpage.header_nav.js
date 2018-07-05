
// 定义头部与导航栏

Vue.component('header-nav', {
	props : ['lists'],
	template : `
		<div>
			<div class="top"><span>R</span></div>
			<div class="nav">
				<div><ul>
					<li v-for="list in lists">
						<a href="" v-bind:href="list.href">
							{{ list.content }}
						</a>
					</li>
				</ul></div>
			</div>
		</div>
	`
});
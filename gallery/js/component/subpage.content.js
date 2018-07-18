

Vue.component('sub-unorder', {
	props : ['unorders'],
	template : 
		'<div>' +
			'<ul>' +
				'<li v-for="unorder in unorders">{{ unorder }}</li>' +
			'</ul>' +
		'</div>'
});

Vue.component('sub-order', {
	props : ['orders'],
	template : 
		'<div>' +
			'<ol>' +
				'<li v-for="order in orders">{{ order }}</li>' +
			'</ol>' +
		'</div>'
});

Vue.component('sub-table', {
	props : ['tables'],
	template : 
		'<table>' +
			'<tr>' +
				'<th v-for="th in tables[\'th\']">{{ th }}</th>' +
			'</tr>' +
			'<tr v-for="tr in tables[\'tr\']">' +
				'<td>{{ tr[0] }}</td>' +
				'<td>{{ tr[1] }}</td>' +
			'</tr>' +
		'</table>' 
});

Vue.component('sub-code', {
	props : ['codes', 'codeslists'],
	Mounted : function () {
		codeslists = this.codes.split('\n');
	},
	template : 
		'<div>' +
			'<code v-for="code in codeslists">{{ code }}</code>' +
		'</div>'
});
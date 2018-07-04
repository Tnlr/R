

// nav start

Vue.component('nav-vertical', {
	props : ['lists'],
	template : 
		'<div>' +
			'<ul>' +
			    '<li v-for="list in lists">' +
			    '<a v-bind:href=list.href>{{ list.content }}</a>'+
			    '</li>' +
			'</ul>' +
		'</div>',
});

// nav end
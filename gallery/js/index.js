
import _ from 'lodash';
import test from './print.js';
require('../scss/test.scss');


function component() {
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');
	test();
	return element;
}

document.body.appendChild(component());

// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('Accepting the updated printMe module!');
//     test();
//   });
// }
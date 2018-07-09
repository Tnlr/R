



// set nav height start

function fsetNavHeight () {
	var e = document.getElementsByClassName('nav')[0];
	e.style.height = document.documentElement.clientHeight - 65 + 'px';
}

// set nav heigth end


// require js function start

function frequireJs (address) {
	var new_element=document.createElement("script");
	new_element.setAttribute("type","text/javascript");
	new_element.setAttribute("src", address);
	document.body.appendChild(new_element);
	console.log(new_element);
}

// require js function end
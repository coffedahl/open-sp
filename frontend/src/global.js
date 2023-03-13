
export function getURL() {
	let url = import.meta.env.MODE === 'development' ?
		'http://localhost:8080' : 'https://api.coffedahl.com';
	return url
}

export function callFocus(e) {
	e.focus();
}

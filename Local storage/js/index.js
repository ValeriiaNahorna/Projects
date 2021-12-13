function visitLink(path) {
	path.toString;
	if (path === 'Page1') {
		if (localStorage.path1) {
			localStorage.path1 = Number(localStorage.path1) + 1;
		} else {
			localStorage.path1 = 1;
		}
	} else if (path === 'Page2') {
		if (localStorage.path2) {
			localStorage.path2 = Number(localStorage.path2) + 1;
		} else {
			localStorage.path2 = 1;
		}
	} else if (path === 'Page3') {
		if (localStorage.path3) {
			localStorage.path3 = Number(localStorage.path3) + 1;
		} else {
			localStorage.path3 = 1;
		}
	}
}

function viewResults() {
	let cathes1 = localStorage.getItem('path1');
	let cathes2 = localStorage.getItem('path2');
	let cathes3 = localStorage.getItem('path3');
	document.body.insertAdjacentHTML('beforeend',
		`<ul>
		<li>You visited page1 ${cathes1} time(s)</li>
		<li>You visited page2 ${cathes2} time(s)</li>
		<li>You visited page3 ${cathes3} time(s)</li>
		</ul>`);
}

function clock() {
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();

	//to add a zero in front of numbers < 10
	function checkTime(i) {
		if (i < 10) {
			i = "0" + i
		}

		return i
	}

	m = checkTime(m);
	s = checkTime(s);

	document.getElementById('clock').innerHTML = h + ':' + m + ':' + s;
	var c = setTimeout(clock, 500);
}
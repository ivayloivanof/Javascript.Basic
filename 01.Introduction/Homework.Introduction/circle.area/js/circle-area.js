function calcCircleArea() {
	var p = 3.1415926535897932384626433832795028841971693993751058209749445;
	var radius = document.area.radius.value;
	var result = p * (radius * radius);
	document.getElementById("circle-area").innerHTML = "r = " + radius + "; area = " + result.toPrecision(17);
}
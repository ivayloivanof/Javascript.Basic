function quadratic(a, b, c) {
	var a = a, b = b, c = c;

	var d = ((b * b) - (4*a*c));
	var x1 = (-b - Math.sqrt(d)) / (2*a);
	var x2 = (-b + Math.sqrt(d)) / (2*a);

	if (d < 0) {
		console.log("No real roots");
	} else if (d == 0) {
		console.log("X = "  + x1);
	} else {
		console.log("X1 = " + x1 + " X2 = " + x2);
	}
}

quadratic(2, 5, -3);
quadratic(2, -4, 2);
quadratic(4, 2, 1);
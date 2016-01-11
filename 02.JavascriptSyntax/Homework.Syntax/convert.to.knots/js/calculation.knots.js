function calculation_knots(kilometers) {
	var knots = (kilometers / 1.852).toFixed(2);
	console.log(knots);
}

calculation_knots(20);
calculation_knots(112);
calculation_knots(400);
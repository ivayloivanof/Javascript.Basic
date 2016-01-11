function calcCylinderVol(arr) {
	//V = PI * r2 * h
	var vol = (Math.PI * Math.pow(arr[0], 2) * arr[1]).toFixed(3);
	console.log(vol);
}

calcCylinderVol([2, 4]);
calcCylinderVol([5, 8]);
calcCylinderVol([12, 3]);
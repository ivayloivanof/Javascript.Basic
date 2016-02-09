function solve(arr) {
	var route = [];
	route[0] = 0;
	route[1] = 110;	//(100km normal road and 10km snowy road)
	route[2] = 95;	//(65km normal road and 30km snowy road)

	var baseConsumption = [];
	baseConsumption["petrol"] = 1;
	baseConsumption["gas"] = 1.2;
	baseConsumption["diesel"] = 0.8;

	for (var a in arr) {
		var v = arr[a].split(' ');
		console.log(v[0] + ' ' + v[1] + ' ' + v[2] + ' ' + Math.round(((v[2] == 1 ? 10 : 30) * ((0.3 * ((10*baseConsumption[v[1]]) + (v[3] * 0.01))) / 100)) + (route[v[2]] * (((10*baseConsumption[v[1]]) + (v[3] * 0.01)) / 100))));
	}
}

var arr = [
	'BMW petrol 1 320.5',
	'Golf petrol 2 150.75',
	'Lada gas 1 202',
	'Mercedes diesel 2 312.54'];

solve(arr);

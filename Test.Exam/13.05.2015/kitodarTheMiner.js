function solve(arr) {

	var regex = /mine+\s*[\w]*\s*\-\s*([\w]+)\s*:\s*([0-9]{0,3})/gm;
	var result = [];
	for (var i in arr) {
		var a = arr[i].match(regex);
		if (a) {
			var c = a[0].split('-');
			result.push(c[1].trim());
		}
	}

	var ore = [];

	ore.push({name: '*Gold', val: 0});
	ore.push({name: '*Silver', val: 0});
	ore.push({name: '*Diamonds', val: 0});

	result.forEach(function(e) {
		var or = e.split(':');
		if (or[0] == 'gold') {
			ore[0].val += Number(or[1]);
		}
		if (or[0] == 'silver') {
			ore[1].val += Number(or[1]);
		}
		if (or[0] == 'diamonds ') {
			ore[2].val += Number(or[1]);
		}
	});

	var sortedOre = ore.sort(function(a, b) {
		return b.val - a.val;
	});

	for (var o in sortedOre) {
		console.log(sortedOre[o].name + ": " + sortedOre[o].val);
	}

}

var arr = [
	'mine bobovDol - gold: 10"',
	'mine medenRudnik - silver: 22"',
	'mine chernoMore - shrimps : 24"',
	'gold: 50'
		];

var arr2 = [
			"mine bobovdol - gold: 10",
			"mine tomb - diamonds: 5",
			"mine colas - wood: 10",
			"mine myMine - silver:  14",
			"mine silver:14 - silver: 14"
			];


solve(arr);
var numbers = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];
var result = [];

function scoreModification() {
	var a = 0;
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] < 0 || numbers[i] > 400) {
			continue;
		}
		result[a] = parseFloat((numbers[i]*0.8).toFixed(1));
		a++;
	}

	result.sort(function(a, b){return a-b});

	return result;
}

console.log(scoreModification());
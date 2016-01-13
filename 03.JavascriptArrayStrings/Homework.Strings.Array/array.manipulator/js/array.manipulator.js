var numbers = new Array;

function extractNumber(arr) {
	var a = 0;
	for (var i = 0; i < arr.length; i++) {
		if (!isNaN(arr[i])) {
			numbers[a] = arr[i];
			a++;
		}
	}
}

function minNumber() {
	console.log('Min number: ' + Math.min.apply(null, numbers));
}

function maxNumber() {
	console.log('Max number: ' + Math.max.apply(null, numbers));
}

function mostFrequentNumber() {
	var mode = {};
	var max = 0, count = 0;

	numbers.forEach(function(e) {
		if (mode[e]) {
			mode[e]++;
		}
		else {
			mode[e] = 1;
		}

		if (count<mode[e]) {
			max = e;
			count = mode[e];
		}
	});

	console.log('Most frequent number: ' + max);
}

function sortDescending() {
	console.log(numbers.sort(function(a, b){return b-a}));
}

extractNumber(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]);
minNumber();
maxNumber();
mostFrequentNumber();
sortDescending();
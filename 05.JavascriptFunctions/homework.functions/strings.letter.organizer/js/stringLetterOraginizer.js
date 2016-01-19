function sortLetters(string, boolean) {
	var stringArray = [];
	for (var i = 0; i < string.length; i++) {
		stringArray.push(string[i].toLowerCase());
	}

	var sortedString;
	if (boolean) {
		sortedString = stringArray.sort();
	} else {
		sortedString = stringArray.sort(function(a, b) {
			if(a > b) return -1;
			if(a < b) return 1;
			return 0;
		});
	}

	console.log(sortedString);
}

sortLetters('HelloWorld', true);
//'deHllloorW'

sortLetters('HelloWorld', false);
//'WroolllHed'
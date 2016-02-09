function solve(input) {
	var courseName = input[input.length - 1].trim();	//Course name from last row
	var result = '';
	var average = [];
	average[0] = 0;
	average[1] = 0;

	for(var i = 0; i < input.length - 1; i++) {
		input[i] = input[i].trim(); //Мамкави мръсна
		var line = input[i].split(/\s+/g);
		var student = line[0].trim();
		var course = line[1];
		var examPoints = Number(line[2]);
		var courseBonusPoints = Number(line[3]);
		var coursePoints = +(parseFloat((examPoints/5)+courseBonusPoints).toFixed(2));
		var grade = parseFloat(((coursePoints/80)*4) + 2).toFixed(2);
		if (grade > 6) {
			grade = parseFloat(6).toFixed(2);
		}

		if (course === courseName) {
			average[0] += examPoints;
			average[1] +=1;
		}

		if (examPoints < 100 || examPoints > 400) {
			result += student + ' failed at "' + course + '"' + '\n';
		} else {
			result += student + ': Exam - "' + course + '"; Points - ' + coursePoints + '; Grade - ' + grade + '\n';
		}
	}

	result += '"' + courseName + '"' + ' average points -> ' + +(parseFloat(average[0]/average[1]).toFixed(2))

	console.log(result);
}

var inp = [
	"Pesho C#-Advanced 100 3",
	"Gosho Java-Basics 157 3",
	"Tosho HTML&CSS 317 12",
	"Minka C#-Advanced 57 15",
	"Minka C#-Advanced 401 15",
	"Stanka C#-Advanced 157 15",
	"Kircho C#-Advanced 300 0",
	"Niki C#-Advanced 400 10",
	"C#-Advanced"
];

solve(inp);
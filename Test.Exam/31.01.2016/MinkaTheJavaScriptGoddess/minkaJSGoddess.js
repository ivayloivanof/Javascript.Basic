function solve(input) {
	var result = {};
	for (var index = 0; index < input.length; index++) {
		var line = input[index].trim().split('&');
		var name = line[0].trim();
		var type = line[1].trim();
		var taskNumber = "Task " + line[2].trim();
		var score = Number(line[3].trim());
		var lineOfCode = Number(line[4].trim());

		result[taskNumber] = {
			"tasks" : [],
			"average" : 0,
			"lines" : 0
		};
		var obj = {
			"name" : name,
			"type" : type
		};

		console.log(line);
	}
	console.log(result);
}

//Name & Type & Task Number & Score & Lines of code
var inp = [
	"Array Matcher & strings & 4 & 100 & 38",
	"Magic Wand & draw & 3 & 100 & 15",
	"Dream Item & loops & 2 & 88 & 80",
	"Knight Path & bits & 5 & 100 & 65",
	"Basket Battle & conditionals & 2 & 100 & 120",
	"Torrent Pirate & calculations & 1 & 100 & 20",
	"Encrypted Matrix & nested loops & 4 & 90 & 52",
	"Game of bits & bits & 5 &  100 & 18",
	"Fit box in box & conditionals & 1 & 100 & 95",
	"Disk & draw & 3 & 90 & 15",
	"Poker Straight & nested loops & 4 & 40 & 57",
	"Friend Bits & bits & 5 & 100 & 81"
];

solve(inp);

/*
 {
 "Task 1": {
	 "tasks": [{
		 "name": "Fit box in box",
		 "type": "conditionals"
		}, {
		 "name": "Torrent Pirate",
		 "type": "calculations"
	 }],
 	"average": 100,
 	"lines": 115
 },
 "Task 5": {
	 "tasks": [{
		 "name": "Friend Bits",
		 "type": "bits"
	 }, {
		 "name": "Game of bits",
		 "type": "bits"
	 }, {
		 "name": "Knight Path",
		 "type": "bits"
	 }],
	 "average": 100,
	 "lines": 164
 },
 "Task 3": {
	 "tasks": [{
		 "name": "Disk",
		 "type": "draw"
	 }, {
		 "name": "Magic Wand",
		 "type": "draw"
	 }],
	 "average": 95,
	 "lines": 30
 },
 "Task 2": {
	 "tasks": [{
		 "name": "Basket Battle",
		 "type": "conditionals"
	 }, {
		 "name": "Dream Item",
		 "type": "loops"
	 }],
	 "average": 94,
	 "lines": 200
 },
 "Task 4": {
	 "tasks": [{
		 "name": "Array Matcher",
		 "type": "strings"
	 }, {
		 "name": "Encrypted Matrix",
		 "type": "nested loops"
	 }, {
		 "name": "Poker Straight",
		 "type": "nested loops"
	 }],
	 "average": 76.67,
	 "lines": 147
 }
 }
 */
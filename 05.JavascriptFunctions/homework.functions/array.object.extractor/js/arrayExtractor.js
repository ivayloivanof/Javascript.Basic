function extractObjects(array) {
	array.forEach(function(el) {
		if (typeof el === "object" && !Array.isArray(el)) {
			console.log(el);
		}
	})
}

var input = ["Pesho", 4, 4.21,
	{ name : 'Valyo', age : 16 },
	{ type : 'fish', model : 'zlatna ribka' },
	[1,2,3], "Gosho",
	{ name : 'Penka', height: 1.65}
];

extractObjects(input);


/* result
 [
 { name: 'Valyo', age: 16 },
 { type: 'fish', model: 'zlatna ribka' },
 { name: 'Penka', height: 1.65 }
 ]
 */
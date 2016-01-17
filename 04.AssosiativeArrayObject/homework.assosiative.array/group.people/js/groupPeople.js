function Person(firstName, lastName, age){
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.toString = function(){
		return this.firstName + ' ' + this.lastName + ' ' + '('+ 'age' + ' ' + this.age+')';
	}
}

function groupBy(criteria){
	var selected = [];

	for (var i = 0; i < people.length; i++) {
		if (selected.indexOf(people[i][criteria]) === -1) {
			selected.push(people[i][criteria])
		}
	}

	for (var i = 0; i < selected.length; i++) {
		var result = 'Group ' + selected[i];
		var outputLine = [];

		for (var index in people){
			if (people[index][criteria] === selected[i]) {
				outputLine.push(people[index].toString());
			}
		}

		console.log(result + ' : [' + outputLine.join(', ') + ']');

	}
}

var people = [
	new Person("Scott", "Guthrie", 38),
	new Person("Scott", "Johns", 36),
	new Person("Scott", "Hanselman", 39),
	new Person("Jesse", "Liberty", 57),
	new Person("Jon", "Skeet", 38)
];

console.log("groupByFirstName");
groupBy('firstName');
/*
 Group Scott : [Scott Guthrie(age 38), Scott Johns(age 36), Scott Hanselman(age 39)]
 Group Jesse : [Jesse Liberty(age 57)]
 Group Jon : [Jon Skeet(age 38)]
 // key : value
*/

console.log("groupByLastName");
groupBy('lastName');
/*
 Group Guthrie : [Scott Guthrie(age 38)]
 Group Johns : [Scott Johns(age 40),Jesse Johns(age 57)]
 Group Hanselman : [Scott Hanselman(age 36)]
 Group Skeet : [Jon Skeet(age 36)]
*/

console.log("groupByAge");
groupBy('age');
/*
 Group 36 : [Scott Hanselman(age 36), Jon Skeet(age 36)]
 Group 38 : [Scott Guthrie(age 38)]
 Group 40 : [Scott Johns(age 40)]
 Group 57 : [Jesse Liberty(age 57)]
*/
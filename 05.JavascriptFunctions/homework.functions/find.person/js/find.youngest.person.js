function findYoungestPerson(array) {
	var sortByAge = array.sort(function(a, b) {
		if(a.age < b.age) return -1;
		if(a.age < b.age) return 1;
		return 0;
	})

	var person = '';
	sortByAge.forEach(function(p) {
		if (person === '') {
			if (p.hasSmartphone) {
				person = p.firstname + ' ' + p.lastname;
			}
		}
	})

	console.log('The youngest person is ' + person)
}

var people = [
	{ firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
	{ firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
	{ firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
	{ firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }
];


findYoungestPerson(people)
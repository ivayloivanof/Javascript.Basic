function replaceATag(str) {

	var regex = /(<a[^>]*>)([\s\S]*?)(<\/a>)/;

	var matches = str.match(regex);
	matches[1] = matches[1].replace('<a', '[URL');
	matches[1] = matches[1].replace('>', ']');
	matches[3] = matches[3].replace('</a>', '[/URL]');

	console.log('<ul><li>' + matches[1] + matches[2] + matches[3] + '</li></ul>');
}

replaceATag('<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>');


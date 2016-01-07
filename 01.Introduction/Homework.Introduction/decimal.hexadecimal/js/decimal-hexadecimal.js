function calculationHexadecimal() {
	var hex = 'FF';
	var decimal = document.decimal.number.value;
	hex = Number(decimal).toString(16).toUpperCase();
	alert(hex);
}

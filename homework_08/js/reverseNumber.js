function reverseNumberfunc(number) {
	var str_number = String(number);
	var reverse_number = str_number.split('').reverse().join('');
	reverse_number = parseInt(reverse_number) * Math.sign(number);
	return reverse_number;
}

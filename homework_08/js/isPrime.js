function isPrime(number) {
	var flags = 0;
	if (number == 1) {
		return false;
	}
	for (var i = 2; i <= number / 2; i++) {
		if (number % i == 0) {
			flags++;
		}
	}
	if (flags == 0) {
		return true;
	} else {
		return false;
	}
}

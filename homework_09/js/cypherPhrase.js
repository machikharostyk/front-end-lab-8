function cypherPhrase(obj, str) {
	str = str.split('');
	getTransformedArray(function (el) {
		getFilteredArray(function (prop) {
			if (el == prop) {
				el = obj[prop];
			}
		}, object.keys(obj));
	}, str).join('');
}

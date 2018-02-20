function decypherPhrase(str, obj) {
	var decypherObj = {};
	for (property in obj) {
		decypherObj[obj[property]] = property;
	}
	return cypherPhrase(decypherObj, str);
}

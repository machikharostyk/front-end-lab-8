function collectIds(movies) {
	var filterMovies = getFilteredArray(movies, function (el) {
		return el.rating > 3;
	});
	var getMovies = getTransformedArray(filterMovies, function (el) {
		return el.id;
	})
	console.log(getMovies);
}

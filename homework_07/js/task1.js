var N_number = prompt('Please enter a number from 0 to 20 and only natural');
var symbol = '[~]';
var symbol_counter = 1;
var space = ' ';
var space_count = +N_number;
var pyramid = '';

if (N_number <= 0 || N_number > 20 || parseInt(N_number) != N_number) {
	console.log('Incorrect number');

} else {
	for (i = 0; i < N_number; i++) {
		for (var j = 0; j < space_count; j++) {
			pyramid = pyramid.concat('   ');
		}
		space_count = space_count - 1;
		for (k = 0; k < symbol_counter; k++) {

			pyramid = pyramid.concat(symbol);
		}
		pyramid = pyramid.concat('\n');
		symbol_counter = symbol_counter + 2;
	}
	console.log(pyramid);
}

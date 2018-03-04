var game_start = confirm('Do you want to play a game?');
var game_end;
var mult_range = 5;
var mult_prize = 3;
var total_prize = 0;
var possible_prize = 10;





if (game_start == true) {
	var number = Math.floor(Math.random() * (mult_range + 1));
	var attempts = 3;
	while (attempts !== 0 && game_end !== true) {
		var game = prompt('Enter a number from 0 to ' + mult_range + '\nAttempts left: ' + attempts + '\nTotal prize: ' + total_prize + '$' + '\nPossible prize on current attempt: ' + possible_prize + '$');
		if (game == number) {
			
			total_prize += possible_prize;
			var continue_game = confirm('Congratulations! Do you want to continue a game?');

			if (continue_game == true) {
				
				mult_range = mult_range * 2;
				var number = Math.floor(Math.random() * (mult_range + 1));
				possible_prize = possible_prize * mult_prize;
				attempts = 3;
				
			} else {
				console.log('Thank you for a game your prize is: ' + total_prize + '$');
				game_end = true;
				break;
			}
		} else {
			attempts--;
			possible_prize = Math.floor(possible_prize / 2);
		}

		if (attempts == 0) {
			var play_again = confirm('Sorry but you lose( Do you want to play again?');
			if (play_again == true) {
				mult_range=5;
				var number = Math.floor(Math.random() * (mult_range + 1));
				possible_prize = 10;
				attempts = 3;
				
			} else {
				total_prize = 0;
				console.log('Thank you for a game your prize is: ' + total_prize + '$');
				game_end = true;
				break;

			}
		}
	}
} else {
	console.log('You did not become a milionaire');
}

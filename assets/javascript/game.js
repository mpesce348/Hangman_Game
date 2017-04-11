var anwsers=["gamma bomb", "bruce banner", "betty ross", "thunderbolt ross",
"abomination", "the leader", "green goliath", "jade giant", "joe fixit",
"rick jones", "lou ferrigno", "the incredible hulk"];

var random = Math.floor((Math.random()*(anwsers.length-1)))



document.onkeyup = function(event) {
	var userGuess = event.ky;
	console.log(userGuess);
} 
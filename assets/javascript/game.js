var anwserWords=["incredible", "gamma bomb", "bruce banner", "abomination",
"the leader", "marvel", "anger problems", "green goliath", "rage",
 "thunderbolt ross"];
var selectedWord="";
var lettersInWord=[];
var numBlanks=0;
var blanksAndWins=[];
var wrongLetters=[];
var lossCount=0;
var guessesLeft=9;
var winCount=0;
var inPlay=false;

function startGame(){
	inPlay=true;
	console.log("Starting Game");
	selectedWord = anwserWords[Math.floor(Math.random()*anwserWords.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;

	guessesLeft=9;
	wrongLetters=[];
	blanksAndWins=[];

	for (var i=0; i<numBlanks; i++) {
		blanksAndWins.push("_");
	}
	
}

document.onkeyup = function(event) {
	var userGuess = event.ky;
	console.log(userGuess);
} 
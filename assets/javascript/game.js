var anwserWords=["incredible", "gamma bomb", "bruce banner", "abomination",
"the leader", "marvel", "anger problems", "green goliath", "rage",
 "thunderbolt ross"];
var selectedWord="";
var lettersInWord=[];
var numBlanks=0;
var blanksAndWins=[];
var wrongLetters=[];
var lossCount=0;
var guessesLeft=10;
var winCount=0;
var inPlay=false;

document.onkeyup = function(event) {
	var userGuess = event.key;
	console.log(userGuess);
	inPlay=true;
	selectedWord=anwserWords[Math.floor(Math.random()*anwserWords.length)];
	lettersInWord=selectedWord.split("");
	numBlanks=lettersInWord.length;
	guessesLeft=10;
	wrongLetters=[];
	blanksAndWins=[];

	for (var i=0; i<numBlanks; i++){
		document.getElementById("currentWord").innerHTML=
		blanksAndWins.push("_");
	}

	
	document.getElementById("currentWord").innerHTML=lettersInWord;
	document.getElementById("guessesLeft").innerHTML=guessesLeft;
	document.getElementById("winTotal").innerHTML=winCount;
	document.getElementById("lossTotal").innerHTML=lossCount;
	document.getElementById("guessesLeft").innerHTML=guessesLeft;

	console.log(selectedWord);
	console.log(lettersInWord);
	console.log(numBlanks);

} 

function checksLetter(letter) {
	var isLetterInWord=false;
	for(var i=0; i<numBlanks; i++){
		if(selectedWord[i]===letter) {
			isLetterInWord = true;
		}
	}
	if(isLetterInWord){
		for(var i=0;i<numBlanks; i++){
			if(selectedWord[i]===letter){
				blanksAndWins[i]=letter;
			}
		}
	}
	else{
		wrongLetters.push(letter);
		guessesLeft--
	}
}









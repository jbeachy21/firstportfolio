var wins = 0;
var losses = 0;
var GuessesRemaining = 9;
var GuessesSoFar = 0;

function pickLetter() {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var randomNum = Math.ceil(26 * (Math.random()));
    var letter = alphabet[randomNum];
    return letter;

}



document.onkeyup = function (event) {
    var letter = pickLetter();
    GuessesSoFar++;
    var userGuess = event.key;
    GuessesRemaining--;
    document.getElementById("guessesLeft").innerHTML = " " + GuessesRemaining;
    
    
   
    
    document.getElementById("guesses").innerHTML = " " + GuessesSoFar;
    console.log("The random letter is " + letter);
    console.log("The key typed/userGuess is: " + userGuess);
    if (userGuess == letter) {
        console.log("Equality acheived");
        wins++;
        document.getElementById("wins").innerHTML = " " + wins;
        GuessesRemaining = 9;
        document.getElementById("guessesLeft").innerHTML = " " + GuessesRemaining;
        letter = pickLetter();

    }
    if (GuessesRemaining == 0 ) {
        losses++;
        GuessesRemaining = 9;
        document.getElementById("losses").innerHTML = " " + losses;
        document.getElementById("guessesLeft").innerHTML = " " + GuessesRemaining;
        letter = pickLetter();
    }

}


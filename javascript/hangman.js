// pick a random work
var words = [
    "horse",
    "turkey",
    "eagle",
    "alligator",
    "turkey",
    "ostrich"
]
var word = words[Math.floor(Math.random() * words.length)] //"floor" rounds down, "ceiling" rounds up
console.log(word);
var answerArray = [];
for (var i=0; i<word.length; i++) {
    answerArray[i] = "_"
}
// guesses left to 10
var remainingGueses = 10;
//set remaining letters to word length
var remainingLetters =  word.length;

// grab the contrainer to put the current guess state
var userGuess = document.getElementById("currentState");

function gameLoop() {
    // while word has not been guessed and still have guesses
    // prompt guess
    var guess = document.getElementById("userGuess").value;

    if (guess.length != 1) {
        // tell player to pick a single letter
        alert("Please enter a single letter");
    } else {
        var correctGuess = false;
        // if the guess is in the word,
        // update progress
        for (var i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                answerArray[i] = guess;
                correctGuess = true;
                remainingLetters--;
            }
        }
        if (correctGuess === false) {
            remainingGueses--;
        }
    }
    // show progress
    userGuess.textContent = answerArray.join(" ");
    // clear field
    document.getElementById("userGuess").value = "";
    // if the player has used all guesses
    if (remainingLetters === 0) {
        alert("Good job!!! The word was "+word);
    } else if (remainingGueses === 0) {
        alert("Sorry, you lost. Better luck next time!");
    }
}


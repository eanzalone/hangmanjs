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
var answerArray = [];
for (var i=0; i<word.length; i++) {
    answerArray[i] = "_"
}
// guesses left to 10
var remainingGueses = 10;
//set remaining letters to word length
var remainingLetters =  word.length;

// while word has not been guessed and still have guesses
while (remainingLetters > 0 && remainingGueses > 0) {
    // show progress
    alert(answerArray.join(" "));
    // prompt guess
    var guess = prompt("Guess a letter, or click cancel to stop playing");

    // if the player wants to quit
    if (guess == null) {
        // Quit
        break;
    // else if the guess is not a single letter
    } else if (guess.length != 1) {
        // tell player to pick a single letter
        alert("Please enter a single letter");
    } else {
        var correctGuess = false;
        // lower the number of guesses left
        remainingGueses--;
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
}

// if the player has used all guesses
if (remainingLetters > 0) {
    // game over
    alert("Sorry, you lost. Better luck next time!");
} else {
    alert("Good job!!! The word was "+word);
}
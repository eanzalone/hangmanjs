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
console.log(answerArray);
// guesses left to 10

// while word has not been guessed and still have guesses
    // show progress
    // prompt guess

    // if the player wants to quit
        // Quit
    
    // else if the guess is not a single WEBGL_depth_texture
    //     tell player to pick a single WEBGL_depth_texture

    // else
    //     if the guess is in the word,
    //     update progress

    // if the player has used all guesses
    //     game over
//Website visual functions

window.onload = rotate;

var theAd = 0;
var zmbImages = new Array("assets/images/zmb1.png", "assets/images/zmb2.png", "assets/images/zmb3.png", "assets/images/zmb4.png", "assets/images/zmb5.png");

function rotate() {
    theAd++;
    if (theAd == zmbImages.length) {
        theAd = 0;
    }
    document.getElementById("zomBies").src = zmbImages[theAd];

    setTimeout(rotate, 3 * 1000);
}

//Website game functions

//array for slain zombies
var slainZombies = [];

//An array for the wordbank the game will reference to
var wordbank = ["brains", "axe", "infected", "georgeramero", "crossbow", "barbra", "red", "winchester"];

//An array to randomly select from the wordbank
var word = wordbank[Math.floor(Math.random() * wordbank.length)];

//This will change all typed characters to lowercase
word = word.toLowerCase();

//A variable that will determine the length of the word
var wordlength = word.length;
var wordletters = word.split();

//A FOR loop that will change the chosen letters into an underscore 
for (i = 0; i < wordlength; i++) {
    wordletters[i] = "_";
}

//This will print the current word chosen 
document.getElementById("word").innerHTML = wordletters.join(' ');

//A variable that will keep track of the incorrect letter selections
var wrongLetter = 10;
document.getElementById("wrongLetter").innerHTML = wrongLetter;

var mismatch = 0;

//This will inform us if the correct letter choice was made 
var correctLetter = false;

//A variable to keep track of the number of zombies slain
var slainZombies = 0;

//A variable to play a sound when the zombie is slain
var zombieSlain = new Audio('../assets/audio/zombieSlain.wav');

//An onkeyup function to determine the start of the game
document.onkeyup = function(event) {

    //A variable to tell the game which key was pressed
    var playerChoice = event.key;
    playerChoice = word.toLowerCase();
    document.getElementById("playerChoice").innerHTML = playerChoice;

    //A FOR loop that will determine if playerChoice matches a letter from the selected word  
    for (i = 0; i < wordlength; i++) {
        if (word.charAt(i) == playerChoice) {
            correctLetter = true;
            wordletters[i] = correctLetter;
        }
    }

    if (correctLetter === false) {
        wrongLetter--;
        document.getElementById("wrongLetter").innerHTML = wrongLetter;
    }

    document.getElementById("word").innerHTML = wordletters.join(' ');

    correctLetter = false;

    //A FOR loop to determine if the player lost the game
    if (wrongLetter === 0) {
        document.getElementById("gamestatus").innerHTML = "You were unable to stop the zombie. They have eaten your brains!";

        //This will start a new game and reset everything
        word = wordbank[Math.floor(Math.random() * wordbank.length)];
        word = word.toLowerCase();
        wordletters.length = word.length;
        wordlength = word.length;
        wordletters = word.split();

        //A FOR loop to reset the letters back to underscores
        for (i = 0; i < wordlength; i++) {
            wordletters[i] = "_";
        }
        document.getElementById("word").innerHTML = wordletters.join(' ');

        wrongLetter = 10;
        document.getElementById("wrongLetter").innerHTML = wrongLetter;

        correctLetter = false;
        mismatch = 0;
    }

    for (i = 0; i < wordlength; i++) {
        if (word.charAt(i) != wordletters[i]) {
            mismatch++;
        }
    }

    //An IF statement to determine if the player won the game
    if (mismatch === 0) {
        document.getElementById("gamestatus").innerHTML = "You have slain the zombie! You may now continue your journey back to base.";
        zombieSlain.play();

        //Will change the number of slain zombies
        slain++;
        document.getElementById("slain").innerHTML = slain;

        //Game reset
        word = wordbank[Math.floor(Math.random() * wordbank.length)];
        word = word.toLowerCase();
        console.log(word);
        wordletters.length = word.length;
        wordlength = word.length;
        wordletters = word.split();

        for (i = 0; i < wordlength; i++) {
            wordletters[i] = "_";
        }
        document.getElementById("word").innerHTML = wordletters.join(' ');
        wrongLetter = 10;
        document.getElementById("wrongLetter").innerHTML = wrongLetter;
        correctLetter = false;
        mismatch = 0;
    } else {
        mismatch = 0;
    }

}
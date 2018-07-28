
let Letter = require("./letter.js");

let disp = new Letter();

let constructed = false;
let winCond = "";

let Word = function (word) {

    // for each letter in the word, create a letter object.
    let letters = [];
    if (!constructed) {
        for(let i = 0; i < word.length; i++) {
            let letter = new Letter(word[i]);

            letters.push({"letter": word[i], "guessed": letter.guessed});
            winCond += word[i];
        }
        constructed = true;
        console.log('WIN ' + winCond);
    }
    console.log(letters);
    this.stringWord = function () {
        let display = "";

        for(let x = 0; x < letters.length; x++) {

            display += disp.isGuessed(letters[x]) + " ";

        }
        console.log(`${display}\n`);
        if(display.indexOf("_") === -1) {
            console.log("You win!");
            return true;
        }

    };

    this.checkGuess = function (char) {

            for(let x = 0; x < letters.length; x++){
                if(letters[x].letter === char){
                    letters[x].guessed = disp.checkLetter(letters[x].letter, char);
                }
            }
    };
};

module.exports = Word;


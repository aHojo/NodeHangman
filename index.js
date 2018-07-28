const Word = require("./word");
const inquirer = require("inquirer");


//Array of words
let options = [
"test",
"level",
"answer",
"funny"
];

let wordToGuess = options[Math.floor(Math.random() * options.length)];

console.log(wordToGuess);

let chosen = new Word(wordToGuess);
console.log(chosen);

let guesses = 0;

function start() {
    if(guesses !== 10){
        if(guesses === 0) {
            chosen.stringWord();
        }
        inquirer.prompt({
            type: "input",
            "name": "guess",
            "message": "Guess a letter > "
        }).then(function (answer) {
            chosen.checkGuess(answer.guess);
            let WIN = chosen.stringWord();
            guesses++

            if(!WIN){
                start();
            }

        });
    } else {
        console.log("You Lose!");
    }
}

start();
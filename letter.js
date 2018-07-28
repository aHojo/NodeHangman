

let Letter = function (letter) {
    this.letter = letter;
    this.guessed = false;

    this.isGuessed = function (letterObj) {
        if(letterObj.guessed) {
            return letterObj.letter;
        }

            return '_';
    };

    this.checkLetter = function (letterChk, guess) {
        if(letterChk === guess) {
            return true;

        }
        return false;
    };
};

module.exports = Letter;
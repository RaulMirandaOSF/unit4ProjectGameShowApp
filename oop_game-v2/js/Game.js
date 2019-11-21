/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.activePhrase = null;

        this.phrases = [
            new Phrase("A small phrase"),
            new Phrase("Do it"),
            new Phrase("Do it well"),
            new Phrase("Become human"),
            new Phrase("Strive for greatness")
        ];
    }

    startGame() {
        $("#overlay").hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        var index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    }
}
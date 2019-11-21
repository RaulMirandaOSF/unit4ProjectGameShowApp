/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.letterSelected = '';
    }

    addPhraseToDisplay() {
        let phraseHtml = this.phrase.split('').map(c => {
            let className = c === " " ? "space" : `hide letter ${c}`; 
            return `<li class="${className}">${c}</li>`
        }).join('');

        $('#phrase ul').html(phraseHtml);
    }

    checkLetter() {
        return this.phrase.includes(this.letterSelected);
    }

    showMatchedLetter() {

    }
}
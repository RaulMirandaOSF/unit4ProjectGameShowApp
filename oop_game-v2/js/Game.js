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
        console.log(this.activePhrase.phrase);
    }

    getRandomPhrase() {
        var index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    }

    handleInteraction(targetLetter) {
        let letterClicked = targetLetter.innerText;
        let letterMatched = this.activePhrase.checkLetter(letterClicked);

        if (letterMatched) {
            targetLetter.className = "chosen"
            this.activePhrase.showMatchedLetter();

            if (this.checkForWin()) {
                this.gameOver("win");
            }
        } else {
            this.removeLife();
            targetLetter.className = "wrong"
        }
    }

    removeLife() {
        $("#scoreboard ol li img").eq(this.missed).attr("src", "images/lostHeart.png");
        this.missed++;
        
        if (this.missed > 4) {
            this.gameOver("lose");
        }
    }

    checkForWin() {
        let win = true;

        $("#phrase ul li").each(function() {
            let classContainShow = this.className.includes("show");
            if (!classContainShow && this.className !== "space") {
                return win = false;
            }
        });

        return win;
    }

    gameOver(gameOverType) {
        let gameOverMessage = gameOverType === "win" ? "Winner! :)" : "You lost! :(";
        $("#game-over-message").text(gameOverMessage);
        $("#overlay").show();
        $("#overlay").addClass(gameOverType);
        $("#overlay").removeClass("start");
    }
}
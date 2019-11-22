/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game();
game.startGame();

$(".keyrow button").click(function (e) {
    game.handleInteraction(e.target);
});


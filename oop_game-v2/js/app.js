/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game();

$("#btn__reset").click(function () {    
    resetKeyrow();
    resetOverlay();
    $("#scoreboard ol li img").attr("src", "images/liveHeart.png");
    
    game = new Game();
    game.startGame();
});

$(".keyrow button").click(function (e) {
    game.handleInteraction(e.target);
});

function resetKeyrow() {
    $(".keyrow button").removeClass("chosen");
    $(".keyrow button").removeClass("wrong");
    $(".keyrow button").addClass("key");
}

function resetOverlay() {
    $("#overlay").addClass("start");
    $("#overlay").removeClass("win");
    $("#overlay").removeClass("lose");
}
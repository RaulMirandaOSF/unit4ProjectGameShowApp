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

$(this).keypress(function (e) {
    const charKey = String.fromCharCode(e.keyCode);
    const element = $(`.keyrow .key:contains(${charKey})`);
    
    if (element.length > 0) {
        game.handleInteraction(element[0]);
    } 
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
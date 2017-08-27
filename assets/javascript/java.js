//    This global var is for my empty array where I push up the 4 random numbers generated.
var numClick = [];
// START NEW FUNCTION: In this section I create 4 random #'s between 1 & 12, push them into an array, then assign each number to the box the player clicks. 
function ranNumGen() {
    for (var i = 0; i < 4; i++) {
        var ranNum = Math.floor(Math.random() * (12) + 1);
        numClick.push(ranNum.toString());
    }
};
// Here I grab the random numbers and assign them to the value of each button.
function changeVal() {
    $("#result").val(numClick[0]);
    $("#result1").val(numClick[1]);
    $("#result2").val(numClick[2]);
    $("#result3").val(numClick[3]);
}
ranNumGen();
changeVal();
// START: Here I generate the main # for the player to match.__
function mainNumGen() {
    var mainNum = Math.floor(Math.random() * (120) + 19);
    $('#winningNum').html(mainNum);
}
mainNumGen();
// START: Here I created an onClick function to calculate the score.
function getScore() {
    $("button").on("click", function () {
        var newScore = $(this).val();
        var newScoreParse = parseInt(newScore);
        var answer = $("#result4").text();
        var answerParse = parseInt(answer);
        var addAnswers = answerParse + newScoreParse;
        $("#result4").text(addAnswers);
        checkScore();
    })
};
getScore();
// here I have a function that animates the win or lose effects.
function animateReset() {
    $("#getNumber").animate({
        left: '250px',
        opacity: '0.9',
        height: '750px',
    }, "slow");
};
// START: Here I make the win and lose animaton and add a restart the game when the player clicks play again.
function checkScore() {
    var playerScore = parseInt($("#result4").text());
    var compScore = parseInt($('#winningNum').html());
    if (playerScore == compScore) {
        animateReset();
        $("#getNumber").addClass("display-1").text("CONGRATS YOU WON!!");
        restartButton();
    }
    if (playerScore > compScore) {
        animateReset();
        $("#getNumber").addClass("display-1").text("SORRY YOU LOSE...");
        restartButton();
    }
};
// start 
function restartButton() {
    var newBut = $("<button>").addClass("resetBox");
    $(newBut).html("CLICK TO PLAY AGAIN!");
    $("#getNumber").append(newBut);
    $(".resetBox").on("click", function () {
        location.reload();
    })
};
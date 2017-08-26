//    This var is for my empty array where I push up the 4 random numbers generated at the start of the game.
var numClick = [];

// START: In this section I create 4 random #'s between 1 & 12, push them into an array, then assign each number to the box the player clicks. 
function ranNumGen() {

    for (var i = 0; i < 4; i++) {
        var ranNum = Math.floor(Math.random() * (12) + 1);

        numClick.push(ranNum);

        $('#result').html(numClick[0]);
        $('#result1').html(numClick[1]);
        $('#result2').html(numClick[2]);
        $('#result3').html(numClick[3]);
    }
};
ranNumGen();
// END___________________________________________________

// START: Here I generate the main # for the player to match.__
function mainNumGen() {
    var minNumberMain = 19;
    var maxNumberMain = 120;
    var mainNum = Math.floor(Math.random() * (maxNumberMain) + minNumberMain);
    $('#winningNum').html(mainNum);
}
mainNumGen();
// END________________________________

// START: Here I created an onClick function to calculate the score;
function getScore() {
    $('.number').on("click", function () {
        // this var returns the random # that was assinged at the start of the game.
        var newScore = $(this).text();
        // this var gets the # in the score box. 
        var answer = $("#result4").text();
        // these 2 vars parse both #'s into integers.
        var newScoreParse = parseInt(newScore);
        var answerParse = parseInt(answer);
        // this var adds both intergers.
        var addAnswers = answerParse + newScoreParse;
        // here I send the new score into the score box.
        $("#result4").text(addAnswers);
        checkScore();
    })
};
// END____________________________________________________
getScore();

// START: Here I make the win and lose animaton and add a restart the game when the player clicks play again.
function checkScore() {
    var playerScore = parseInt($("#result4").text());
    var compScore = parseInt($('#winningNum').html());

    if (playerScore == compScore) {
        animateReset();
        $("#getNumber").addClass("display-1").text("YOU WIN!!");
        var newBut = $("<button>").addClass("resetBox");
        $(newBut).html("CLICK TO PLAY AGAIN!");
        $("#getNumber").append(newBut);
        $("button").on("click", function () {
            location.reload();
        });
    }
    if (playerScore > compScore) {
        animateReset();
        $("#getNumber").addClass("display-1").text("SORRY TRY AGAIN");
        var newBut = $("<button>").addClass("resetBox");
        $(newBut).html("CLICK TO PLAY!");
        $("#getNumber").append(newBut);
        $("button").on("click", function () {
            location.reload();
        });
    }
};
// END___________________________________________________

// here I animate the win or lose boxes.
function animateReset(){
    $("#getNumber").animate({
        left: '250px',
        opacity: '0.9',
        height: '750px',
    }, "slow");
};
// END___________________________
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var gameStarted = false;

// detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$("html").keypress(function(){
    if (!gameStarted) {
        $("h1").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
  });

// when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {
    
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function nextSequence() {

    userClickedPattern = [];
    
    level ++;
    $("h1").text("Level " + level);
    
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
};

function playSound(name) {
    // Javascript to play the sound for the button colour selected
    var sounds = new Audio("sounds/" + name + ".mp3");
    sounds.play();  
};

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed")
    }, 100)
};

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over")
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver();
    }
};

function startOver(){
    level = 0;
    gameStarted = false;
    gamePattern = [];
}
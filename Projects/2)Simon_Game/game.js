const gamePattern = [];

const buttonColours = ["red", "blue", "green", "yellow"];

const userClickedPattern = [];

// when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    playSound(userChosenColour);

    animatePress(userChosenColour);
});

function nextSequence() {
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


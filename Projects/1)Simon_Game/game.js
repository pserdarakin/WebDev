var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var gameStarted = false;

// Score variables
let serdarScore = 0;
let victoriaScore = 0;

let serdarHighScore = 0;
let victoriaHighScore = 0;

// Load scores from localStorage if they exist
if (localStorage.getItem("serdarScore")) {
    serdarScore = parseInt(localStorage.getItem("serdarScore"));
}
if (localStorage.getItem("victoriaScore")) {
    victoriaScore = parseInt(localStorage.getItem("victoriaScore"));
}
if (localStorage.getItem("serdarHighScore")) {
    serdarHighScore = parseInt(localStorage.getItem("serdarHighScore"));
}
if (localStorage.getItem("victoriaHighScore")) {
    victoriaHighScore = parseInt(localStorage.getItem("victoriaHighScore"));
}

let currentPlayer = "vicky"; // Default player is vicky

// Function to toggle players
function togglePlayer() {
    currentPlayer = currentPlayer === "vicky" ? "serdar" : "vicky";
    $("h1").text(currentPlayer === "vicky" ? "Victoria's Turn, press any key" : "Serdar's Turn, press any key");
}

function updateScore() {
    if (currentPlayer === "serdar") {
        serdarScore++;
        if (serdarScore > serdarHighScore){
            serdarHighScore = serdarScore;
            localStorage.setItem("serdarHighScore", serdarHighScore); // Save to localStorage
        }
        localStorage.setItem("serdarScore", serdarScore); // Save to localStorage
    } else {
        victoriaScore++;
        if (victoriaScore > victoriaHighScore){
            victoriaHighScore = victoriaScore;
            localStorage.setItem("victoriaHighScore", victoriaHighScore); // Save to localStorage
        }
        localStorage.setItem("victoriaScore", victoriaScore); // Save to localStorage
    }

    // Display updated scores
    updateScoreDisplay();
}

// Function to update the score display
function updateScoreDisplay() {
    $(".score-display").text(`Serdar: ${serdarScore} (High: ${serdarHighScore}) | Victoria: ${victoriaScore} (High: ${victoriaHighScore})`);
}

// Detect when a keyboard key has been pressed to start the game
$("html").keypress(function () {
    if (!gameStarted) {
        $("h1").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
});

// Button click handler
$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
    userClickedPattern = [];

    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    var sounds = new Audio("sounds/" + name + ".mp3");
    sounds.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                updateScore();
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
        togglePlayer();
    }
}

function startOver() {
    level = 0;
    gameStarted = false;
    gamePattern = [];
}

// Create Reset Scores button
$(document).ready(function () {
    const resetButton = $("<button>Reset Scores</button>");
    resetButton.css({
        position: "absolute",
        top: "20px",
        right: "20px",
        padding: "10px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    });
    $("body").append(resetButton);

    resetButton.click(function () {
        serdarScore = 0;
        victoriaScore = 0;
        localStorage.setItem("serdarScore", serdarScore);
        localStorage.setItem("victoriaScore", victoriaScore);
        alert("Scores have been reset!");
        updateScoreDisplay();
    });

    // Add a display for the scores
    const scoreDisplay = $("<div class='score-display'>Serdar Score: 0 | Victoria Score: 0</div>");
    scoreDisplay.css({
        position: "absolute",
        top: "60px",
        left: "20px",
        fontSize: "20px",
        fontFamily: "'Press Start 2P', cursive",
        color: "white",
    });
    $("body").append(scoreDisplay);
    updateScoreDisplay();
});
const gamePattern = [];

const buttonColours = ["red", "blue", "green", "yellow"];

// when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // Animate a flash to the selected button
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    // Javascript to play the sound for the button colour selected
    var sounds = new Audio("sounds/" + randomChosenColour + ".mp3");
    sounds.play();


    // new var for store the id of the button that got clicked
    
 
};



/* Step 4 - Check Which Button is Pressed
1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.

2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.

--> So if the Green button was clicked, userChosenColour will equal its id which is "green".


3. At the top of the game.js file, create a new empty array with the name userClickedPattern.

4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern

At this stage, if you log the userClickedPattern you should be able to build up an array in the console by clicking on different buttons. */
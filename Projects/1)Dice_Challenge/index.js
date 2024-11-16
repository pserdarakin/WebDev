// Create a new variable called randomNumber1 and then set the value of this variable to a random number between 1 and 6.
const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);

// To pick out a random dice image between dice1.png to dice 6.png 
// then place this image inside the left <img> element.

const images1 = (`images/dice${randomNumber1}.png`);
const images2 = (`images/dice${randomNumber2}.png`);

const randomDice1 = document.querySelector(".dice .img1").setAttribute("src", images1);
const randomDice2 = document.querySelector(".dice .img2").setAttribute("src", images2);

// Change the text in the h1, (which currently says Refresh Me) to show which user won or if there was a draw depending on the dice values of player 1 (left) and player 2 (right).

if (randomNumber1 == randomNumber2) {
    document.querySelector('h1').innerHTML = 'Draw';
} else if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 Wins';
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins ';
} else {
    document.querySelector('h1').innerHTML = 'Refresh Me';
}
/*
Game Function:
- Player must guess a number between a min and max
- Player gets a certain amout of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lose
- Let player choose to play again
*/

//Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector(".messag");

//assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//create event listener for button
guessBtn.addEventListener('click', function () {
    console.log(guessInput);
});
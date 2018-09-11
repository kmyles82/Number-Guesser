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
    winningNum = Math.floor(Math.random() * (max - min + 1)+ min),
    guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector(".message");

//assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
   } 
});

//create event listener for button
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    //validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //check if won
    if (guess === winningNum) {
        gameOver(true,`${winningNum} is correct, YOU WIN!`)
    } else {
        //wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            //Game over lost
            gameOver(true,`Game Over, you lost. The correct number was ${winningNum}`)
        } else {
            //game contines but answer is wrong
            //make border green
            guessInput.style.borderColor = 'red';
            //clear the input
            guessInput.value = '';
            //tell user its the wrong number
            setMessage(`Guess is not correct, there are ${guessesLeft} guesses left`, 'red')
        }
    }
});

//game over
function gameOver(won, msg) {
    let color;

    won === true ? color = 'green' : color = 'red';
    
    //game over, won
    //disable input
    guessInput.disabled = true;
    //make border green
    guessInput.style.borderColor = color;
    //set text color
    message.style.color = color;
    //let user know they won
    setMessage(msg);

    //play again
    guessBtn.value = 'Play Again?';
    guessBtn.className = 'play-again';
}

//set message function
function setMessage(msg, color) {
    message.textContent = msg
    message.style.color = color;
}
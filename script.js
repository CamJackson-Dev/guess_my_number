'use strict';

var message = document.querySelector('.message');
var number = document.querySelector('.number');
const scoreBoard = document.querySelector('.score');

// console.log(message.textContent);

// console.log(message.textContent);

// score.textContent = 10;

// console.log(guess.value);

// Secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;

var check = document.querySelector('.check');
let score = 20;
let highscore = 0;

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const myHighScore = document.querySelector('.highscore');

  if (!guess) {
    message.textContent = '🛑 No Number!';
  } else if (guess === secretNumber) {
    message.textContent = '😍 Correct Number!';
    number.textContent = secretNumber;

    // change background to green, increase width & number color on WIN
    document.body.style.background = '#60b347';
    number.style.width = '30rem';
    number.style.color = '#60b347';
    if (score > highscore) {
      highscore = score;
      myHighScore.textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high!';
      score--;
      scoreBoard.textContent = score;
    } else {
      message.textContent = '🧨 You lost the game!';
      scoreBoard.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low!';
      score--;
      scoreBoard.textContent = score;
    } else {
      message.textContent = '🧨 You lost the game!';
      scoreBoard.textContent = 0;
    }
  }
});

// Reset game

// Choose class
const again = document.querySelector('.again');

// Add click event handler to button
again.addEventListener('click', resetGame);

function resetGame() {
  const guess = document.querySelector('.guess');
  // Rest initial value of message, number & score vars.
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  score = 20;
  guess.value = '';
  number.style.width = '15rem';
  // Restore original background colour (#222)
  document.body.style.background = '#222';
  number.style.color = '#222';
}

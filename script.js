'use strict';
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');

const displayMessage = mesg => {
  document.querySelector('.message').textContent = mesg;
};

const randomNumber = Math.floor(Math.random() * 21);
let score = 20;
let highScore = 0;
console.log(randomNumber);

btnCheck.addEventListener('click', () => {
  const gess = guessInput.value;
  console.log(gess);

  if (gess == randomNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayMessage("🎉 Wow Bro it's Correct");
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    number.textContent = randomNumber;
  } else {
    isHighOrLess(gess);
  }
});

const isHighOrLess = numb => {
  if (numb > randomNumber) {
    score--;
    Lose(score);
    document.querySelector('.score').textContent = score;
    displayMessage('📈 To High bro Guess Again ');
  } else {
    score--;
    Lose(score);
    document.querySelector('.score').textContent = score;
    displayMessage('📉 To Low bro Guess Again ');
  }
};

const Again = () => {
  btnAgain.addEventListener('click', () => {
    let score = 20;

    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start Guessing');
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highScore;
    guessInput.value = '';
    number.textContent = '?';
  });
};
Again();
const Lose = scoreless => {
  if (scoreless < 0) {
    score = 0;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'red';
    displayMessage('You lose');
  }
};

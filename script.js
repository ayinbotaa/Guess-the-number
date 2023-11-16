'use strict';
let userName = prompt('Please enter a user-name for the game');
const check = document.querySelector('.check');
let input = document.querySelector('.input');
const number = document.querySelector('.number');
let message = document.querySelector('.message');
const reset = document.querySelector('.reset');
let scoreValue = document.querySelector('.score');
let highscoreValue = document.querySelector('.highscore');
let welcome = document.querySelector('.welcome');
let randomNumber = Math.floor(Math.random() * 20) + 1;
let highscore = 0;
let score = 10;

welcome.textContent = `${userName}`;

//Event listener for the start button
check.addEventListener('click', function () {
  const value = Number(document.querySelector('.input').value);

  //Feedback to be generated when user doesn't input a value
  if (!value) {
    message.textContent = '⛔ Please input a number';

    // this block of code runs when user guess the number right
  } else if (value === randomNumber) {
    message.textContent = `Yayy! Good job ${userName}🥳`;
    check.textContent = 'yayy!🎊';
    number.textContent = value;
    document.querySelector('body').style.backgroundColor = '#20bf55';
    document.querySelector('.number').style.width = '20rem';
    if (score > highscore) {
      highscore = score;
      highscoreValue.textContent += ' ' + highscore;
    }

    // Ignore this line please😁...i''m messing with my friends with this
  } else if (value === 1818) {
    message.textContent = 'funeral birthday😮‍💨';

    // this block of code runs when user guess a number lower than the value
  } else if (value < randomNumber) {
    message.textContent = 'Too low, try again😄';

    // this block of code runs when user guess a number higher than the value
  } else if (value > randomNumber) {
    message.textContent = 'Slow down, too high - try again🙂';
  }

  // this code will be responsible for deducting scores upon wrong entry.
  if (value !== randomNumber) {
    scoreValue.textContent = '❤️ Score: ' + score--;
  }
  if (score <= 0) {
    scoreValue.textContent = 0;
    message.textContent = 'GAME OVER!💥';
    document.querySelector('body').style.backgroundColor = '#827b5a';
  }
});

//Event listener for the restart button
reset.addEventListener('click', function () {
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#9f78f1';
  document.querySelector('.number').style.width = '13rem';
  input.value = '';
  check.textContent = 'Check';
  scoreValue.textContent = '❤️ Score: ' + 10;
  score = 10;
});

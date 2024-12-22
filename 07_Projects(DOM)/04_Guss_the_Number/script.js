// console.log(Math.floor(Math.random() * 100 + 1));

let randomNum = parseInt(Math.random() * 100 + 1);
console.log(randomNum);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = []; // to store previous guess
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault(); // stop the default
    const guess = parseInt(userInput.value); // user input value
    console.log(guess);
    validateGuess(guess); // pass user i/p value to next function
  });
}

// check value is in between 1 to 100 or not
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a valid Number!");
  } else if (guess < 1) {
    alert("Please Enter a Number Greater than 1");
  } else if (guess > 100) {
    alert("Please Enter a Number less than 100");
  } else {
    prevGuess.push(guess); // store guess
    // if guesses is over
    if (numGuess === 11) {
      displayGuess(guess);
      displayMsg(`Game Over! Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// check the value is equal to random num, value is low, value is high
function checkGuess(guess) {
  if (guess === randomNum) {
    displayMsg(`Your guessed it right`);
    endGame();
  } else if (guess < randomNum) {
    displayMsg(`Number is Tooooooo low`);
  } else if (guess > randomNum) {
    displayMsg(`Number is Tooooooo High`);
  }
}

// input box is clean for next input value, update previous guesses and remaining guesses
function displayGuess(guess) {
  userInput.value = " ";
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

//
function displayMsg(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

// it will end the game
function endGame() {
  userInput.innerHTML = " ";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

// it will start the game
function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}

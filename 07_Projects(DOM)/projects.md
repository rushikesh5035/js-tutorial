# Projects related to DOM

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-lsto4n6k?file=3-DigitalClock%2Findex.html)

# Solution code

## project 1: Color Changer

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  //   console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2: BMI Calculator

```javascript
const form = document.querySelector("form");

// this usecase will give you empty value
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value); // parseInt => to convert string value to int
  const weight = parseInt(document.querySelector("#weight").value); // parseInt => to convert string value to int
  const result = document.querySelector("#results");
  const resultGuide = document.querySelector("#resultguide");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // show the result
    result.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      resultGuide.innerHTML = `<span>Under Weight</span>`;
    } else if (bmi >= 18.8 && bmi > 24.9) {
      resultGuide.innerHTML = `<span>Normal range</span>`;
    } else if (bmi >= 24.9) {
      resultGuide.innerHTML = `<span>Overweight</span>`;
    } else {
      resultGuide = "";
    }
  }

  //
});
```

## project 3: Digital clock

```javascript
const clock = document.querySelector("#clock");

// setInterval for to update at evry 1 sec
setInterval(() => {
  let date = new Date();
  // console.log(date);
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## project 4 : Guess the Number

```javascript
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
```

// function defination
function sayMyName() {
  console.log("R");
  console.log("U");
  console.log("S");
  console.log("H");
  console.log("I");
  console.log("K");
  console.log("E");
  console.log("S");
  console.log("H");
}

// // function calling / Execution
// sayMyName();

// // Function with Arguments
// when we define function(num1, num2) are the paeameters
function addTwoNum(num1, num2) {
  console.log(num1 + num2);
}

// // when we call function, we pass arguments (4, 2);
// addTwoNum(4, 2); // => 6
// addTwoNum(4, "5"); // => 45
// addTwoNum(4, "a"); // => 4a
// addTwoNum(5, null); // => 5
// const result = addTwoNum(6, 6);

function Sum(num1, num2) {
  return num1 + num2;
  //console.log(num1 + num2); // not execute bcoz after return it will not execute
}
// let ans = Sum(8, 6);
// console.log(ans);

function loginUserMsg(userName = "Samm") {
  // Samm default value; if value not pass
  if (userName === undefined) {
    console.log("Please enter a username");
  } else {
    return `${userName} just logged in`;
  }
}

// loginUserMsg("rushi"); // not print; bcoz function only return
// console.log(loginUserMsg("rushi"));
// console.log(loginUserMsg()); // undefined; bcoz we not pass anything

function calculateCardPrice(...num1) {
  return num1;
}

function calculateCardPrice_(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCardPrice(200, 400, 600)); // 200 bcoz "num1"
// console.log(calculateCardPrice(200, 400, 600, 700, 800)); // [ 200, 400, 600 ] bcoz "...num1"

// console.log(calculateCardPrice_(200, 400, 600)); // 200 bcoz "num1"

/////////////////////////////////////////////////////
// How to pass object to function and how to use
const user = {
  userName: "rushi",
  price: 199,
};

function handleObject(userInfo) {
  console.log(`useername is ${user.userName} and price is ${user.price}`);
}

// handleObject(user);

// direct pass object
handleObject({
  userName: "saam",
  price: 299,
});

////////////////////////////////////////////////////////////
// How to pass array to function
const Arr = [200, 400, 100, 500];

function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(Arr));
console.log(returnSecondValue([100, 200, 300, 400])); // directly pass array

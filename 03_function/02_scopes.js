let a = 10;
const b = 20;
var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

if (true) {
  // console.log(a); // not execute
  // console.log(b); // not execute
  // console.log(c); // Execute bcoz of VAR datatype
}

// ++++++++++++++++++++++ Function scope ++++++++++++++++++++++++
function sum(a, b) {
  let ans = a + b;
  console.log(ans);
}
// console.log(ans); // not allowed; ans scope is only for function
// sum(3, 4);

// +++++++++++++++++++++++ Nested function (closer) +++++++++++++++++++++++++
function one() {
  const userName = "rushi";

  function two() {
    const website = "youtube";
    console.log(userName); // executed; child function can you parent function variable
  }
  // console.log(website); // not execute; "website" scope is only for two() function
  two();
}

// one();

//
console.log(addOne(6)); // execute
function addOne(num) {
  return num + 1;
}
// addOne(6);

// addTwo(2); // not execute;
// function expression; store function in variables
const addTwo = function (num) {
  return num + 2;
};
// addTwo(2);

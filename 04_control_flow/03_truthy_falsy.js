const userEmail = [];
// it assumes userEmail is truthy value
if (userEmail) {
  //   console.log("Got users email");
} else {
  //   console.log("Don't have user email");
}

// falsy values =>
//   false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values =>
//  [] (empty arrray), "0", "false", " " (space),{}(empty obj), function(){} (empty function)

// if (userEmail.length === 0) {
//   console.log("array is empty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  //   console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 21 ?? 10; // 21 goes to val1; if not then 10 instead of response is null or undefined

// val1 = null ?? 10; // not assign null; assign 10

val1 = undefined ?? 12; // not assign undefined; assign 12

val1 = null ?? 10 ?? 15; // assign 1st value -> 10

// console.log(val1);

/////////////////////
// Terniary Operator
// condition ? true : false; // Syntax

const iceTeaPrice = 100;
iceTeaPrice >= 80
  ? console.log("Greater than 80")
  : console.log("less than 80");

let age = "rushi";

console.log(typeof age);
console.log(typeof age);

let valueInNumber = Number(age);
console.log(typeof valueInNumber);
console.log(valueInNumber); // => NaN

// "32" => 32
// "32abc" => NaN (Not a Number)
// true => 1; flase => 0

let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn); // convert 1 to boolean
console.log(typeof booleanIsLoggedIn);

console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "abc" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
console.log(typeof someNumber);

// ************************** Operations **************************

let value = 3;
let negValue = -value;
//console.log(negValue);

// ****** Arithmetic operation ******
// console.log(2 + 2); // 4
// console.log(2 - 2); // 0
// console.log(2 * 2); // 4
// console.log(2 ** 3); // power
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "hello";
let str2 = " world";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); // 12 -> string conversion
// console.log(1 + "2"); //12 -> string conversion
// console.log("1" + 2 + 2); // 122 -> string conversion
// console.log(1 + 2 + "2"); // 32 -> (1+2)=3 + "2" => 32

// console.log(true); // true
// console.log(+true); // 1
// console.log(+""); // 0

let gameCounter = 100;
// gameCounter++;
++gameCounter;
console.log(gameCounter);

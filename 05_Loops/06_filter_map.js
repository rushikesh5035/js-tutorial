// const coding = ["js", "ruby", "java", "flutter", "python", "react", "node.js"];

// const value = coding.forEach((item) => {
//   //   console.log(item);
//   return item;
// });
// console.log(value);
// forEach does't return any value; so when we need to return value; use filter

// filter => filter can return the value
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let value = nums.filter((num) => {
  return num > 5;
});
// console.log(value);

// when u want to return value with forEach
let newNums = [];
nums.forEach((num) => {
  if (num > 5) {
    newNums.push(num);
  }
});
// console.log(newNums);

// *********************** Chaining ***************************
const newNum = nums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
// console.log(newNum);

// ************************** Reduce ****************************
const array = [1, 2, 3, 4]; // currentValue is array value
const initialValue = 0; // initially accumlator store initial value

const sumWithInitial = array.reduce(function (accumlator, currentValue) {
  console.log(`ACC val ${accumlator} and Current val ${currentValue}`);
  return accumlator + currentValue;
}, initialValue);

// const sumWithInitial = array.reduce(
//   (accumlator, currentValue) => accumlator + currentValue,
//   initialValue
// );
console.log(sumWithInitial);

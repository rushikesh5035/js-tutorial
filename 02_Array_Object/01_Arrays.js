// #Arrays

const myArr = [0, 1, 2, 3, 4, 5];
const newArr = [0, 1, 3, true, false, "rushi"]; // mixed datatype array
const heros = ["shaktiman", "naagraj"];

const Arr1 = new Array(1, 2, 3, 4, 5);

// console.log(Arr1[2]); // 2nd index element => 3

// +++++++++++++++++++++++++++++ Array Methods +++++++++++++++++++++++++++++
// push, pop, unshift, shift, indexOf, include, concat, reverse, sort, slice, splice

const Arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// Arr.push(0); // Add 0 to Array
// Arr.push(-1);

// Arr.pop(); // remove last index element

// Arr.unshift(9); // Adding element to starting of array

// Arr.shift(); // Remove element from starting

// console.log(Arr.indexOf(0)); // retunr index of value => retunr index; else -1

// console.log(Arr.includes(2)); // search value in array => true; false

// const Arr2 = Arr1.join(); //convert arr to string
// console.log(Arr1);
// console.log(typeof Arr2);

const concat_Arr = Arr.concat(Arr1); // merge two array
// console.log(Arr.concat(Arr1));
// console.log(concat_Arr);

// console.log(Arr.reverse()); // Reverse Array

// console.log(Arr.sort()); // Sort Array

// *************************************************************************************
//                  Slice   V/S    Splice
// *************************************************************************************

// // Slice => create copy or Array from start and End-1 index
// console.log(Arr);
// console.log(Arr.slice(1, 4)); //create copy from 1 index to 4-1=3 index
// console.log(Arr); // can't change original array

// // Splice => remove element from original array (from start and end index)
// console.log(Arr);
// console.log(Arr.splice(1, 4)); // remove element from 1 to 4th index from original array
// console.log(Arr); // changes done in original array

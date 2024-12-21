/* #Primitive (Does not store reference in memory)

    // 7 types: String, Number, Boolean, 
                null(empty), undefined, 
                Symbol(unique), BigInt
    
    JS is dynamic types language (does't need to define datatype )
    TS is Static type (based on datatype)

*/
const score = 100; // number
const scoreValue = 100.3; // number
const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let userEmail; // undefined OR
let userId = undefined;
const BigNum = 78945612365478952416n; //BigInt

const id = Symbol("123");
const newId = Symbol("123");
//id & newId both are unique -> symbol
// console.log(id === newId); // false

/* #Non-primitive / Reference (store reference in memory)

    // Arrays, Objects, Functions
    
*/

//Array -> datatpes = Object
const heros = ["shaktiman", "naagraj", "doga"];

//Object -> datatpes = Object
let user = {
  name: "rushi",
  Age: 18,
  gender: "male",
};

//Function -> datatpes = Function
const myFun = function () {
  console.log("Hello World");
};

// console.log(typeof myFun);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// Memory -> Stack (use in Primitive), Heap(use in Non-Primitive)

let myYoutubeName = "rishi";
let anotherName = myYoutubeName;

anotherName = "rushiraj";

// console.log(anotherName);
// console.log(myYoutubeName);

// Non-primitive
let userOne = {
  email: "rushi@gmail.coms",
  upi: "user@ybl",
};

let user2 = userOne;

user2.email = "rushiraj@yahho.com";

console.log(userOne);
console.log(user2);

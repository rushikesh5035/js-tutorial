const name = "rushikesh"; // string declaration
const repoCount = 50;

// console.log(name + " " + repoCount); // don't use this syntax

// console.log(`Hello my name is ${name} andmy repo count is ${repoCount}`);

const gameName = new String("Nilesh-coder-Pict"); // new String Declaration

// ************************** STRING METHODES *********************************

/* ++++++++++++++++ toUpperCase() ++++++++++++++++ */
// console.log(gameName.toUpperCase());         //NILESH-CODER-PICT

/* ++++++++++++++++ toLowerCase() ++++++++++++++++ */
// console.log(gameName.toLowerCase());         //nilesh-coder-pict

/* ++++++++++++++++ indexOf() ++++++++++++++++ */
// console.log(gameName.indexOf("e")); // return 'e' index -> 3

/* ++++++++++++++++ charAt() ++++++++++++++++ */
// console.log(gameName.charAt(4)); // return 4th index char

/* ++++++++++++++++ trim() ++++++++++++++++ */
// const str = "   asdfghj   ";
// console.log(str.trim()); // remove the whitespaces(Extra-spaces)-> 'asdfghj'

/* ++++++++++++++++ slice() ++++++++++++++++ */
// console.log(gameName.slice(0, 3)); // retunr string from starting and ending-1 index => Nil
// console.log(gameName.slice(-1)); // starting from ending

/* ++++++++++++++++ substrings() ++++++++++++++++ */
// console.log(gameName.substring(0, 4)); // return from starting and ending index => Nile

/* ++++++++++++++++ replace() ++++++++++++++++ */
const url = "https://hitesh.com/hitesh%20coding";
// console.log(url.replace("%20", "-")); // replace char

/* ++++++++++++++++ include() ++++++++++++++++ */
// console.log(url.includes("20")); //check given char is present or not in string

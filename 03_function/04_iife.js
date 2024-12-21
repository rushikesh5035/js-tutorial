// // Immediately Invoked Function Expression (IIFE)

function DB() {
  console.log("DB Connected");
}
DB();

/*IIFE -> global scope ke pollution se problem hoti hain kahi baar, 
        to global scope ke variables, or any decleration ko remove karne ke liye IIFE
*/
(function DB() {
  console.log("DB Connected");
})(); // ; => for ending IIFE (after ending this function another will execute)

// IIFE == ()() => 1st () function defination, 2nd () function Execution

// IIFE with arrow function
(() => {
  console.log("DB Connected");
})();

// Named IFFE => IIFE with arggument
((name) => {
  console.log(`${name}`);
})("rushi");

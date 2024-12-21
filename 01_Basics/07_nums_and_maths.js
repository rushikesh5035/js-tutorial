const score = 400;
// console.log(score);

const balance = new Number(1400); // define specifically Number
// console.log(balance);

// console.log(typeof balance.toString()); //type => string
// console.log(balance.toFixed(2)); // 1400.00 (after . two decimal)

const otherNum = 123.8966;
// console.log(otherNum.toPrecision(3)); // 123.8966 => 124; 23.8966 => 23.9

const num = 1000000;
// console.log(num.toLocaleString("en-IN")); // => put , on indian standards -> 10,00,000

/* ++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++ */

// console.log(Math);
// console.log(Math.abs(-45)); // return absolute value; -ve to +ve
// console.log(Math.round(4.6)); //=> 5 return the rounded value
// console.log(Math.ceil(4.3)); // if value is grater than 4 choose higher value
// console.log(Math.floor(4.5)); // chooses lowest value

// console.log(Math.PI);
// console.log(Math.min(6, 5, 3, 7, 2, 4, 1)); // 1
// console.log(Math.max(6, 5, 3, 7, 2, 4, 1)); // 7

console.log(Math.random()); // return random value between 0 and 1
console.log(Math.random() * 10 + 1); //return values betwwen 0 to 10; + 1 -> from 1 to 10; Min value is 1

const min = 10;
const max = 20;

// (Math.random() * (max - min + 1))+ min; => basic formula
// (max - min) => for specific range ; + 1 for zero case avoid
// + min for minimum starting value

console.log(Math.floor(Math.random() * (max - min + 1) + min));

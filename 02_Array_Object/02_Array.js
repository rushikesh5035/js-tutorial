const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // nested array
// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros);
// console.log(marvel_heros[3]); // return direct array, not element; bcoz -> 3rd element is array
// console.log(marvel_heros[3][0]); // now it will return "superman"

const newArr = marvel_heros.concat(dc_heros);
// console.log(newArr); // concat -> return new Array
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const newArr1 = [...marvel_heros, ...dc_heros]; //spread out
// console.log(newArr1); // spread out values

const newArr2 = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10]];
const newArr3 = newArr2.flat(Infinity);
// console.log(newArr2);
// console.log(newArr3);

// console.log(Array.isArray("rushi")); // -> false
// console.log(Array.from("rushi")); // convert string to array
// console.log(Array.from({ name: "hitesh" })); // return empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

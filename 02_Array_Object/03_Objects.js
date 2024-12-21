// Singleton
// Object.create;

// Objects literals

const mySymbol = Symbol("key1"); // declaration of sysmbol

let user = {
  name: "rushi", // it convert into strings
  surname: "tele",
  age: 20, // you take number as key, js will also convert it into string
  clg: "vit pune",
  branch: "E&TC",
  email: "rushi@vit.edu",
  subject: ["CNS", "OS", "DAA"],
  [mySymbol]: "key1", // this is the way to access symbol as a key in Object
};

// console.log(user.surname);
// console.log(user["subject"]);
// console.log(user[mySymbol]); // to access symbol

user.age = 22; // change value
// Object.freeze(user); //freeze to not chan ge any value on object
user.clg = "VIT"; // not change => bcoz object is freeze
// console.log(user);

user.greeting = function () {
  console.log("Hello JS user");
};

user.greeting2 = function () {
  console.log(`Hello JS user : ${this.name}`);
};

// console.log(user.greeting);
// console.log(user.greeting());
// console.log(user.greeting2());

console.log(typeof user.subject);

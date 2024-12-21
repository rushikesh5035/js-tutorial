// for of

const arr = [1, 2, 3, 4, 5];
for (const i of arr) {
  //   console.log(i);
}

const greetings = "Hello world";
for (const greet of greetings) {
  //   console.log(`Each char is ${greet}`);
}

// Maps
// const map = new Map();
// map.set("Maharashtra", "MH");
// map.set("utter pradesh", "UP");
// map.set("madhya pradesh", "MP");
// console.log(map);

// for (const [i, j] of map) {
//     console.log([i, `:-`, j]);
// }

// const myObj = {
//   game1: "NFS",
//   game2: "spiderman",
// };

// for (const [key, value] of myObj) {
//   //   console.log(key, value);
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++

const myObject = {
  js: "Javascript",
  cpp: "C++",
  py: "python",
  rb: "ruby",
  swift: "swift by apple",
};
//for in
for (const key in myObject) {
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programmingLang = ["js", "rb", "py", "java", "cpp"];
for (const key in programmingLang) {
  //   console.log(programmingLang[key]);
}

const map = new Map();
map.set("Maharashtra", "MH");
map.set("utter pradesh", "UP");
map.set("madhya pradesh", "MP");

for (const key in map) {
  console.log(key);
}

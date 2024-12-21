//for each
const coding = ["js", "ruby", "java", "flutter", "python", "react", "node.js"];

// coding.forEach((element) => {
//   console.log(element);
// });

// coding.forEach(function (itam) {
//   console.log(itam);
// });

// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((itam, index, arr) => {
//   console.log(itam, index, arr);
// });

const myCoding = [
  {
    langname: "javascript",
    langFileName: "js",
  },
  {
    langname: "java",
    langFileName: "java",
  },
  {
    langname: "python",
    langFileName: "py",
  },
  {
    langname: "ruby",
    langFileName: "rb",
  },
];

myCoding.forEach((item) => {
  console.log(item.langFileName);
  //   console.log(item.langname);
});

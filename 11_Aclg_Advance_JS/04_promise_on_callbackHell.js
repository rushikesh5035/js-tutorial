h2 = document.querySelector("h2");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h2.style.color = color; // when 1st color is change
      console.log(`color changed to ${color}`);
      resolve("color changed!");
    }, delay);
  });
}

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000);
//   });
// });

// // color chnaged (callback hell) with promises
// changeColor("red", 1000)
//   .then(() => {
//     console.log("color changed : red");
//     return changeColor("yellow", 1000);
//   })
//   .then(() => {
//     console.log("color changed : yellow");
//     return changeColor("orange", 1000);
//   })
//   .then(() => {
//     console.log("color changed: orange");
//     return changeColor("green", 1000);
//   })
//   .then(() => {
//     console.log("color changed: orange");
//     return changeColor("blue", 1000);
//   })
//   .then(() => {
//     console.log("color changed: blue");
//     return changeColor("brown", 1000);
//   })
//   .then(() => {
//     console.log("color changed: brown");
//     return changeColor("aqua", 1000);
//   })
//   .then(() => {
//     console.log("color changed: aqua");
//     return changeColor("coral", 1000);
//   })
//   .then(() => {
//     console.log("color changed: coral");
//   })
//   .catch(() => {
//     console.log("Color not changed");
//   });

// // ------------------------------------------------------------
// // color changed with async and await
async function demo() {
  // here 1st "red" will cahnge then "yellow" and so on
  // try & catch to handling rejection
  try {
    await changeColor("red", 1000);
    await changeColor("yellow", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
  } catch (err) {
    console.log(err);
  }
  // if in the above code there is the any error got; catch will run and below code will work

  let a = 5;
  console.log(a);
  console.log("new num = ", a + 3);
}
// demo();

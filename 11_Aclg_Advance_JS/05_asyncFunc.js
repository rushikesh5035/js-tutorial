// async makes a function return a Promise
// await makes a function wait for a Promise

// async and await => return promise bydefault

// function => normal => promiseState: fulfilled + retrun
// function => error => promiseState: rejected

// async function greet() {
//   //   as.absc(); // promise state: rejected
//   //   throw "some random error"; // when we need to throw random error use "throw" keyword
//   return "hello";
// }

// greet()
//   .then((result) => {
//     console.log("promise was resolevd");
//     console.log("result was :", result);
//   })
//   .catch((err) => {
//     console.log("promise was rejected: ", err);
//   });

// //
// let demo = async () => {
//   return 5;
// };

// // Await keyword
function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  //   getNum();
  //   getNum();
  //   getNum();
  // here at a time 3 number will print

  await getNum();
  await getNum();
  await getNum();
  await getNum();
  getNum();
  // here after every 1 sec
}

// // -------------------------------------------------------------------
// // Handling rejections with Await => try & catch

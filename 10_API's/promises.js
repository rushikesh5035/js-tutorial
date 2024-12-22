// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an async task
//   // Db calls, cryptography, network

//   setTimeout(function () {
//     console.log("Async task is complete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

// **********************************************************************************************
// // // 2nd promise
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task two");
//     resolve("resolve");
//   }, 1000);
//   //
// }).then(function () {
//   console.log("Async 2 resolved");
// });

// **********************************************************************************************
//// 3rd promise
// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "chai", email: "chai@gmail.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// **********************************************************************************************
// //// 4th promise
// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "rushi", pass: "asdfg" });
//     } else {
//       reject("ERROR: Somthing went wrong!");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log("The promise is either resolved or rejected"));

// **********************************************************************************************
// // 5th Promise
// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Javascript", pass: "asdfg" });
//     } else {
//       reject("ERROR: JS went wrong!");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive();

// // **********************************************************************************************
// async function getAllUser(params) {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: error");
//   }
// }
// getAllUser();

////
// fetch("https://jsonplaceholder.typicode.com/users")
fetch("https://api.github.com/users/rushikesh5035")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// function saveToBD(data) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   if (internetSpeed > 4) {
//     console.log("your data was saved");
//   } else {
//     console.log("weak connection. data not saved");
//   }
// }

// saveToBD("hey");

//// ****************************************************

// function saveToBD(data, suceess, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   if (internetSpeed > 4) {
//     suceess();
//   } else {
//     failure();
//   }
// }
// saveToBD(
//   "hey",
//   () => {
//     // callback hell
//     console.log("success: your data was saved");
//     saveToBD(
//       "hello",
//       () => {
//         // callback hell
//         console.log("Success 2: data 2 saved");
//         saveToBD(
//           "hello",
//           () => {
//             // callback hell
//             console.log("Success 3: data 3 saved");
//           },
//           () => {
//             console.log("failure 3: weak connection. data not saved");
//           }
//         );
//       },
//       () => {
//         console.log("failure 2: weak connection. data not saved");
//       }
//     );
//   },
//   () => {
//     console.log("failure: weak connection. data not saved");
//   }
// );

// // -----------------------------------------------------------------------------
// to avoid the above callback hell pronlem => promises

function saveToBD(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    console.log(internetSpeed);

    if (internetSpeed > 4) {
      resolve("success: data was saved");
    } else {
      reject("failure: save not saved");
    }
  });
}
// saveToBD("hey") // when data was saved => then; not saved => catch
//   .then(() => {
//     console.log("Data 1 saved.promise resolved");
//   })
//   .catch((error) => {
//     console.log("promise rejected");
//   });

// // -----------------------------------------------------------------------------
// // promise chaining

// saveToBD("hey") // when data was saved => then; not saved => catch
//   .then(() => {
//     console.log("Data 1 saved. promise resolved");

//     saveToBD("Hello wolrd").then(() => {
//       console.log("Data 2 saved. promise resolved");
//     });
//   })
//   .catch((error) => {
//     console.log("promise rejected");
//   });

// // -----------------------------------------------------------------------------
// // improved => 1st then can directly return "saveTODB()"

// saveToBD("hey") // when data was saved => then; not saved => catch
//   .then(() => {
//     console.log("Data 1 saved. promise resolved");
//     return saveToBD("Hello wolrd");
//   })
//   .then(() => {
//     console.log("Data 2 saved. promise resolved");
//     return saveToBD("rushi");
//   })
//   .then(() => {
//     console.log("Data 3 saved. promise resolved");
//   })
//   .catch((error) => {
//     console.log("Data not saved. promise rejected");
//   });

// // -----------------------------------------------------------------------------
// // promises rejected and resolved with some data (result or error)
// // when promise was resolved; with some "Data", or rejected with some data

saveToBD("hey") // when data was saved => then; not saved => catch
  .then((result) => {
    console.log("Data 1 saved");
    console.log(`Result for Data 1 : ${result}`);
    return saveToBD("Hello wolrd");
  })
  .then((result) => {
    console.log("Data 2 saved");
    console.log(`Result for Data 2 : ${result}`);
    return saveToBD("rushi");
  })
  .then((result) => {
    console.log("Data 3 saved");
    console.log(`Result for Data 3 : ${result}`);
  })
  .catch((error) => {
    console.log("Data not saved. promise rejected");
  });

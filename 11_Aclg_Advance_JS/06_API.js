/* 
Accessing Data from JSON

    1) JSON.parse(data) Methode => to parse a string data into a JS object

    2) JSON.stringify(json) method => to parse a JS object data into JSON
*/

// let jsonRes =
//   '{"fact":"Cats lose almost as much fluid in the saliva while grooming themselves as they do through urination.","length":100}';
// console.log(jsonRes);

// // convert js data (string) to js object
// let validRes = JSON.parse(jsonRes);
// console.log(validRes);
// console.log(validRes.fact); // fact in API's

// // // to convert js object to JS data
// let std = {
//   name: "rushi",
//   marks: 22,
// };
// let obj = JSON.stringify(std);
// console.log(obj);

// // --------------------------------------------------------------------
// Ajax => Asynchronous javascript and XML
// js send request to api and api send back response in the form of XML; this process is asynchronous

// // --------------------------------------------------------------------
// // HTTP Verbs
// GET =>
// POST =>
// DELETE =>

/* Status codes
            200 - ok
            404 - Not found
    400 - Bad Request
    500 - Internal Server Error
    */

// // --------------------------------------------------------------------
/* Add info in URL's
Query Strings
    'https://www.gooogle.com/search?q=mango'
   Query Strings = "q=mango" => key value pair

   ex:  /search?q=linkedin

 */

// // ------------------------------------------------------------------------
// // ------------------------------------------------------------------------
//  // Request using Fetch

let url = "https://catfact.ninja/fact";

// fetch(url) // request to API
//   .then((res) => {
//     // response from API
//     // console.log(res);
//     return res.json(); // convert to JSON
//   })
//   .then((data) => {
//     // console.log(data);
//     console.log("Data 1: ", data.fact);
//     return fetch(url); // chaining
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log("Data 2: ", data2.fact);
//   })
//   .catch((err) => {
//     console.log("ERROR- ", err);
//   });

// // ******************************************************************************
// // Fetch with async and await

// async function getFacts() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);
//   } catch (e) {
//     console.log("ERROR- ", e);
//   }
// }
// getFacts();

// // ******************************************************************************
// Axios => data is directly in JSON format; does't need to parse data

async function getFacts() {
  try {
    let res = await axios.get(url);
    console.log(res.data.fact);
  } catch (e) {
    console.log("ERROR - ", e);
  }
}
getFacts();

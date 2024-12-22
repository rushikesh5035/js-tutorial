// setTimeout(() => {
//   console.log("Heyyy");
// }, 2000); //print after 2sec

// const print = () => {
//   console.log("Hey");
// };
// setTimeout(print, 2000);

// ********************************************************************************
/*
// to change text
const changeText = () => {
  document.querySelector("h1").innerHTML = "Best Js series";
};
const changeMe = setTimeout(changeText, 4000);

// Clear timeOut
document.querySelector("#stop").addEventListener("click", () => {
  clearTimeout(changeMe);
  console.log("Stoped");
});
*/
// ********************************************************************************

// // SetInterval() => print every sec
// *******************************************************************************

let intervalID;

const sayDate = (str) => {
  console.log(str, Date.now());
};

document.querySelector("#start").addEventListener("click", () => {
  intervalID = setInterval(sayDate, 1000, "hello");
});

// const intervalID = setInterval(sayDate, 1000, "hi");

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intervalID);
  intervalID = null;
  console.log("Stoped");
});

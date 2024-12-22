h2 = document.querySelector("h2");

// setTimeout(() => {
//   h2.style.color = "red";
// }, 1000);

// setTimeout(() => {
//   h2.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//   h2.style.color = "green";
// }, 3000);

// // **********************************************
// function changeColor(color, delay) {
//   setTimeout(() => {
//     h2.style.color = color;
//   }, delay);
// }

// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);

// // ***********************************************
function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h2.style.color = color; // when 1st color is change
    nextColorChange(); // then call to next color to change
  }, delay);
}

// nesting to change color one after one
changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("green", 1000);
  });
});

// callbacks nesting => callback hell

// to solve this problem => promises , async & await

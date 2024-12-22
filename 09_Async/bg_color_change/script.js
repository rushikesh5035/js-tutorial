// generate random color
const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor());
let intervalID;

const startChangingColor = function () {
  if (!intervalID) {
    intervalID = setInterval(changeBodyColor, 1000);
  }
  function changeBodyColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null; // to avide overriding
  console.log("stoped");
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);

// document.getElementById("owl").onclick = function () {
//   alert("Owl clicked");
// };

// attachEvent()
// JQuery => onEventListner()

// type, timestamp, defaultPrevented (default beheviour change)
// target. toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altKey, ctrKey, shiftKey, KeyCode

// document.getElementById("images").addEventListener(
//   "click",
//   (e) => {
//     console.log("cliked inside the ul");
//   },
//   true // true or false => bobbling event
// );

// document.getElementById("owl").addEventListener(
//   "click",
//   (e) => {
//     console.log("owl cliked");
//     e.stopPropagation(); // when click the event it not goes to upper event
//   },
//   true // true or false => bobbling event
// );

// document.getElementById("google").addEventListener(
//   "click",
//   (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google clicked");
//   },
//   false
// );

document.querySelector("#images").addEventListener("click", (e) => {
  console.log(e.target.tagName);

  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    let removeIt = e.target.parentNode;

    removeIt.remove();
  }

  //   removeIt.parentNode.removeChild(removeIt);
});

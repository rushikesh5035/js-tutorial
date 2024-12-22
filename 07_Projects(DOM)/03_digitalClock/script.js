const clock = document.querySelector("#clock");

// setInterval for to update at evry 1 sec
setInterval(() => {
  let date = new Date();
  // console.log(date);
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

let h2 = document.querySelector("h2");
let Button = document.querySelector("button");

let url = "https://catfact.ninja/fact";

Button.addEventListener("click", async () => {
  console.log("Button was clicked");
  let fact = await getFacts();
  console.log(fact);
  let p = document.querySelector("p");
  p.innerText = fact;
});

async function getFacts() {
  try {
    let res = await axios.get(url);
    // console.log(res.data.fact);
    return res.data.fact;
  } catch (e) {
    console.log("ERROR - ", e);
    return "No fact Found";
  }
}

// getFacts();

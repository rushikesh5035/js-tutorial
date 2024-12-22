let h1 = document.querySelector("h1");
let Button = document.querySelector("button");

let url = "https://dog.ceo/api/breeds/image/random";

Button.addEventListener("click", async () => {
  let link = await getImg();
  console.log(link);
  let img = document.querySelector("#result");
  img.setAttribute("src", link);
});

async function getImg() {
  try {
    let res = await axios.get(url);
    return res.data.message;
  } catch (e) {
    return "No IMG Found";
  }
}

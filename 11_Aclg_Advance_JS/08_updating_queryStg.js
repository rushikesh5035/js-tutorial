let btn = document.querySelector("button");

let url = "http://universities.hipolabs.com/search?name=";

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  //   console.log(country);

  let clg = await getClg(country);
  console.log(clg);
  show(clg);
});

async function show(clg) {
  let list = document.querySelector("ul");
  list.innerHTML = ""; //every time search previous
  for (collages of clg) {
    // console.log(collages.name);
    let li = document.createElement("li");
    li.innerHTML = collages.name;
    list.appendChild(li);
  }
}

async function getClg(country) {
  try {
    let res = await axios.get(url + country);
    // console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

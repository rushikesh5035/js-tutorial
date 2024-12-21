const user = {
  username: "rushi",
  price: 199,

  welcomeMsg: function () {
    console.log(`${this.username} welcome to website`); //this refers to object -> username
    // console.log(this); //this refers to object -> username, price, welcomMsg
  },
};

// console.log(user.welcomeMsg);
// user.welcomeMsg();
// user.username = "nileeh";
// user.welcomeMsg();

// console.log(this); // => {} (empty object)

function chai() {
  const username = "rushi";
  console.log(this.username); // undefined bcoz "this" work in object
  console.log(this); // in normal function this -> window object
}
// chai();

////////////////////////// Arrow Function ///////////////////////////////////

const arrow = () => {
  const username = "rushi";
  console.log(this.username);
  console.log(this); // in arrow function this -> {} (empty object)
};
// arrow();

const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(5, 4));

// emplicite return
const addTwo1 = (num1, num2) => num1 + num2;
console.log(addTwo1(5, 4));

const addTwo2 = (num1, num2) => num1 + num2;
console.log(addTwo2(5, 4));

// retunr object
const asdg = (num1, num2) => ({ username: "Rushi" });
console.log(asdg(5, 4));

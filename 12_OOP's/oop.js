// ************ Object Literal ******************************************
// const user = {
//   username: "rushi",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     // console.log("Got user details from DB");
//     // console.log(`username: ${this.username}`);
//     console.log(this);
//   },
// };

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// **************** Constructor function *************************************

// const promiseOne = new Promise();
// const date = new Date();

function User(userName, loginCount, isLoggedIn) {
  this.userName = userName; // this.username => variable, username => passing value
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.userName}`);
  };

  return this;
}

const userOne = new User("rishi", 15, true);
const userTwo = new User("hello", 11, false); // it will override the value to overcome this use new keyword
console.log(userOne.constructor);
// console.log(userTwo);

// new => 1st create empty object that is "instance"
//

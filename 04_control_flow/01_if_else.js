// ********************** If ************************

// if (condition) { //condition = true => execute code

// }

// <, >, <=, >=, ==, !=, ===, !==

const isUserLoggedIn = true;
if (isUserLoggedIn) {
  console.log("User is logged In Account");
}

// Nested if

const balance = 800;

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

// Logical operators

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard && 3 == 3) {
  console.log("Allow to buy course");
}

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}

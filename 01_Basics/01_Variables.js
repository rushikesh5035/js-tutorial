const accountId = 144553;
let accountEmail = "rushi@gmial.com";
var accountPass = "12345"; // Prefer not to use var -> because of issue in block scope and functional scope
accountCity = "Pune";

let accountState; // undefined value

// accountId = 54321; // not allowed -> const value will not

console.log(accountCity);
console.table([
  accountEmail,
  accountId,
  accountPass,
  accountCity,
  accountState,
]);

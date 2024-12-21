let data = new Date();

// console.log(data);
// console.log(data.toString()); //India Standard Time
// console.log(data.toISOString());
// console.log(data.toDateString());
// console.log(data.toJSON());
// console.log(data.toLocaleDateString());
// console.log(data.toLocaleString());
// console.log(typeof data);

//declare specific date
// let myCreatedDate = new Date(2004, 2, 2); //YY-MM-DD
// let myCreatedDate = new Date("2004-02-02");
let myCreatedDate = new Date("02-12-2024"); // DD-MM-YY
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // return in mili seconds
// console.log(myCreatedDate.getTime());
// console.log(Date.now() / 1000); // ms to sec
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDate());
// console.log(newDate.getFullYear());

newDate.toLocaleDateString("default", {
  weekday: "long",
});

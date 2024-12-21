// For Loop

// let array = [1, 2, 3, 4, 5, 6];
// for (let index = 0; index < array.length; index++) {
//   console.log(array[index]);
// }

// Nested For Loop
for (let i = 0; i < 10; i++) {
  // console.log(`Outer loop value ${i}`);

  for (let j = 0; j < 10; j++) {
    // console.log(`Inner loop value ${j}`);
  }
}

let array = [1, 2, 3, 4, 5];
for (let index = 0; index < array.length; index++) {
  // console.log(array[index]);
}

// break and continue

for (let i = 1; i <= 15; i++) {
  if (i == 5) {
    console.log("5 Detected");
    // break;
    continue;
  }
  console.log(i);
}

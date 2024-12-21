// const tinderUser = new Object();

//     OR

const tinderUser = {};

// Add to objects
tinderUser.id = "123abc";
tinderUser.name = "Samm";
tinderUser.age = 21;
tinderUser.isLoggedIn = false;

// update
tinderUser.age = 22;

// console.log(tinderUser);

const user = {
  email: "rushi@gmail.com",

  // objects of objects (Nested Object)
  fullName: {
    firstName: "rushi",
    lastName: "tele",
  },
};

// console.log(user.fullName.firstName);

// +++++++++++++++++++++ Merging objects ++++++++++++++++++++++++
const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};

const obj3 = {
  5: "a",
  6: "b",
};

// const obj = { obj1, obj2 };
// const obj = Object.assign(obj1, obj2, obj3);
// const obj = Object.assign({}, obj1, obj2, obj3);
// console.log(obj);
// console.log(obj === obj1);

// const obj = { ...obj1, ...obj2, ...obj3 }; //spread and combine
// console.log(obj);

// // +++++++++++++++++++++++++ Array Objects  ++++++++++++++++++++++++++++++++++++

const clgUsers = [
  {
    username: "rushi123",
    clg: "VIT",
    branch: "E&TC",
  },
  {
    username: "nilesh321",
    clg: "PICT",
    branch: "CS",
  },
  {
    username: "sanket2210",
    clg: "VIT",
    branch: "IT",
  },
];

// console.log(clgUsers[1].username);

// console.log(Object.keys(clgUsers));
// console.log(Object.values(clgUsers));
// console.log(Object.entries(clgUsers));

// console.log(clgUsers[1].hasOwnProperty("clg")); // check clg key is present -> true; false

// ++++++++++++++++++ Objects De-structuring ++++++++++++++++++++++++++++++++++++++++++

const course = {
  courseName: "JS A to Z",
  coursePrice: "1000",
  courseInstructure: "hitesh",
};

// course.courseInstructure;
const { courseInstructure } = course; // de-structuring of object
console.log(courseInstructure);

const { courseInstructure: instructure } = course;
console.log(instructure);

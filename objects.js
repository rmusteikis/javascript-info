const user = {
  name: "John",
  age: 30,
};

for (let key in user) {
  console.log(key, user[key]);
}

// task
const user2 = {};
user2.name = "John";
user2.surname = "Smith";
user2.name = "Pete";
delete user2.name;
console.log(user2);

// task2
const schedule = {};

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));

function isEmpty(schedule) {
  for (let time in schedule) {
    return false; // if loop has started, there is a property
  }
  return true;
}

// task3
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}

console.log(sumSalaries(salaries));

// task4
/// before the call
const menu = {
  width: 200,
  height: 300,
  title: "My Menu",
};

function multiplyNumeric(menu) {
  for (let key in menu) {
    // my solution:
    // if (menu[key] * 2) menu[key] = menu[key] * 2;
    // a better one:
    if (typeof menu[key] == "number") {
      menu[key] *= 2;
    }
  }
}

multiplyNumeric(menu);

console.log(menu);

/// after the call
// menu = {
// width: 400,
// height: 600,
// title: "My Menu",
// };

// clone objects using Object.assign()
const newUser = {
  name: "John",
  age: 30,
};

const clonedUser = Object.assign({}, newUser);

console.log(newUser, clonedUser);

// Object.assign -> does shallow copy
// NESTED OBJECTS ARE CLONED USING LODASH DEEPCLONE.

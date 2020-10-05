/*
 * VARIABLE SCOPE, CLOSURE
 */

// lexical environment

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();

// task: Sum with closures
// write a function that works like this: sum(a)(b) = a + b

function sum(a) {
  return function (b) {
    return a + b;
  };
}

// console.log(sum(1)(2));
// console.log(sum(5)(-1));

// task: Filter through function

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray([...array]) {
  return function (x) {
    return array.includes(x);
  };
}

const arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr.filter(inBetween(3, 6)));
// console.log(arr.filter(inArray([1, 3, 5, 10])));

// task: Sort by field
const users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

// use with .sort(byField("name"))
function byField(type) {
  return (a, b) => (a[type] > b[type] ? 1 : -1);
}

// console.log(users.sort(byField("name")));
// console.log(users.sort(byField("age")));

// task: Army of functions
// fix the code:
// function makeArmy() {
// const shooters = [];

// let i = 0;
// while (i < 10) {
// let shooter = function () {
// console.log(i);
// };
// shooters.push(shooter);
// i++;
// }
// return shooters;
// }

// const army = makeArmy();

// // all shooters show 10 instead of their numbers 0, 1, 2, 3...
// army[0](); // 10 from the shooter number 0
// army[1](); // 10 from the shooter number 1
// army[2](); // 10 ...and so on.

function makeArmy() {
  const shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      console.log(j);
    };
    shooters.push(shooter);
    i++;
  }
  return shooters;
}

const army = makeArmy();
army[0]();
army[1]();
army[2]();

// console.log(army);

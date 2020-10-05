"use strict";

// The "name" property

const sayHi = function () {
  console.log("Hi!");
};

// console.log(sayHi.name);

const user = {
  sayHi() {
    //
  },
  sayBye: function () {
    //
  },
};

// console.log(user.sayHi.name);
// console.log(user.sayBye.name);

// ---------------------------------
// the "length" property
function f1(a) {}
function f2(a, b) {}
function more(a, b, ...more) {}

// console.log(f1.length);
// console.log(f2.length);
// console.log(more.length);

// ---------------------------------
// custom properties
function sayHello() {
  console.log("Hello");

  // let's count how many times we run
  sayHello.counter++;
}
sayHello.counter = 0; // initial value

// sayHello();
// sayHello();

// console.log(`Called ${sayHello.counter} times`);

// ---------------------------------
// rewrite counter without closure (with function properties)
function makeCounter() {
  // instead of:
  // let count = 0

  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  return counter;
}

// const counter = makeCounter();
// console.log(counter());
// console.log(counter());

// ---------------------------------
// Named Function Expression (NFE)
// let greetPerson = function greet(who) {
// console.log(`Greetings and salutations, ${who}`);
// };

// greetPerson("RM");

// 1. It allows the function to reference itself internally
// 2. It is not visible outside of the function

let greetPerson = function func(who) {
  if (who) {
    console.log(`Greetings and salutations, ${who}!`);
  } else {
    func("Guest");
  }
};

// greetPerson(); // cool

const welcome = greetPerson;
greetPerson = null;

// welcome(); // works too

// task: Set and decrease for counter
// Modify the code of makeCounter() so that the counter can also decrease and set the number:

// counter() should return the next number (as before).
// counter.set(value) should set the counter to value.
// counter.decrease() should decrease the counter by 1.
// See the sandbox code for the complete usage example.

// P.S. You can use either a closure or the function property to keep the current count. Or write both variants.

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => (count = value);

  counter.decrease = () => --count;

  return counter;
}

const counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter.set(10));
// console.log(counter.decrease());

// ----------------------------------------------
// task: Sum with an arbitrary amount of brackets.
// Write function sum that would work like this:
// sum(1)(2) == 3;
// sum(1)(2)(3) == 5; etc...
// sum(6)(-1)(-2)(-3) == 0; etc...

// does not work in node???
function multiSum(num) {
  let sum = 0;

  function addToSum(num) {
    if (isFinite(num)) sum += +num;
    return addToSum;
  }

  addToSum[Symbol.toPrimitive] = () => sum;
  addToSum.valueOf = () => sum;
  addToSum.toString = () => sum;

  return addToSum(num);
}

// console.log(multiSum(1)(2));

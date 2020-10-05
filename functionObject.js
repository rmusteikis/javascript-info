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

const counter = makeCounter();
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

greetPerson(); // cool

const welcome = greetPerson;
greetPerson = null;

welcome(); // works too

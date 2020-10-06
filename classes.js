// -------------------------
// BASIC CLASS SYNTAX
// -------------------------
// class MyClass {
// prop = value; // property

// constructor(...args) {
// // constructor
// // ...
// }

// method() {} // method

// get something(...args) {} // getter method
// set something(...args) {} // set method

// [Symbol.iterator]() {} // method with computed name (symbol here)
// }

// -------------------------
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

const user = new User("John");
// user.sayHi();

// Class Expression
let User2 = class MyClass {
  sayHi() {
    console.log("hihih");
  }
};

// new User2().sayHi();

// We can even make classes dynamically "on-demand", like this:
function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}
// Create a new class
const User3 = makeClass("hellooo");

// new User3().sayHi();

// ------------------------
// Getters/setters
// ------------------------

class User4 {
  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 3) {
      console.log("name is too short");
      return;
    }
    this._name = value;
  }
}

let user4 = new User4("Kleopas");
// console.log(user4.name);
// user4 = new User4("");

// ------------------------
// Computed names [...]
// ------------------------
class Person {
  ["say" + "Hi"]() {
    console.log("Good morning, sir/madam!");
  }
}

// new Person().sayHi();

// ------------------------
// Class fields
// is a syntax that allows to add any properties.
// ------------------------
class Human {
  // class fields are set on INDIVIDUAL OBJECTS, not Human.prototype
  name = "John";

  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}

// new Human().sayHi();

// MAKING BOUND METHODS WITH CLASS FIELDS
class Button0 {
  constructor(value) {
    this.value = value;
  }

  click() {
    console.log(this.value);
  }
}

let button0 = new Button0("Yo");
// setTimeout(button.click, 1000); // undefined
// the promblem is called "losing this". to solve:
// 1. pass a wrapper-function () => button.click()
// 2. bind the method to object, e.g. in the constructor

class Button {
  constructor(value) {
    this.value = value;
  }

  click = () => {
    console.log(this.value);
  };
}

let button = new Button("What is uuuuup?");
// setTimeout(button.click, 1000);

// ------------------------
// TASKS
// ------------------------
// Rewrite to class
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(this.render, 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();

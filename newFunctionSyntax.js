"use strict";

const sum0 = new Function("a", "b", "return a + b");
// console.log(sum0(1, 2));

const sayHi = new Function("console.log('Hello')");
// sayHi();

// new Function allows to turn any string into a function.
// For example, we can receive a new function from a server and then execute it:
// let str = ... receive code from a server dynamically ...
// let func = new Function(str);
// func();

// ------------------------------
// CLOSURE
// ------------------------------
// new Function cannot access outer variables!
function getFunc() {
  let value = "test";

  let func = new Function("console.log(value)");

  return func;
}

// getFunc()(); // error: value is not defined

/*********************************
 REST PARAMETERS AND SPREAD SYNTAX
 *********************************/

function sum(a, b) {
  return a + b;
}

// excessive arguments will be ignored
console.log(sum(1, 2, 3, 4, 5));

// user ...rest opetaror to fix it
function sumAll(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log(sumAll(1, 2, 3, 4, 5));

// ...rest should be at the end of args.
function showName(firstName, lastName, ...titles) {
  let printTitles = "";

  for (let title of titles) printTitles += title + " ";

  console.log(firstName + " " + lastName + " " + printTitles);
}

showName("Julius", "Caesar", "Naughtius", "Maximus", "Imperator");

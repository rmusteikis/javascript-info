console.log("generators");
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let generator = generateSequence();

for (let value of generator) {
  console.log(value);
}

// let one = generator.next();
// console.log(JSON.stringify(one));

// let two = generator.next();
// console.log(JSON.stringify(two));

// let three = generator.next();
// console.log(JSON.stringify(three));

const sequence = [0, ...generateSequence()];
console.log(sequence);

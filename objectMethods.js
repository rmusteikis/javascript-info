/*
 * OBJECT METHODS, "this"
 */

const user = {
  name: "John",
  age: 30,
  sayHi() {
    console.log(this.name);
  },
};

user.sayHi();

// task: Chaining
const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
  },
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

ladder.up().up().down().showStep();

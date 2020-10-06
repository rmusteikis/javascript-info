// CLASS INHERITANCE

class Animal0 {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed of ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

let animal0 = new Animal0("Shadow");

class Rabbit0 extends Animal0 {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbit0 = new Rabbit0("White Rabbit");

// rabbit0.run(5);
// rabbit0.hide();

// task: Error creating an instance
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name); // replaced from this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit");
console.log(rabbit.name);

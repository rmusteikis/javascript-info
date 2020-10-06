class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
    console.log(`Created a coffee-machine, power: ${power}W`);
  }

  // makes power read only
  get power() {
    return this._power;
  }
}

// create the coffee machine
const coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = 200;
coffeeMachine.power = 25;
console.log(coffeeMachine.power);

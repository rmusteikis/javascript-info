// MIXINS
/***************************************************************************************************************
 * a mixin provides methods that implement a certain behaviot, but we do not use it alone, we use it to add the
 * behavior to other classes
 ***************************************************************************************************************/

// mixin
let sayHiMixin = {
  sayHi() {
    console.log(`Hello, ${this.name}`);
  },
  sayBye() {
    console.log(`Bye, ${this.name}`);
  },
};

// usage
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi();

// MIXINS CAN MAKE USE OF INHERITANCE INSIDE THEMSELVES
const sayMixin = {
  say(phrase) {
    console.log(phrase);
  },
};

const sayHelloMixin = {
  __proto__: sayMixin,

  sayHi() {
    super.say(`Hello ${this.name}`);
  },
  sayBye() {
    super.say(`Bye ${this.name}`);
  },
};

class UserX {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(UserX.prototype, sayHelloMixin);

new UserX("Dude").sayHi();

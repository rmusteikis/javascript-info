function User(name) {
  this.name = name;
  this.isAdmin = false;

  this.sayHi = function () {
    console.log("User is:", this.name);
  };
}

let user = new User("Jack");

console.log(user);

user.sayHi();

class User {
  static staticMethod() {
    console.log(this === User);
  }
}

User.secondStaticMethod = function () {
  console.log(!this === User);
};

User.secondStaticMethod();
User.staticMethod();

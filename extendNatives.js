// add one more method to it (can do more)
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

const arr = new PowerArray(1, 2, 5, 10, 50);
// console.log(arr.isEmpty());

const filteredArr = arr.filter((item) => item >= 10);
// console.log(filteredArr.isEmpty());

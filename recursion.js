function pow(x, n) {
  if (n == 1) {
    return x;
  }
  return x * pow(x, n - 1);
}

// console.log(pow(2, 3));

// task: Sum all numbers till the given one
// I
function iterativeSumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// console.log("iterativeSumTo(1):", iterativeSumTo(1));
// console.log("iterativeSumTo(3):", iterativeSumTo(3));
// console.log("iterativeSumTo(4):", iterativeSumTo(4));
// console.log("iterativeSumTo(100):", iterativeSumTo(100));
// II
function sumTo(n) {
  if (n == 1) {
    return n;
  }
  return n + sumTo(n - 1);
}

// console.log("sumTo(1):", sumTo(1));
// console.log("sumTo(3):", sumTo(3));
// console.log("sumTo(4):", sumTo(4));
// console.log("sumTo(100):", sumTo(100));

// III
function arithmeticSumTo(n) {
  if (n == 1) {
    return n;
  }
  return (n * (1 + n)) / 2;
}

// console.log("arithmeticSumTo(1):", arithmeticSumTo(1));
// console.log("arithmeticSumTo(3):", arithmeticSumTo(3));
// console.log("arithmeticSumTo(4):", arithmeticSumTo(4));
// console.log("arithmeticSumTo(100):", arithmeticSumTo(100));

// task: Calculate factorial
function factorial(n) {
  if (n == 1) return n;
  return n * factorial(n - 1);
}

// console.log(factorial(4));

// task: Fibonacci number
// recursive.
function fib(n) {
  if (n < 3) return 1;
  return fib(n - 1) + fib(n - 2);
}

// console.log("fib(2):", fib(2));
// console.log("fib(3):", fib(3));
// console.log("fib(7):", fib(7));
// DON'T DO THIS:
// console.log("fib(77):", fib(77));

// optimized solution
function optFib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// console.log("optFib(2):", optFib(2));
// console.log("optFib(3):", optFib(3));
// console.log("optFib(7):", optFib(7));
// console.log("optFib(77):", optFib(77));

// task: Output a single-linked list
const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// loop
function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

printList(list);

// recursion
function printListRecursively(list) {
  console.log(list.value);
  if (list.next) {
    printListRecursively(list.next);
  }
}

printListRecursively(list);

// task: Output a single-linked list in the reverse order
// recursion
console.log("Rev list (recursive):");

function printReversedList(list) {
  if (list.next) {
    printReversedList(list.next);
  }
  console.log(list.value);
}

printReversedList(list);

// loop
console.log("Rev list (loop):");

function printRevList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  for (let i = arr.length; i >= 0; i--) {
    console.log(i);
  }
}

printRevList(list);

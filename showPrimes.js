function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue nextPrime;
    }
    console.log(i);
  }
}

// showPrimes(10);

// different approach
function logPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    console.log(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

logPrimes(10);

// task: rewrite the function using ? or ||
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("or is it?");
  }
}

//// using ?
function checkAge2(age) {
  const isAdult = age > 18 ? true : confirm("or is it?");
  return isAdult;
}

function checkAge3(age) {
  return age > 18 || confirm("or is it?");
}

// function expressions

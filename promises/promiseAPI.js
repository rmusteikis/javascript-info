console.log("Promise API");
// tldr;
/**
 * There are 5 static methods of Promise class:
 * 1. Promise.all(promises) - waits for all promises to resolve and returns an array of their results.
 * 2. Promise.allSettled(promises) (recently added method) - waits for all promises to settle and returns their results
 * as an array of objects with:
 * - status: 'fulfilled' or 'rejected'
 * - value (if fulfilled) or reason (if rejected)
 * 3. Promise.race(promises) - waits for a first promise to settle, and its result/error becomes the outcome
 * 4. Promise.resolve(value) - makes a resolved promise with a given value.
 * 5. Promise.reject(error) - makes a rejected promise with a given error.
 * OF THESE 5, Promise.all is probably the most common in practice.
 **/

// Promise.all
const urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig",
];

const requests = urls.map((url) => fetch(url));

Promise.all(requests).then((responses) =>
  responses.forEach((response) =>
    console.log(`${response.url}: ${response.status}`)
  )
);

// Promise.allSettled
const urls2 = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://no-such-url",
];

Promise.allSettled(urls2.map((url) => fetch(url))).then((results) => {
  results.forEach((result, num) => {
    if (result.status === "fulfilled") {
      console.log(`${urls2[num]}: ${result.value.status}`);
    }
    if (result.status === "rejected") {
      console.log(`${urls2[num]}: ${result.reason}`);
    }
  });
});

/// polyfill:
if (!Promise.allSettled) {
  Promise.allSettled = function (promises) {
    return Promise.all(
      promises.map((p) =>
        Promise.resolve(p).then(
          (value) => ({
            status: "fulfilled",
            value,
          }),
          (reason) => ({
            status: "rejected",
            reason,
          })
        )
      )
    );
  };
}

console.log("async/await");
// task: Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:
function loadJsonX(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

// loadJsonX("no-such-user.json").catch(alert); // Error: 404

async function loadJson(url) {
  const response = await fetch(url);

  if (response.status === 200) {
    const json = await response.json();
    return json;
  }

  throw new Error(response.status);
}

// loadJson("no-such-user.json");

// task: rewrite rethrow with async/await
class HttpError0 extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError0";
    this.response = response;
  }
}

function loadJson0(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError0(response);
    }
  });
}

// Ask for a user name until github returns a valid user
function demoGithubUser0() {
  let name = prompt("Enter a name?", "rmust");

  return loadJson(`https://api.github.com/users/${name}`)
    .then((user) => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch((err) => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

// demoGithubUser0();

async function loadJson(url) {
  const response = await fetch(url);

  if (response.status === 200) {
    return await response.json();
  }

  throw new HttpError0(response);
}

async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt("Enter a name:", "rmust");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      if (user.name !== null) {
        break;
      }
    } catch (err) {
      if (err instanceof Error && err.response.status == 404) {
        console.log("No such user, please reenter.");
      } else {
        throw new HttpError0();
      }
    }
  }
  console.log("Full name:", user.name);
  return user;
}

// demoGithubUser();

// task: call async from non-async
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

// f();

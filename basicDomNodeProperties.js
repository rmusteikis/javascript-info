console.log("Basic DOM Node Properties");

for (let li of document.querySelectorAll("li")) {
  let title = li.firstChild.data;
  title = title.trim();

  let count = li.querySelectorAll("li").length;
  console.log(title, ": ", count);

  const p = document.createElement("p");
  p.append(title, ": ", count);

  document.body.appendChild(p);
}

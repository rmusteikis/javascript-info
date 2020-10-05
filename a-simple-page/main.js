// let name = prompt("Enter Your Name:", ""); // SECOND ARGUMENT IS FOR IE...
// alert(name);

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("Canceled");
}

ask("Do yo exist?", showOk(), showCancel());

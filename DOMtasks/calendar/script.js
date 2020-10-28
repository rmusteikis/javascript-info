// Write a function createCalendar(elem, year, month).
// The call should create a calendar for the given year/month and put it inside elem.
// The calendar should be a table, where a week is <tr>, and a day is <td>. The table top should be <th> with weekday names: the first day should be Monday, and so on till Sunday.

const elem = document.getElementById("root");

function createCalendar(elem, year, month) {
  let mon = month - 1;
  let d = new Date(year, mon);

  let table =
    "<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>";

  for (let i = 0; i < getDays(d); i++) {
    console.log(i);
  }
}

function getDays(year, month) {
  // count days in month
  // select starting day:
  // 1st of Month begins on some weekday
}

createCalendar(elem, 2020, 11);

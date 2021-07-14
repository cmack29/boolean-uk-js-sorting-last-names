const surnames = ["mason", "marcora", "rico", "neves", "ivanov"];

// console.log(surnames);

const lastnameresponse = prompt("?");

// console.log(lastnameresponse);

surnames.push(lastnameresponse);

// console.log(surnames);

surnames.sort(function (a, b) {
  return a.localeCompare(b);
});

const uppercased = surnames.map((surnames) => surnames.toUpperCase());

console.log(uppercased);

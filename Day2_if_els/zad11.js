let a = 2,
  b = 4,
  c = 1;
let prvi, drugi, treci;

function sortPrint(a, b, c) {
  if (a > b && a > c) {
    if (b > c) console.log(a + ", " + b + ", " + c);
    else console.log(a + ", " + c + ", " + b);
  } else if (b > a && b > c) {
    if (a > c) console.log(b + ", " + a + ", " + c);
    else console.log(b + ", " + c + ", " + a);
  } else {
    if (b > a) console.log(c + ", " + b + ", " + a);
    else console.log(c + ", " + a + ", " + b);
  }
}

sortPrint(a, b, c);

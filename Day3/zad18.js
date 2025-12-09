function f(a, b) {
  for (let i = 0; i < a.length; i++) {
    console.log(a[i] + b[i]);
  }
}

const a = [1, 4, 66, 3, 6, 7, 8, 22];
const b = [0, 4, 6, 13, 61, 71, 81, 2];
f(a, b);

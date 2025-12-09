function dictMaker(a, b) {
  let c = [];
  for (let i = 0; i < b.length; i++) {
    let key = a[i];
    c[key] = b[i];
  }
  return c;
}

const a = ["a", "b", "c"];
const b = ["aaa", "bbb", "ccc"];
const c = dictMaker(a, b);
console.log(c);

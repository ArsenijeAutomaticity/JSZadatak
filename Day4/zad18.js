let a1 = [4, 1, 5, 1, 6, 2, 7, 1];
let a2 = [4, 3, 2, 1];

function f(a1, a2) {
  let result = [];
  for (el of a2) {
    let num = a1.reduce((total, current) => {
      return el === current ? total + 1 : total;
    }, 0);
    result.push(num);
  }
  return result;
}

console.log(f(a1, a2));

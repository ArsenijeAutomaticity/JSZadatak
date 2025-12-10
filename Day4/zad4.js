function newArray(a, b) {
  let res = [];
  let index = a;
  while (index <= b) {
    if (index % 2 !== 0) res.push(index);
    index++;
  }
  return res;
}

console.log(newArray(3, 9));

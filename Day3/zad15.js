function makeArrayInRange(a, b) {
  let newArray = [];
  for (let i = a; i <= b; i++) {
    newArray.push(i);
  }
  return newArray;
}

let the100 = makeArrayInRange(66, 123);
console.log(the100.toString());

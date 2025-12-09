function isInRange(arrayN, a, b) {
  if (arrayN.length === 0) return "no elements";
  for (num of arrayN) {
    if (num < a || num > b) return false;
  }
  return true;
}

let nums = [2, 6, 7, 33, 55, 66];

console.log(isInRange(nums, 1, 66));

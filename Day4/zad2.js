function sumFunc(arrayN) {
  let sum = 0;
  for (num of arrayN) {
    sum += num;
  }
  return sum;
}

let nums = [22, 44, 3, 6, 3, 12, 1, 33];

console.log(sumFunc(nums));

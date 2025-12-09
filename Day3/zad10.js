let nums = [1, 44, 6, 6, 7];

function sumFunc(nums) {
  let sum = 0;

  for (let num of nums) sum += num;

  return sum;
}

console.log(sumFunc(nums));

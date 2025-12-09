let nums = [1, 44, 6, 6, 7];

function findMid(nums) {
  let sum = 0;
  for (let num of nums) sum += num;

  return sum / nums.length;
}

console.log(findMid(nums));

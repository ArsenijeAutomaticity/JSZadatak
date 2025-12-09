let nums = [1, 44, 6, 6, 7];

function f(nums) {
  let sum = 0;

  for (let num of nums) sum += num;

  console.log(sum);
}

f(nums);

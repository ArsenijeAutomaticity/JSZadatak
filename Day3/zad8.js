let nums = [1, 44, 6, 6, 7];

function reverseLogger(nums) {
  nums.reverse();
  for (let num of nums) console.log(num);
}

reverseLogger(nums);

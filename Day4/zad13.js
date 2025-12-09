const array2d = [[1, 2, 3], [4], [5, 6]];

function printArr2d(arr) {
  let flatArr = arr.flat();
  let sum = flatArr.reduce((total, num) => total + num, 0);

  return sum;
}

console.log(printArr2d(array2d));

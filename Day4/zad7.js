function isInRangeSort(arrayN, a, b) {
  if (arrayN.length === 0) return "no elements";
  arrayN.sort((a, b) => a - b);
  if (arrayN[0] < a || arrayN[arrayN.length - 1] > b) return false;
  return true;
}

let nums = [22, 6, 7, 3, 5, 1];

console.log(isInRangeSort(nums, 1, 66));

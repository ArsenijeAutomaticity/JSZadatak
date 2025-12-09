function f(arr) {
  arr.sort((a, b) => a - b);
  let result = [arr[0], arr[1]];
  let dif = arr[1] - arr[0];

  for (i in arr) {
    if (i === arr.length - 1) break;
    if (arr[i + 1] - arr[i] > dif) {
      result = [arr[i], arr[i + 1]];
      dif = arr[i + 1] - arr[i];
    }
  }
  return result;
}

let array = [11, 33, 6, 7, -2, 3, 5, 1, 9];

console.log(f(array));

function smallestIndex(arrayN) {
  let newAr = [...arrayN];
  if (arrayN.length === 0) return "no elements";
  newAr.sort((a, b) => a - b);
  let smallest = newAr[0];
  return arrayN.indexOf(smallest);
}

function sortArr(arr) {
  let returnArr = [];
  while (arr.length != 0) {
    let index = smallestIndex(arr);
    returnArr.unshift(arr[index]);
    arr.splice(index, 1);
  }
  return returnArr;
}

let array = [11, 33, 6, 7, -2, 3, 5, 1, 9];

let sortedArr = sortArr(array);

console.log(sortedArr);

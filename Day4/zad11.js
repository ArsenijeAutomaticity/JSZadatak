function smallestIndex(arrayN) {
  let newAr = [...arrayN];
  if (arrayN.length === 0) return "no elements";
  newAr.sort((a, b) => a - b);
  let smallest = newAr[0];
  return arrayN.indexOf(smallest);
}

let nums = [33, 6, 7, -2, 3, 5, 1, 9];

console.log(smallestIndex(nums));

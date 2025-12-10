function findTheFirstEavenNumbers(n) {
  let finish = 0;
  let current = n;
  let result = [];

  while (finish < 10) {
    if (current % 2 === 0) {
      result.push(current);
      finish++;
    }
    current++;
  }
  return result;
}

console.log(findTheFirstEavenNumbers(6));

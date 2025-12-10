const array2d = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const commands = ["down", "right", "up", "left", "down", "right"];

function findElement(arr, commands) {
  let row = 0;
  let col = 0;

  col = commands.reduce((total, command) => {
    return "right" === command ? total + 1 : total;
  }, 0);
  col -= commands.reduce((total, command) => {
    return "left" === command ? total + 1 : total;
  }, 0);
  row = commands.reduce((total, command) => {
    return "down" === command ? total + 1 : total;
  }, 0);
  row -= commands.reduce((total, command) => {
    return "up" === command ? total + 1 : total;
  }, 0);

  if (col < 0 || row < 0 || col > arr[0].length - 1 || row > arr.length - 1) {
    return "index outside of bounds";
  }

  return arr[row][col];
}

console.log(findElement(array2d, commands));

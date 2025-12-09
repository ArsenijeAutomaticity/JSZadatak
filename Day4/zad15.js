const array2d = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const commands = [
  "down",
  "right",
  "up",
  "right",
  "down",
  "right",
  "right",
  "right",
];
const commands2 = ["up", "left"];

function findElement(arr, commands) {
  let row = 0;
  let col = 0;

  const maxCol = arr[0].length;
  const maxRow = arr.length;

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

  while (col < 0) {
    col = maxCol + col;
  }
  while (col > maxCol - 1) {
    col = col - maxCol;
  }
  while (row < 0) {
    row = maxRow + row;
  }
  while (row > maxRow - 1) {
    row = row - maxRow;
  }

  return arr[row][col];
}

console.log(findElement(array2d, commands));
console.log(findElement(array2d, commands2));

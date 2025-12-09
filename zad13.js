let a = 5;
let b = 10;
let pro = a * b;
let sum = a + b;

if (pro > sum) {
  console.log("Multiplication of a and b is bigger then its sum");
  document.getElementById("result").innerText =
    "Multiplication of a and b is bigger then its sum";
} else if (sum === pro) {
  console.log("Multiplication of a and b is the same as its sum");
  document.getElementById("result").innerText =
    "Multiplication of a and b is the same as its sum";
} else {
  console.log("Multiplication of a and b is smaller then its sum");
  document.getElementById("result").innerText =
    "Multiplication of a and b is smaller then its sum";
}

const mathFunc = function (a, b, c) {
  return a > 0 ? b + c : b - c;
};

console.log(mathFunc(1, 3, 1));
document.getElementById("result").innerText = mathFunc(1, 3, 1);

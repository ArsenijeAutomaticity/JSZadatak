const celsiusToFahrenheit = function (N) {
  return (N * 9) / 5 + 32;
};

console.log(celsiusToFahrenheit(3));
document.getElementById("result").innerText = celsiusToFahrenheit(3);

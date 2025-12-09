let a = 2,
  b = 6;
let operacija = "saberi";

function executeOperation(a, b, operacija) {
  if (operacija === "saberi") {
    return a + b;
  } else if (operacija === "oduzmi") {
    return a - b;
  } else if (operacija === "podeli") {
    return a / b;
  } else if (operacija === "pomnozi") {
    return a * b;
  } else return "Losa operacija";
}

console.log(executeOperation(a, b, operacija));

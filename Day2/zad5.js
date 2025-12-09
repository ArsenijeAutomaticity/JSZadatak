let a = 2,
  b = 6;
let operacija = "saberi";

function f(a, b, operacija) {
  if (operacija === "saberi") {
    console.log(a + b);
  } else if (operacija === "oduzmi") {
    console.log(a - b);
  } else if (operacija === "podeli") {
    console.log(a / b);
  } else if (operacija === "pomnozi") {
    console.log(a * b);
  } else console.log("Losa operacija");
}

f(a, b, operacija);

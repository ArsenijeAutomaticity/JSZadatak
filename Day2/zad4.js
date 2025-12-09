let monthValue = new Date().getMonth() + 1;

function whatQisIt(month) {
  if (month <= 3) {
    return "prvi godišnji kvartal";
  } else if (month <= 6) {
    return "drugi godišnji kvartal";
  } else if (month <= 9) {
    return "treci godišnji kvartal";
  } else {
    return "cetvrti godišnji kvartal";
  }
}

console.log(whatQisIt(monthValue));

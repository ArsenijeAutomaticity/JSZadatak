let time = new Date();

function isNum(value) {
  let type = typeof value;

  if (type === Number) return "Ovo je broj";
  else return "Ovo nije broj nego je " + type;
}

console.log(isNum(time));

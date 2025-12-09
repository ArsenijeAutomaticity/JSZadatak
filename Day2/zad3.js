let time = new Date();

function f(value) {
  let type = typeof value;

  if (type === Number) console.log("Ovo je broj");
  else console.log("Ovo nije broj nego je " + type);
}

f(time);

let time = new Date();

function shouldITurnOnMyBojler(time) {
  if (time.getHours() > 22 || time.getHours() < 6) return "Palim bojler";
  else return "Ne palim bojler";
}

console.log(shouldITurnOnMyBojler(time));

let broj = 212;

function digitCount(broj) {
  if (broj < 10) console.log("broj je jednocifren");
  else if (broj < 100) console.log("broj je dvocifren");
  else console.log("broj je trocifren");
}

digitCount(broj);

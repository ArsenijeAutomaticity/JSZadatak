let monthValue = new Date().getMonth() + 1;

function f(month){
if(month <= 3){
    console.log("prvi godišnji kvartal");
}
else if(month <= 6){
    console.log("drugi godišnji kvartal");
}
else if(month <= 9){
    console.log("treci godišnji kvartal");
}
else{
    console.log("cetvrti godišnji kvartal");
}
}

f(monthValue);
let month = new Date().getMonth() + 1;

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
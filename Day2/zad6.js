let brojBodova = 67;

function f(brojBodova){
if(brojBodova < 55){
    console.log("ocena 5");
}
else if(brojBodova >= 55 && brojBodova <=64){
    console.log("ocena 6");
}
else if(brojBodova >= 65 && brojBodova <= 74){
    console.log("ocena 7");
}
else if(brojBodova >= 75 && brojBodova <= 84){
    console.log("ocena 8");
}
else if(brojBodova >= 85 && brojBodova <= 94){
    console.log("ocena 9");
}
else{
    console.log("ocena 10");
}
}

f(brojBodova);

const mathFunc = function(a,b,c){
    if(a>0)
        return (b+c);
    else
        return (b-c);
}

console.log(mathFunc(1, 3, 1));
document.getElementById("result").innerText = mathFunc(1, 3, 1);
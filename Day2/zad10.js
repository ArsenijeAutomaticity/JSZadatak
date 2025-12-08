let a = 2, b = 4, c = 1;

function f(a,b,c){
if(a > b && a > c){
    console.log(a);
}
else if(b > a && b > c){
    console.log(b);
}
else {
    console.log(c);
}
}

f(a,b,c);

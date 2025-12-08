function f(array, num){
if(array.includes(num))
    console.log("Broj se nalazi u nizu");
else
    console.log("Broj se ne nalazi u nizu");
}

const array = [1,2,3,4,5,6,7,8];
const num = 3;
f(array, num);
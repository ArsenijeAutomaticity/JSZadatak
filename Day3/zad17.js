function f(array){
    array.sort(function(a, b){return a - b});
    return array[array.length-1];
}

const array = [1,4,66,3,6,7,8,22];
const num = f(array);
console.log(num);
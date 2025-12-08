let nums = [];

function f(){
let newArray = [];
for(let i = 1; i<=100; i++)
    newArray.push(i);

 return newArray
}

function printArray(array){
for(let ar of array)
    console.log(ar);
}

nums = f();


printArray(nums);

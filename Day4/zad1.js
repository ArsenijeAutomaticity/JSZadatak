function smallest(arrayN){
    arrayN.sort(function(a, b){return a - b});
    return arrayN[0];
}

let nums = [22, 44, 3, 6, 3, 12, 1, 33];

console.log(smallest(nums));
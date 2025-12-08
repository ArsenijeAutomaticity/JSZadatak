function multiAll(arrayN){
    if(arrayN.length === 0)
        return 'no elements';
    let res = 1;
    for(num of arrayN){
        res *= num;
    }
    return res;
}

let nums = [22, 44, 3, 6, 3, 12, 1, 33];

console.log(multiAll(nums));
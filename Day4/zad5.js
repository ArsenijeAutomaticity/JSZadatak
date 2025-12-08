function middleNum(arrayN){
    if(arrayN.length === 0)
        return 'no elements';
    let sum = 0;
    for(num of arrayN){
        sum += num;
    }
    return sum/arrayN.length;
}

let nums = [22, 44, 3, 6, 3, 12, 1, 33];

console.log(middleNum(nums));
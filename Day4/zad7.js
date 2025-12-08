function isInRange(arrayN, a, b){
    if(arrayN.length === 0)
        return 'no elements';
    for(num of arrayN){
        if(num < a || num > b)
            return false;
    }
    return true;
}

let nums = [22, 6, 7, 3, 5, 1];

console.log(isInRange(nums, 1, 66));
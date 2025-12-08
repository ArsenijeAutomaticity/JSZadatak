function f(arrayN, a){
    if(arrayN.length === 0)
        return 'no elements';
    let res = arrayN.filter((x) => x===a)
    return res.length;
}

let nums = [22, 6, 7, 1, 3, 5, 1];

console.log(f(nums, 1));
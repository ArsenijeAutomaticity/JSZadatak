let months = ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'];
let months2 = ['januar', 'februar', 'mart', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'];

function f(ar1, ar2){
if(ar1.length > ar2.length){
    for(let month of ar1){
        console.log(month);
    }
}
else {
    for(let month of ar2){
    console.log(month);
    }
}
}

f(months, months2);
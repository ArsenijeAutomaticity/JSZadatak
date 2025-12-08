var capitals = [
{ country: 'Italy', city: 'Rome' },
{ country: 'Netherlands', city: 'Amsterdam' },
{ country: 'Belgium', city: 'Brussels' },
{ country: 'Denmark', city: 'Copenhagen' },
{ country: 'Finland', city: 'Helsinki' },
];

function Capitals(capitals){
    for(let capital of capitals){
        console.log(`The capital of ${capital.country} is ${capital.city}`);
    }
}

Capitals(capitals);
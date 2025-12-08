function f(){
let newArrayParni = [];
let newArrayNeparni = [];

for(let i = 1; i<=100; i+=2){
    newArrayNeparni.push(i);
    newArrayParni.push(i+1);

}
 return [newArrayParni, newArrayNeparni];
}


const [parni, neparni] = f();
console.log("parni: " + parni.toString());
console.log("neparni: " + neparni.toString());

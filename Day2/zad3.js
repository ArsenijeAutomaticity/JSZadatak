let time = new Date();

let type = typeof(time);

if(type === Number)
        console.log("Ovo je broj");
else
        console.log("Ovo nije broj nego je " + type);
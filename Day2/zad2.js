let time = new Date();

function f(time){
if(time.getHours() > 22 || time.getHours() < 6)
        console.log("Palim bojler");
else
        console.log("Ne palim bojler");
}

f(time);
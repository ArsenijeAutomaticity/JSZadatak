const fahrenheitToCelsius = function(N){
    return ((N - 32) * 5 / 9);
}

console.log(fahrenheitToCelsius(37.4));
document.getElementById("result").innerText = fahrenheitToCelsius(37.4);
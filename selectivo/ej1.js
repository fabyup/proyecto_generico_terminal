const leer = require("prompt-sync")();

console.log("ingresa un numero");

let numeroIngresado = Number = leer();

if (numeroIngresado >= 1) {


    console.log("numero positivo");
} else if (numeroIngresado == 0) {
    console.log("neutral");
}
else {
    console.log("es negativo");
}
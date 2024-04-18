const leer = require("prompt-sync")();
 
console.log("ingresa un numero");
let numeroIngresado= Number (leer());

console.log("la sumatoria actual es.." ,numeroIngresado);

let numeroIngresado1= Number (leer());

console.log("la sumatoria actual es..",numeroIngresado1 + numeroIngresado);

let numeroIngresado2 = Number (leer());

console.log("la sumatoria actual es ..",numeroIngresado2 + numeroIngresado + numeroIngresado1);


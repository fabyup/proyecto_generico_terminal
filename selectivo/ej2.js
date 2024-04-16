const leer = require("prompt-sync")();

const PALABRA_PARA_ADIVINAR = "frutas";

console.log("adivina la palabra");
let palabraIngresada = leer();
if (palabraIngresada == PALABRA_PARA_ADIVINAR) {
    console.log("adivinaste");
} else {
    console.log("no adivinaste");
}
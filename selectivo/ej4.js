const leer = require("prompt-sync")();

console.log("ingrese dos numeros los cuales seran nmultiplicados y/o divididos segun su eleccion");
let nummeroIngresaso1 =  (leer());
let nummeroIngresaso2 =   (leer());
 console.log("Quiere multiplicar y/o dividir?");

  let opcionIngresada=( leer());

  console.log("el resultado es", nummeroIngresaso1 * nummeroIngresaso2);

 
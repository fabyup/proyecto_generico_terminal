const leer = require("prompt-sync")();

const NUMERO_SECRETO = (7);

let numeroAdivinar= leer();

if(numeroAdivinar=0 , numeroAdivinar<3 ,NUMERO_SECRETO ==numeroAdivinar){
    console.log("adivinaste");
}else{"Perdiste"}


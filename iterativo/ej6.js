const leer = require("prompt-sync")();



const NUMERO_SECRETO = 7

for(let contador= 0 ; contador<10 ; contador++){
    let numerosIngresados = Number (leer())
     if(numerosIngresados==NUMERO_SECRETO) {
        contador=10;
        console.log("ganaste");
     }else{
        console.log("perdiste");
     }}

    




    
        


    







     
 
   


   

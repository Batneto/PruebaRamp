
//!  EJERCICIO 2 Resuelto 


//! Ejercicio sin Plus

var frase=prompt("Introduzca una frase ")
var cont=0



for( let i=0;i<frase.length;i++){

    if(frase[i]==" "){
        cont++
    }
}
console.log(cont);








// //! Ejercicio 2 con plus    
//             //todo Un algoritmo tipo el de la burbuja agrupando los espacios al final 
//             //todo contando los elementos movidos y eliminando el ultimo elemento de la array ese numero de veces 
//             //todo y despues contar como el primer ejercicio en la ultima pasada

// var frase=prompt("Introduzca una frase ")
// var cont=0
// var unHueco=false

// console.log(frase);

// console.log(frase.length);


// for( let i=0;i<frase.length;i++){           
    
//     if(frase[i]==" " && frase [i+1]==" "){
//         while(!unHueco){
//             frase.splice(i)                  //todo quiero eliminar los huecos hasta que solo quede uno para que funcione como antes              
                                            
//         }
//     }
    
// }
// console.log(cont);

//!  EJERCICIO 2 Resuelto 


//! Ejercicio sin Plus
            //todo no funciona para el caso particular de empezar con un espacio 

var frase=prompt("Introduzca una frase ")
var cont=0
var fraseArray=[]
var huecoInicio=fraseArray[0]
var huecoFinal=frase[fraseArray.length-1]

for( let i=0;i<frase.length;i++){
    fraseArray.push(frase[i])
}


// console.log(fraseArray);

for( let i=0;i<fraseArray.length;i++){

    if(huecoInicio==" "){
        frase.shift();
    }
    if(huecoFinal==" "){
        frase.pop();
    }

    if(fraseArray[i]==" "){
        cont++
    }
}
console.log("Su frase contine "+ cont +" palabras");








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

//!  EJERCICIO 1 Resuelto 

var opcion=parseInt( prompt("Quiere la opcion 1 o la opcion 2 (introduzca el numero que quiere)"))




if(opcion==1){
    var num1=parseInt(prompt("Introduzca el primer numero: "))
    var num2=parseInt(prompt("Introduzca el segundo numero: "))

        if( num1%2!=0 && num1%25 == 0 ){
            console.log(" El numero 1 es impar y multiplo de 25");
        }
        if( num2%2 != 0 && num2%25 == 0){
            console.log( " El numero 2 es impar y multiplo de 25");
        }
}

if(opcion==2){
       var palabra=prompt("Introduzca una palabra: ")
        var primeraLetra=palabra[0]
        var ultimaLetra=palabra[palabra.length-1]

                if(primeraLetra=="s"){
                    console.log("Tu palabra empieza por s");
                }
                if(primeraLetra=="S"){
                    console.log("Tu palabra empieza por S"); 
                }
                if (ultimaLetra=="s") {
                    console.log("Tu palabra termina por s");
                }
                if (ultimaLetra=="S") {
                    console.log("Tu palabra termina por S"); 
                }
            }







//! Campo de Pruebas



// while( !(opcion==1) || !(opcion==2) ){     //todo No se por que se hace el bucle infinito cuando opcion == 1  es true deberia cambiarse a false y salir del bucle no se que pasa
//     opcion=prompt("Quiere la opcion 1 o la opcion 2 (introduzca el numero que quiere)")
// }




            //todo idea switch opcion 2 no se por que no funciona

        //    switch (primeraLetra,ultimaLetra) { 

        //         case (primeraLetra=="s"):
        //             console.log("Tu palabra empieza por s"); 
        //             break;      
        //         case (primeraLetra=="S"):
        //             console.log("Tu palabra empieza por S");  
        //             break;   
        //         case (ultimaLetra =="s"):
        //             console.log("Tu palabra termina por s");  
        //             break;  
        //         case (ultimaLetra =="S"):
        //             console.log("Tu palabra termina por S");  
        //             break;
    


// if(opcion==2){
//     var palabra=prompt("Introduzca una palabra: ")  //todo Primer planteamiento opcion 2

//             if(palabra[0]=="s"|| palabra[0]=="S"){
//                 console.log("Tu palabra empieza por s");
//             } if(palabra[palabra.length-1]=="s"|| palabra[palabra.length-1]=="S"){
//                 console.log("Tu palabra termina en s");
//             }
//             console.log("Tu palabra ni empieza ni termina en s");

//         } 


    
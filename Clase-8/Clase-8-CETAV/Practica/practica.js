/*1. Definir una variable interacciones con el numero 100
2.Escribir un loop que itere 100 veces (usando la variable iteraciones) 
3.En el loop usando la variable iteraciones:
 
- Si el número es múltiplo de 3, loggeamos:
 EL número x es múltiplo de 3
 
- Si el número es múltiplo de 5, loggeamos:
 El número x es múltiplo de 5
 
- Si el número es múltiplo de ambos 3 y 5, loggeamos:
 El número x es múltiplo de 3 y 5
 
(x es la variable iteraciones)
 - Le restamos 1 a variable iteraciones*/

 let iteraciones = 100;

 /*const residuoDe5 = iteraciones % 5 === 0;*/
 /*const residuoDe3 = iteraciones % 3 === 0;*/

while(iteraciones > 0){
    if (iteraciones % 3 == 0 && iteraciones % 5 === 0){
        console.log("El numero", iteraciones, "es multiplo de 3 y 5")
    } else if(iteraciones % 3 === 0){
        console.log("El numero", iteraciones, "es multiplo de 3")  
    } else if(iteraciones % 5 === 0){
        console.log("El numero", iteraciones, "es multiplo de 5")
    } else{
        console.log ("El numero", iteraciones, "no es multiplo de ninguno")}
       
    iteraciones = iteraciones - 1;
    }


//El input
/*const number = 3;*/

//El output
//Logge la tabla de multiplicar para el numero "number"

const number = 3;
let tabla = 1;

while (tabla <= 10){
    console.log(number + "x" + tabla, "=" + (number*tabla));
    tabla = tabla + 1;
}
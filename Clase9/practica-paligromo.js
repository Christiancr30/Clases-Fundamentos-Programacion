const word = "reconocer";
let wordreverse = "";

for (let letra = word.length -1; letra >= 0; letra--){ //length esta propiedad devuelve el numero de caracteres de una cadena de texto
    wordreverse = wordreverse + word.charAt(letra); //charAT devuelve el caracter que se encuentra en un indice (posicion) especifico dentro de una cadena
}   //el += lo guarda en una variable

if (word === wordreverse){
    console.log (`La palabra ${word} si es palindromo`);
}   else {
    console.log (`La palabra ${word} no es palindromo`);
    }


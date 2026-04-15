let number = 364;
let sum = 0;

while (number > 0) {
  sum = sum + (number % 10); // toma el último dígito
  number = Math.floor(number / 10); // elimina el último dígito
}

console.log("La suma de los dígitos es", sum);


const word = "zapato";

let totalAmount = 0;
let uniqueVowels = "";

let i = 0;

while (i < word.length) {
    let letra = word[i];

    if (
        letra === "a" ||
        letra === "e" ||
        letra === "i" ||
        letra === "o" ||
        letra === "u"
    ) {
        totalAmount++;

    if (!uniqueVowels.includes(letra)) {
    uniqueVowels = uniqueVowels + letra;}
    }

    i++;
}

let uniqueAmount = uniqueVowels.length;

console.log("La palabra", word, "tiene", totalAmount, "vocales totales y", uniqueAmount, "vocales únicas"
);
const number1 = 15;
const number2 = 32;
const number3 = 59;

console.log("El cálculo de rangos para el número", number1, "es:", number1 >= 10 && number1 <= 20 || number1 >= 40 && number1 <= 60);

console.log("El cálculo de rangos para el número", number2, "es:", number2 >= 10 && number2 <= 20 || number2 >= 40 && number2 <= 60);

console.log("El cálculo de rangos para el número", number3, "es:", number3 >= 10 && number3 <= 20 || number3 >= 40 && number3 <= 60);



//Bonus
const dogAge1 = 8;
const dogAge2 = 2;
//si la respuesta es true Se usa esta parte: dogAge1 * 10
//si la respuesta es false Se usa esta parte: 20 + (dogAge1 - 2) * 4

const humanAge1 = dogAge1 <= 2 ? dogAge1 * 10 : 20 + (dogAge1 - 2) * 4;
//20 + (8 - 2) * 4
//20 + 6 * 4
//20 + 24
//44
const humanAge2 = dogAge2 <= 2 ? dogAge2 * 10 : 20 + (dogAge2 - 2) * 4;

console.log("El perrito de", dogAge1, "años tendría", humanAge1, "años si fuera humano");
console.log("El perrito de", dogAge2, "años tendría", humanAge2, "años si fuera humano");
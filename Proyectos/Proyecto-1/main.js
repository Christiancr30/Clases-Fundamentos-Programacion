/* 
Escriba un programa que calcule el precio del tiquete de entrada a un museo
El precio de los tiquetes sigues las siguientes reglas:
    1. El precio base sin descuento es de 5000
    2. Niños menores de 12 años entran gratis
    3. Personas mayores de 65 años tienen un 40% de descuento
    4. Personas con un id de estudiantes tienen un 25% de descuento, sin importar la edad
    5. Personas con cupón de descuento, se les puede aplicar el descuento descrito en el cupón.
    6. Solo un descuento se aplica a cada tiquete, el más alto, por lo tanto, para una persona 
    con id de estudiante y con un cupón de 30% de descuento, solo aplicará uno de los dos descuentos.
*/

const age = 30;
const hasCoupon = true;
const couponDiscount = 10;
const hasStudentId = false;

const basePrice = 5000;
let price = basePrice;

// 1. Si es menor de 12, entra gratis
if (age <= 12) {
    price = 0;
} else {
    let discount = 0;
    if (age >= 65) {
        discount = 40;
    } 
    if (hasStudentId) {
        if (25 > discount) {
        discount = 25;
    }
    } if (hasCoupon) {
        if (couponDiscount > discount) {
        discount = couponDiscount;
    }
    }
    price = basePrice - (basePrice * discount / 100);
}

console.log('El precio de su tiquete es: ', price);
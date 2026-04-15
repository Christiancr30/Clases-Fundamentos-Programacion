const list = [32, 87, 999, 1777232, 4, 1, 54, 111, 10, 77];

const pares = [];
const impares = [];

for(let i = 0; i < list.length; i++){
    if (list[i] % 2 === 0){
        pares.push(list[i]);
    } else {
        impares.push(list[i]);
    }
}

console.log("Pares:", pares);
console.log("Impares:", impares);
const lunes = "Lunes";
const martes = "Martes";
const miercoles = "Miercoles";
const jueves = "Jueves";
const viernes = "Viernes";
const sabado = "Sabado";
const domingo = "Domingo";

const hoy = "Miercoles";

console.log("Hoy es lunes? ", hoy == lunes);
console.log("Hoy es miercoles? ", hoy == miercoles);
console.log("Hoy es martes o miercoles? ", hoy == martes || hoy == miercoles);
console.log("Hoy es miercoles y jueves? ", hoy == miercoles && hoy == jueves);
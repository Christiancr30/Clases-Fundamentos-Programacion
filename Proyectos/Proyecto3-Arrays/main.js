const list = ['Ana', 88, 'Carlos', 76, 'Karina', 63];

let sumaTotal = 0;
let totalEstudiantes = 0;
let aprobados = [];
let reprobados = [];
let listaLetras = [];

// Se recorre la lista de 2 en 2 (nombre y luego nota)
for (let i = 0; i < list.length; i += 2) {
    let nombre = list[i];
    let nota = list[i + 1];
    
    // Sumar para el promedio
    sumaTotal = sumaTotal + nota;
    totalEstudiantes++;

    // Clasificar aprobados y reprobados
    if (nota >= 70) {
        aprobados.push(nombre);
    } else {
        reprobados.push(nombre);
    }

    // Determinar la letra
    let letra = "";
    if (nota >= 95) {
        letra = "A";
    } else if (nota >= 90) {
        letra = "B";
    } else if (nota >= 80) {
        letra = "C";
    } else if (nota >= 70) {
        letra = "D";
    } else {
        letra = "F";
    }

    // Nuevas listas
    listaLetras.push(nombre);
    listaLetras.push(letra);
}

let promedio = (sumaTotal / totalEstudiantes).toFixed(2);

// --- IMPRESIÓN DE RESULTADOS ---
console.log("-> El promedio de calificaciones es: " + promedio);
console.log("-> Los estudiantes que aprobaron son: " + aprobados);
console.log("-> Los estudiantes que no aprobaron son: " + reprobados);
console.log("-> La lista transformada es:", listaLetras);

// Imprimir la letra de cada uno
for (let i = 0; i < listaLetras.length; i += 2) {
    console.log("-> La calificación de " + listaLetras[i] + " es " + listaLetras[i+1]);
}
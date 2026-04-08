const cantidadDeClientes = 25;
let cliente = 1;
let totalSegundos = 0;

while (cliente <= cantidadDeClientes) {

    let segundosCliente = 0;

    if (cliente % 2 === 0) {
        segundosCliente = (cliente * 60) + 45;
    } else {
        segundosCliente = 20;
    }
    if (cliente % 10 === 0) {
        segundosCliente += (18 * 60) + 11;
    } else if (cliente % 5 === 0) {
        segundosCliente += (37 * 60);
    }
    //Sumamos al total
    totalSegundos += segundosCliente;
    cliente++;
}

//Convertir a horas, minutos y segundos
let horas = Math.floor(totalSegundos / 3600);
let minutos = Math.floor((totalSegundos % 3600) / 60);
let segundos = totalSegundos % 60;

//Mostrar resultado
if (horas > 0) {
    console.log("A el cajero le va a tomar", horas, "horas,", minutos, "minutos y", segundos, "segundos");
} else if (minutos > 0) {
    console.log("A el cajero le va a tomar", minutos, "minutos y", segundos, "segundos");
} else {
    console.log("A el cajero le va a tomar", segundos, "segundos");
}
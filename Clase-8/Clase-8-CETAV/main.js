let index = 0;
while (index < 10) {
    console.log("EXECUTE");
    index = 15;
}
console.log("Index is", index);


//Loop//
/*let cantidadDeEstudianteQueFaltanPorEnviarCorreo = 20;

while (cantidadDeEstudianteQueFaltanPorEnviarCorreo > 0) {
    console.log("Enviar correo a estudiantes", cantidadDeEstudianteQueFaltanPorEnviarCorreo);
    cantidadDeEstudianteQueFaltanPorEnviarCorreo = cantidadDeEstudianteQueFaltanPorEnviarCorreo - 1;
} */

let cantidadQueFalta = 20;
while (cantidadQueFalta > 0) {
    if (cantidadQueFalta % 2 === 0){
        console.log("SORPRESA para estudiante", cantidadQueFalta)
    } else{
        console.log("Enviar corrreo regular a estudiante", cantidadQueFalta)
    }
    cantidadQueFalta = cantidadQueFalta - 1 ;

}
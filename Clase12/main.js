//Array es una lista ordenada de datos.
//Imaginalo como una caja compartimentada donde puedes guardar varios elementos bajo un solo nombre de variable, en lugar de crear una variable para cada cosa.

//Definir Array
const list = ["manzana", "pera", "uva", "piña"];
const randomList = ["pera", 32, false, ["uvas"]];
let empty = []; 

// Acceder a los elementos de un Array
const fruit = list[3];

//agregar elementos a la lista
list.push("naranja")
list.push("tomate")

//eliminar elementos 
list.splice(2, 1);

//Loops
//
for(let i = 0; i < list.length; i++ ) {  //i significa index y se le suele llamar a la posicion 0  
    console.log(list[1]);
}
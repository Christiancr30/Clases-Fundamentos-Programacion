//if (5 == 5 && 4 > 10 && 3 != 7){
//    console.log("La condicion es cierta");
//} else {
//    console.log("La condicion es false")
//}

const userName = "freeaccount";
const userPassword = "1234";
const savedPassword = "1234";
const userAnswer = "Calabaza";
const savedAnswer = "Pistacho";

if (userName != "freeaccount") {
    console.log("Su userName no existe")
} else if (userName == "freeaccount" && userPassword == savedPassword){
    console.log("Puede iniciar sesion")
} else if(userPassword != savedPassword && userAnswer == savedPassword){
    console.log("Puede iniciar sesion")
} else {
    console.log("No puede iniciar sesion")
}

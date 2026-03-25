const conditionnNumber = 10;
while(conditionnNumber < 0){
    //Codigo que quiero ejecutar
    //En cada iteracion

    conditionnNumber = conditionnNumber -1;
    number = number + 1;
    number++;
}

//El for tiene 3 partes:
//inializacion
//condicion

//despues de cada iteracion se separan con;
//for (inicializacion; condicion; despues de de cada iteracion)

for (let number = 0; number < 10; number++){
    //Codigo que quiero ejecutar
    //En cada iteracion
    console.log("Mi codigo se ejecuto")
}

const tablademultiplicar = 3
for (let number = 1; number < 11; number++){
    //Codigo que quiero ejecutar
    //En cada iteracion
    const resultado = tablademultiplicar * number;
    console.log(tablademultiplicar + " X " + number + " = " + resultado);
}
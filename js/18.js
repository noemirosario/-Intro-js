// declaracion de funcion
function sumar(numero1, numero2){ // numero1, numero2 son parametros
    //cuerpo de funcion
    console.log(numero1 + numero2);
}
sumar(10, 87); // arguments o valores reales
sumar(2, 2); // arguments o valores reales
sumar(8, 67); // arguments o valores reales

//expresion de la funcion
const sumar2 = function(numero1 = 0, numero2 = 0){
    console.log(numero1 + numero2);
}
sumar2(1);

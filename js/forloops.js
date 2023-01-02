// For Loop
// for (let i = 0; i <= 200
//     ; i++){
//     if (i % 2 === 0){
//         console.log(`El numero ${i} es par`);
//     } else {
//         console.log(`El numero ${i} no es par`);    }
// }

const carrito = [
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'TV', precio: 900 },
    { nombre: 'Ipad', precio: 22 },
    { nombre: 'mouse', precio: 2 },
    { nombre: 'audifonos', precio: 500 },
    { nombre: 'teclado', precio: 500 },
    { nombre: 'alexa', precio: 900 },
];

for (let i = 0; i < carrito.length; i++ ){
    console.log(carrito[i].nombre);
};



// While Loop TIENE Q REVISAR Q LA CONDICION SE CUMPLA PARA EJECUTARSE

// let i = 1;

// while (i<100){ //condicion

//     if ( i % 2 === 0){
//         console.log(`El numero ${i} es par`);
//     } else {
//         console.log(`El numero ${i} es IMPAR`);
//     }
    
//     i++ //incremento
// }


// Do While Loop SE EJECUTA AL MENOS UNA VEZ AUNQ LA CONDICION NO SE CUMPLA

let i = 20;

do {
    console.log(i)

    i++
} while (i<10){

};


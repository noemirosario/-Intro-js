//ARRAY METHODS
const meses = new Array('enero', 'feb', 'mar', 'abril', 'mayo', 'junio');


const carrito = [
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'TV', precio: 900 },
    { nombre: 'Ipad', precio: 22 },
    { nombre: 'mouse', precio: 2 },
    { nombre: 'audifonos', precio: 500 },
    { nombre: 'teclado', precio: 500 },
    { nombre: 'alexa', precio: 900 },
];

// forEach

meses.forEach(function(mes){
    if (mes == 'junio'){
        console.log('Junio existe')
    }
});


// INCLUDES
let resultado = meses.includes('Domingo')


// some - para array de objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'mouse'
})

resultado = carrito.some(producto => producto.nombre === 'mouse')


//reduce() para s
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0)


resultado = carrito.reduce((total, producto) => total + producto.precio, 0);


//filter
// resultado = carrito.filter(function(producto){
//     return producto.precio < 400
// })

resultado = carrito.filter(producto => producto.precio < 400)

console.log(resultado);

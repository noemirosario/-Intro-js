const carrito = [
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'TV', precio: 900 },
    { nombre: 'Ipad', precio: 22 },
    { nombre: 'mouse', precio: 2 },
    { nombre: 'audifonos', precio: 500 },
    { nombre: 'teclado', precio: 500 },
    { nombre: 'alexa', precio: 900 },
];

// forEach metodo exclusivo de arreglos

const arreglo = carrito.forEach( producto => producto.nombre);

//map
const arreglo1 = carrito.map( producto => `${producto.nombre}` );

console.log(arreglo);
console.log(arreglo1);


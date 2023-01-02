// arrow fuction

const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(1,5);

const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`)
};

aprendiendo('java')













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

meses.forEach(mes =>{
    if (mes == 'junio'){
        console.log('Junio existe')
    }
});



// some - para array de objetos
resultado = carrito.some(producto => producto.nombre === 'mouse');

//reduce() para s
resultado = carrito.reduce((total, producto) => total + producto.precio
, 0)


resultado = carrito.reduce((total, producto) => total + producto.precio, 0);


//filter
resultado = carrito.filter((producto) => producto.precio < 400)


console.log(resultado);

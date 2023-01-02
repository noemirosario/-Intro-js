// poo

// object literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// object constructor

function Producto (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    // this.disponibilidad = disponibilidad;
    // if (this.disponibilidad < 1){
    //     this.disponibilidad = 'Agotado'
    // } else if (this.disponibilidad < 5){
    //     this.disponibilidad = `Solo quedan ${this.disponibilidad} en stock!`
    // } else {
    //     this.disponibilidad = 'Disponible'
    // }

}

Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`;
};

const producto2 = new Producto('Monitor', 600);
const producto3 = new Producto('Cable', 600);
const producto4 = new Producto('USB', 600);

// console.log(producto2)


function formatearProducto (producto){
    return `El producto ${producto.nombre} tiene un precio de $ ${producto.precio}`;
}

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

// prototype permite crear funciones que solo se utilizan en un objeto en especifico

function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
};

const cliente = new Cliente('Noemi', 'Rosario')


Cliente.prototype.formatearCliente = function (){
    return `El cliente ${this.nombre} ${this.apellido}`;
}

console.log(cliente.formatearCliente())


class Producto
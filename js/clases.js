class Producto {
    constructor (nombre, precio){
        this.nombre = nombre,
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`;
    }

    precioProducto() {
        return `El precio de ${this.nombre} es de $${this.precio}`;
    };

    obtenerPrecio (){
        console.log(this.precio)
    }
}

const producto2 = new Producto('Monitor', 600);
const producto3 = new Producto('Cable', 600);
const producto4 = new Producto('USB', 600);

console.log(producto2.precioProducto())
console.log(producto3.formatearProducto())
console.log(producto4.precioProducto())
// const producto = new Producto();


class Cliente {
    constructor (nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }

    fullname (){
        return `${this.nombre} ${this.apellido}`
    }

    name (){
        return `Su nombre es ${this.nombre} ${this.apellido}`
    }
}

const cliente = new Cliente('Noemi', 'Rosario')

console.log(cliente.name())

// HERENCIA 
class Libro extends Producto {
    constructor (nombre, precio, isbn){
        super(nombre, precio)
        this.isbn = isbn
    }
    
    formatearProducto() {
        return `${super.formatearProducto()} y su isbn es ${this.isbn}`;
    }

    obtenerPrecio(){
        super.obtenerPrecio() +
        console.log('si hay en existencia')
    }
}

const libro = new Libro('Java', 456, '2356266')

console.log(libro.formatearProducto())
console.log(libro.obtenerPrecio())


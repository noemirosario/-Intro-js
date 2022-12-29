// OBEJTOS

const productos = {
    nombreproducto: 'Monitor HD', //propiedad o llave del obejto
    precio: 400,
    disponible:true
};

// forma anterior 
// const precioProducto = productos.precio;
// console.log(precioProducto)

// destruturing
const {precio} = productos;
console.log(precio);

const {nombreproducto} = productos;
console.log(nombreproducto);

const {disponible} = productos;
console.log(disponible);
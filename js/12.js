"use strict"
// OBEJTOS

const producto = {
    nombreproducto: 'Monitor HD', //propiedad o llave del obejto
    precio: 400,
    disponible:true
};

//para no agregar mas propiedades ni eliminar
Object.freeze(producto)

//para no agregar mas propiedades ni eliminar pero si MODIFICAR
Object.seal(producto)

producto.precio = 20;
// console.log(Object.isFrozen(producto))
console.log(producto);



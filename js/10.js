// OBEJTOS

const productos = {
    nombreproducto: 'Monitor HD', //propiedad o llave del obejto
    precio: 400,
    disponible:true
};



// console.log(productos)

// acceder a las propiedades
// console.log(productos.nombreproducto);
// console.log(productos.precio);
// console.log(productos.disponible);

// console.log(productos["precio"]);
// console.log(productos["disponible"]);
// console.log(productos["nombreproducto"]);

// agg nuevas propiedades
productos.imagen = 'imagen-png';

// borrar propiedades
delete productos.imagen ;

console.log(productos)
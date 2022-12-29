const producto = {
    nombreproducto: 'Monitor HD', //propiedad o llave del obejto
    precio: 400,
    disponible:true
};

const medida = {
    peso: '1 kg',
    medida: '1m'
}

const nuevoProducto = {...producto, ...medida };
console.log(nuevoProducto)
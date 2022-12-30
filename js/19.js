// function sumar (n1, n2){
//     return n1+n2;
// }

// const resultado = sumar(2, 3);

// console.log(resultado)

let total = 0;

function agregarCarrito(precio){
    return total += precio;
};

function calcularImpuesto(total){
    return 1.16 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(500);

console.log(total);

const totalAPagar = calcularImpuesto(total);

const iva = totalAPagar - total;

console.log(`Total: $${total}.00`);
console.log(`IVA: $${iva}.00`);
console.log(`Total A Pagar con IVA: $${totalAPagar}.00`);

const metodoPago = 'bitcoin'

switch (metodoPago){
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;

    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;

    case 'tranferencia':
        console.log('Pagaste con efectivo');
        break;

    default:
        console.log('no has pagado');
        break;

}
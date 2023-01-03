// async / await

function descaraNuevosClientes (){
    return new Promise (resolve => {
        console.log('descargando clientes...')

        setTimeout( () => {
            resolve('Los clientes fueron descargadps');
        }, 1000);
        
    })
};

function descargarUltimosPedidos (){
    return new Promise (resolve => {
        console.log('descargando pedidos...')

        setTimeout( () => {
            resolve('Los pedidos fueron descargadps');
        }, 4000);
        
    })
};

async function app(){
    try {
        // const clientes = await descaraNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // // mostrarClientes(resultado)
        // console.log(clientes);
        // console.log(pedidos);
        const resultado = await Promise.all([descaraNuevosClientes(), descargarUltimosPedidos()])
        console.log(resultado[0])
        console.log(resultado[1])

    } catch (error) {
        console.log(error)
    }
}

app()

// console.log('este codigo no se bloquea')

// setInterval(function (){
//     console.log('set')
// },5000)
// this

const reservacion = {
    nombre: 'Noemi',
    apellido: 'Rosari0',
    total: 200,
    pagado: false,
    informacion: function(){
        console.log(`Cliente: ${this.nombre} cantidad a pagar ${this.total}`)
    }
};

reservacion.informacion();

// MANERA INCORRECTA
const reservacion2 = {
    nombre: 'Noemi',
    apellido: 'Rosari0',
    total: 200,
    pagado: false,
    informacion: () => {
        console.log(`Cliente: ${this.nombre} cantidad a pagar ${this.total}`)
    }
};

reservacion2.informacion();

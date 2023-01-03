const usuarioAutenticado = new Promise ((resolve, reject) => {
    const auth = true;
    if (auth) {
        resolve('Usuario autenticado');
    } else {
        reject('No se puede inciar sesion');
    }
});

usuarioAutenticado
    .then ( (resultado) => console.log(resultado))

    .catch((error) => console.log(error))

console.log(usuarioAutenticado)

// En las promise existen 3 valores posibles
// Pending - no se ha cumplido pero tampoco se ha rechazado
// Fulfilled - ya se cumplio
// Reject - se ha rechazado o no se pudo cumplir

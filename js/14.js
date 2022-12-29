// arrays o arreglos

const numeros = [10,10,30,39,90];
console.table(numeros);

const meses = new Array('enero', 'feb');
console.table(meses);


const arreglo = [10,10,30,39,90, "Noemi", [1,2,3,]];

// acceder a un valor de un arreglo
console.log(arreglo.length);

//conocer la extewnsion de un arreglo
// numeros.forEach(function(numeros){
//     console.log(numeros)
// });

// agregar a un arreglo
numeros.push(90) // agg al final del array
numeros.unshift(1,1,13,45) // agg al inicio del array

const meses1 = new Array('enero', 'feb', 'marzo');
console.table(meses1);

// meses1.pop(); // elimina el ultimo elemento del array
// meses1.shift(); // elimina el primer elemento del array
meses1.splice(2,1); 
console.table(meses1);

// rest operator o spread operator

const newArray = [... meses, 'junio'];
const newArray1 = ['junio', ... meses, ];
console.log(newArray);
console.log(newArray1);


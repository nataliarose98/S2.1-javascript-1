console.log('Level 3')
console.log('1.5.6 : every() y some()')

const arrayNums = [11, 12, 13, 14]
const condicion = num => num > 10

console.log('Array Original:', arrayNums)

console.log('Condición: ¿Es mayor que 10?');
const todosCumplen = numeros.every(condicion);
console.log('¿TODOS son > 10? (.every()):', todosCumplen)


const algunoCumple = numeros.some(condicion);
console.log('¿ALGUNO es > 10? (.some()):', algunoCumple)
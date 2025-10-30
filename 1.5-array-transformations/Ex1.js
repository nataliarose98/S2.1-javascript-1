console.log('Level 1')
console.log('1.5.1: Map')

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('Array original', numeros)

const alCuadrado = numeros.map(num => num * num )

console.log('Array transformado con map:', alCuadrado)
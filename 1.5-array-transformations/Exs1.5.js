console.log('Level 1')
console.log('1.5.1: Map')

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log('Array original', numeros)

const alCuadrado = numeros.map(num => num * num )

console.log('Array transformado con map:', alCuadrado)

console.log('1.5.2: Filter')

const pares = numeros.filter(num => num % 2 === 0)

console.log('Array de pares (filter)', pares)

console.log('1.5.3: Find')

const mayorADiez = numeros.find(num => num > 10)
console.log('Primer número mayor a 10 (find):', mayorADiez)

console.log('1.5.4: Reduce')

const sumaTotal = numeros.reduce((acumulador, actual) => {
    return acumulador + actual;
}, 0); 

console.log('Suma Total:', sumaTotal);
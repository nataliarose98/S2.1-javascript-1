console.log('Level 2')
console.log('1.5.5: Encadenamiento Filter-Map-Reduce')

const calcularResultado = (array) =>
    array.filter (num => num >= 10).map(num => num * 2).reduce((acc, val) => acc + val, 0)

const arrayNumeros = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]
console.log('Array original:', arrayNumeros)

const resultado = calcularResultado(arrayNumeros)

console.log('Resultado:', resultado)
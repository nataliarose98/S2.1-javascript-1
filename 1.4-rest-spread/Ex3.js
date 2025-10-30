console.log('Level 2')
console.log('1.4.3: Copiando objetos')

const objeto1 = {
    nombre: 'Natalia',
    edad: 27,
    ciudad: 'Barcelona'
}

console.log('objeto 1 original:', objeto1)

const objeto2 = {...objeto1}

console.log('objeto 2 copia:', objeto2)

objeto2.nombre = 'Pepito';
objeto2.edad = 20

console.log('Prueba:')
console.log('objeto 2 modificado :', objeto2)
console.log('objeto 1 original :', objeto1)
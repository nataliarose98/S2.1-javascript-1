console.log('level 2')
console.log('1.2.3 : Uso enlazado de OT')

function clasificarNumero(num){
    return num > 0
        ?'positivo'
        : num < 0
            ? 'negativo'
            : 'cero';
}

console.log('Pruebas:')
console.log(clasificarNumero(10))
console.log(clasificarNumero(4))
console.log(clasificarNumero(0))
console.log(clasificarNumero(100))
console.log(clasificarNumero(58))
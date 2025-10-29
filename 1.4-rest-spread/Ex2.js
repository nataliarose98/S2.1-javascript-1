console.log('1.4.2: Rest en Funciones (suma)')

function suma(...numeros){
    console.log(`Array recibido: ${numeros.join(', ')}`)

    let total = 0

    for(const num of numeros){
        total = total + num
    }

    return total 
}

console.log('Prueba:')
console.log('Resultado', suma(1, 2, 3))
console.log('Resultado', suma(100, 200, 300))
console.log('Resultado', suma())
